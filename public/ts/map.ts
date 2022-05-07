// if you believe in Allah, Jesus or Sauron, don't misuse the key.
mapboxgl.accessToken = 'pk.eyJ1Ijoia25pZ2h0ZnVyeTE2IiwiYSI6ImNreGNzdWY1djB3N2cybm1mZW1tZXNrMG4ifQ.9RcMPZ_7SHlJvo8woK_KLw';


export const map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
center: [90.411827, 23.760196],
zoom: 7
});

export const marker = new mapboxgl.Marker({color:'red'})
.setLngLat([90.411827, 23.760196])
.addTo(map);
