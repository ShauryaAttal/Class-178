var latitude = 34.043294439653145;
var longitute = -84.21825863944609;

//initialise mapbox

mapboxgl.accessToken =
  "pk.eyJ1IjoieWFtdW5hMTIzIiwiYSI6ImNsMWRhcHY3ejA4ZGoza24zazdrNmNmaGwifQ.t-kPX15gsZG7azvrzyHfZA";

var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [longitute, latitude],
  zoom: 16,
});

map.addControl(
    new mapboxgl.GeolocateControl({
       positionOptions: {
            enableHighAccuracy: true
       },
       trackUserLocation: true 
    })
)

map.addControl(
  new MapboxDirections({
    accessToken: mapboxgl.accessToken,
  }),
  'top-left'
);
