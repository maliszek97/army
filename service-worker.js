var APP_PREFIX = 'SoldierTeam'
var VERSION = 'version1'           
var CACHE_NAME = APP_PREFIX + VERSION

var URLS = [
    '/',
    'index.html',
    'js/index.js',
    'css/style.css',
    'icon/128.png',
    'icon/144.png',
    'icon/152.png',
    'icon/192.png',
    'icon/256.png',
    'icon/512.png',
    'https://my-json-server.typicode.com/maliszek97/json-server/db'
];
self.addEventListener('fetch', function (e) {
  console.log('fetch request : ' + e.request.url)
  e.respondWith(
    caches.match(e.request).then(function (request) {
      if (request) {
        console.log('responding with cache : ' + e.request.url)
        return request
      } else {    
        console.log('file is not cached, fetching : ' + e.request.url)
        return fetch(e.request)
      }
    })
  )
})
self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log('installing cache : ' + CACHE_NAME)
      return cache.addAll(URLS)
    })
  )
})

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keyList) {
      var cacheWhitelist = keyList.filter(function (key) {
        return key.indexOf(APP_PREFIX)
      })
      cacheWhitelist.push(CACHE_NAME)

      return Promise.all(keyList.map(function (key, i) {
        if (cacheWhitelist.indexOf(key) === -1) {
          console.log('deleting cache : ' + keyList[i] )
          return caches.delete(keyList[i])
        }
      }))
    })
  )
})
