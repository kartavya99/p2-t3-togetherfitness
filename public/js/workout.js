// var map;
// function initMap() {
//   // Get all map canvas with ".maps" and store them to a variable.
//   var maps = document.getElementsByClassName("maps");
  
//   var ids, gps, mapId = "";

//   // Loop: Explore all elements with ".maps" and create a new Google Map object for them
//   for(var i=0; i<maps.length; i++) {

//     // Get ID of single div
//     mapId = document.getElementById(maps[i].id);

//     // Get LatLng stored in data attribute. 
//     // !!! Make sure there is no space in data-attribute !!!
//     // !!! and the values are separated with comma !!!
//     gps = mapId.getAttribute("data-gps");

//     // Convert LatLng to an array
//     gps = gps.split(",");

//     // Create new Google Map object for single canvas 
//     map = new google.maps.Map(mapId, {
//       zoom: 8,
//       // Use our LatLng array bellow
//       center: new google.maps.LatLng(parseFloat(gps[0]), parseFloat(gps[1])),
//       mapTypeId: "roadmap",
//       mapTypeControl: true,
//       zoomControlOptions: {
//           position: google.maps.ControlPosition.RIGHT_TOP
//       }
//     });

//     // Create new Google Marker object for new map
//     var marker = new google.maps.Marker({
//       // Use our LatLng array bellow
//       position: new google.maps.LatLng(parseFloat(gps[0]), parseFloat(gps[1])),
//       map: map
//     });
//   }
// }

// document.addEventListener("DOMContentLoaded", function() {
//   initMap();
// });