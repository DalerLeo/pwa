self.addEventListener('install', function (even) {
  console.warn('[Service worker] Installing ...', even);
})


self.addEventListener('activate', function (even) {
  console.warn('[Service worker] Activating ...', even)
  return self.clients.claim();
})

self.addEventListener('fetch', function (event) {
  console.warn('[Service Worker] Fetching ...', event)
  // event.respondWith(null)
})
