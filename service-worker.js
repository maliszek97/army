const MY_CACHE = 'cache-name';

const MY_FILES = [
        '/css/style.css',
        '/js/index.js',
        '/icon/192.png',
        '/icon/army-icon.jpg',
        'https://my-json-server.typicode.com/maliszek97/json-server/db'
];

caches.open(MY_CACHE).then(cache => {
  return cache.match(evt.request).then(cacheResponse => cacheResponse || fetch(evt.request).then(networkResponse => {
  cache.put(evt.request, networkResponse.clone());
  return networkResponse;
}));

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          return cacheName !== MY_CACHE;
        }).map(function(cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {
      return caches.match(event.request);
    })
  );
});
