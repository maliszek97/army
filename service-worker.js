const MY_CACHE = 'cache-name';

const MY_FILES = [
        '/css/style.css',
        '/js/index.js',
        '/icon/192.png'
        '/icon/army-icon.jpg'
        'https://my-json-server.typicode.com/maliszek97/json-server/db'
        'index.html'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(MY_CACHE).then(function(cache) {
      return cache.addAll(MY_FILES);
    })
  );
});

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
