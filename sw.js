/* Service worker: guarda la app en el dispositivo para que funcione sin conexión.
   IMPORTANTE: cada vez que cambies algo, sube el número de VERSION (v1 → v2…)
   para que los alumnos reciban la versión nueva. */
const VERSION = "aula-arte-v1";
const ARCHIVOS = [
  "./", "./index.html", "./estilos.css", "./js/app.js", "./manifest.webmanifest",
  "./icon.svg", "./icon-180.png", "./icon-192.png", "./icon-512.png",
  "./datos/arte-griego.js",
  "./img/esquemas/ordenes.jpg",
  "./img/esquemas/postura.jpg",
  "./img/esquemas/teatro.jpg",
  "./img/esquemas/templo.jpg",
  "./img/griego/apoxiomeno.jpg",
  "./img/griego/atenea-nike.jpg",
  "./img/griego/auriga-delfos.jpg",
  "./img/griego/cariatides.jpg",
  "./img/griego/discobolo.jpg",
  "./img/griego/doriforo.jpg",
  "./img/griego/epidauro.jpg",
  "./img/griego/hermes-praxiteles.jpg",
  "./img/griego/kouros-anavysos.jpg",
  "./img/griego/metopa-partenon.jpg",
  "./img/griego/partenon.jpg",
  "./img/griego/pergamo-atenea-gea.jpg",
  "./img/griego/venus-milo.jpg",
  "./img/griego/victoria-samotracia.jpg",
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(ARCHIVOS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((claves) => Promise.all(claves.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Imágenes: primero la copia guardada (rápido). Resto: primero internet (siempre lo último) y, sin conexión, la copia.
self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;

  if (req.destination === "image") {
    e.respondWith(
      caches.match(req).then((guardada) => guardada || fetch(req).then((res) => {
        const copia = res.clone();
        caches.open(VERSION).then((c) => c.put(req, copia));
        return res;
      }))
    );
    return;
  }

  e.respondWith(
    fetch(req)
      .then((res) => {
        const copia = res.clone();
        caches.open(VERSION).then((c) => c.put(req, copia));
        return res;
      })
      .catch(() => caches.match(req, { ignoreSearch: true }))
  );
});
