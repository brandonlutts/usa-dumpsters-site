// Leaflet service radius map
// Centered near Cincinnati, Ohio with a 50-mile service radius.
(function () {
  const mapEl = document.getElementById('serviceMap');
  if (!mapEl || typeof L === 'undefined') return;

  const cincinnati = [39.1031, -84.5120];
  const radiusMeters = 50 * 1609.344;

  const map = L.map(mapEl, {
    scrollWheelZoom: false,
    zoomControl: true
  }).setView(cincinnati, 8);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  L.circle(cincinnati, {
    radius: radiusMeters,
    color: '#073777',
    weight: 4,
    opacity: 0.9,
    fillColor: '#073777',
    fillOpacity: 0.12
  }).addTo(map);

  // Fix default Leaflet icon paths


  map.whenReady(() => {
    setTimeout(() => map.invalidateSize(), 250);
  });
})();
