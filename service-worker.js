const CACHE='j1-kashiwa-left-v1';
const CORE=["./index.html", "./manifest.webmanifest", "./icons/icon-192.png", "./icons/icon-512.png"];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CORE[0]).then(c=>caches.open(CACHE).then(c2=>c2.addAll(CORE))))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.map(k=>k!==CACHE?caches.delete(k):null))))});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(nr=>{const c=nr.clone(); caches.open(CACHE).then(cc=>cc.put(e.request,c)); return nr;}).catch(()=>caches.match('./index.html'))))});
