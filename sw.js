const CACHE_NAME = 'uk-trip-v6';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/schedule.html',
  '/hotel.html',
  '/flight.html',
  '/spots.html',
  '/info.html',
  '/checklist.html',
  '/emergency.html',
  '/styles.css',
  '/manifest.json',
  '/images/icon.svg',
  '/images/renaissance-heathrow.jpg',
  '/images/marriott-maida-vale.jpg',
  '/images/delta-liverpool.jpg',
  '/images/cavern-club.webp',
  '/images/beatles-story.jpg',
  '/images/penny-lane.jpg',
  '/images/strawberry-fields.jpg',
  '/images/wembley-stadium.jpg',
  '/images/abbey-road.webp',
  '/images/big-ben.jpg',
  '/images/tower-bridge.jpg',
  '/images/fish-and-chips.jpg',
  '/images/sunday-roast.jpg',
  '/images/munich.jpg',
  'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700;900&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'
];

// Install event - cache assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Caching app assets');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .catch(err => {
        console.log('Cache install failed:', err);
      })
  );
  self.skipWaiting();
});

// Activate event - clean old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(name => name !== CACHE_NAME)
          .map(name => caches.delete(name))
      );
    })
  );
  self.clients.claim();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') return;

  // Skip cross-origin requests except for fonts/CDN
  const url = new URL(event.request.url);
  const isExternal = url.origin !== location.origin;
  const isAllowedExternal =
    url.hostname === 'fonts.googleapis.com' ||
    url.hostname === 'fonts.gstatic.com' ||
    url.hostname === 'cdnjs.cloudflare.com' ||
    url.hostname === 'images.unsplash.com';

  if (isExternal && !isAllowedExternal) return;

  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return fetch(event.request)
          .then(response => {
            // Don't cache non-successful responses
            if (!response || response.status !== 200) {
              return response;
            }

            // Clone the response
            const responseToCache = response.clone();

            // Cache the fetched response
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });

            return response;
          })
          .catch(() => {
            // Return offline fallback for navigation requests
            if (event.request.mode === 'navigate') {
              return caches.match('/index.html');
            }
          });
      })
  );
});
