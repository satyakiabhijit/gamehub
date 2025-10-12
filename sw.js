// Service Worker for GameHub
// Provides offline functionality and caching

const CACHE_NAME = 'gamehub-v1.0.1';
const urlsToCache = [
    '/',
    '/index.html',
    '/styles.css',
    '/gameEngine.js',
    '/games.js',
    '/app.js',
    'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
];

// Install event - cache files
self.addEventListener('install', event => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('🔧 Caching GameHub files');
                return cache.addAll(urlsToCache);
            })
    );
});

// Fetch event - serve from cache when offline
self.addEventListener('fetch', event => {
    // Only handle GET
    if (event.request.method !== 'GET') return;

    const url = new URL(event.request.url);
    const isSameOrigin = url.origin === self.location.origin;
    const isCoreAsset = isSameOrigin && (
        url.pathname.endsWith('.js') ||
        url.pathname.endsWith('.css') ||
        url.pathname.endsWith('.html') ||
        url.pathname === '/'
    );

    if (isCoreAsset) {
        // Network-first: ensures new deploys are visible
        event.respondWith(
            fetch(event.request)
                .then(resp => {
                    const copy = resp.clone();
                    caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
                    return resp;
                })
                .catch(() => caches.match(event.request))
        );
        return;
    }

    // Cache-first for other requests (e.g., fonts, icons)
    event.respondWith(
        caches.match(event.request).then(cached => {
            return cached || fetch(event.request).then(resp => {
                const copy = resp.clone();
                caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
                return resp;
            }).catch(() => cached);
        })
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('🔧 Removing old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

// Allow page to send a message to activate waiting SW immediately
self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});