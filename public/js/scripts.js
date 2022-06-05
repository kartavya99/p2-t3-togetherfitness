$( function() {
  $( "#datepicker" ).datepicker();
} );

// const googleApiKey = {
//   key: 'AIzaSyCBjwIiPdpaterE41Fr66q_8oJwC2rDIN8'
// };

// var axios = require('axios');

// var config = {
//   method: 'get',
//   url: `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=amoeba&types=establishment&location=37.76999%2C-122.44696&radius=500&key=${googleApiKey.key}`,
//   headers: { }
// };

// axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });

// function initMap(): void {
//   const originalMapCenter = new google.maps.LatLng(-25.363882, 131.044922);
//   const map = new google.maps.Map(
//     document.getElementById("map") as HTMLElement,
//     {
//       zoom: 4,
//       center: originalMapCenter,
//     }
//   );

//   const infowindow = new google.maps.InfoWindow({
//     content: "Change the zoom level",
//     position: originalMapCenter,
//   });

//   infowindow.open(map);

//   map.addListener("zoom_changed", () => {
//     infowindow.setContent("Zoom: " + map.getZoom()!);
//   });
// }

// declare global {
//   interface Window {
//     initMap: () => void;
//   }
// }
// window.initMap = initMap;
// export {};