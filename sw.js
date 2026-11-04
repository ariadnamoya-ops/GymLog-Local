const C="gymlog-v7", F=["./","index.html","manifest.webmanifest","icon-192.png","icon-512.png","apple-touch-icon.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(C).then(async c=>{for(const url of F){try{await c.add(url)}catch(err){/* keep installing if one optional asset is unavailable */}}}));self.skipWaiting()});
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x.startsWith("gymlog-")&&x!==C).map(x=>caches.delete(x))))).then(()=>self.clients.claim()));
self.addEventListener("fetch",e=>{
 const req=e.request;if(req.method!=="GET"||new URL(req.url).origin!==self.location.origin)return;
 // Cache-first for the app shell: open immediately in a gym with weak/no signal.
 e.respondWith((async()=>{const cache=await caches.open(C);const cached=await cache.match(req);
  const update=fetch(req).then(res=>{if(res&&res.ok){cache.put(req,res.clone())}return res}).catch(()=>null);
  if(cached){e.waitUntil(update);return cached}
  const fresh=await update;if(fresh)return fresh;return cache.match("./")||Response.error();
 })());
});
