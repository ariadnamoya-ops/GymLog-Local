const C="gymlog-v8",F=["./","index.html","manifest.webmanifest","icon-192.png","icon-512.png","icon-maskable-512.png","apple-touch-icon.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(F)));self.skipWaiting()});
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",e=>{
 if(e.request.method!=="GET"||!e.request.url.startsWith("http"))return;
 e.respondWith(fetch(e.request).then(r=>{
  if(r.ok){const c=r.clone();caches.open(C).then(x=>x.put(e.request,c)).catch(()=>{})}
  return r;
 }).catch(()=>caches.match(e.request).then(m=>m||(e.request.mode==="navigate"?caches.match("index.html").then(x=>x||caches.match("./")):null)).then(m=>m||Response.error())));
});
