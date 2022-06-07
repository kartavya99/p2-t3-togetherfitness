var map;
function initMap() {
  var maps = document.getElementsByClassName("maps");
  
  var ids, gps, mapId = "";

  // Loop: Explore all elements with ".maps" and create a new Google Map object for them
  for(var i=0; i<maps.length; i++) {

    // Get ID of single div
    mapId = document.getElementById(maps[i].id);

    gps = mapId.getAttribute("data-gps");

    // Convert LatLng to an array
    gps = gps.split(",");

    // Create new Google Map object for single canvas 
    map = new google.maps.Map(mapId, {
      zoom: 14,
      // Use our LatLng array bellow
      center: new google.maps.LatLng(parseFloat(gps[0]), parseFloat(gps[1])),
      mapTypeId: "roadmap",
      mapTypeControl: true,
      zoomControlOptions: {
          position: google.maps.ControlPosition.RIGHT_TOP
      }
    });

    // Create new Google Marker object for new map
    var marker = new google.maps.Marker({
      // Use our LatLng array bellow
      position: new google.maps.LatLng(parseFloat(gps[0]), parseFloat(gps[1])),
      map: map
    });
  }
}

document.addEventListener("DOMContentLoaded", function() {
  initMap();
});