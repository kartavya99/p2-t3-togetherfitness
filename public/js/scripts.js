$(document).ready(function(){
  $( "#datepicker" ).datepicker({ dateFormat: "yy-mm-dd" });
  $("input.timepicker").timepicker({
    timeFormat: "h:mm p",
    interval: 30,
    minTime: "10",
    maxTime: "6:00pm",
    defaultTime: "11",
    startTime: "10:00",
    dynamic: false,
    dropdown: true,
    scrollbar: true
  });
});

var x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  } 
}
    
var userLat;
var userLng;

function showPosition(position) {
    userLat =  position.coords.latitude;
    userLng =  position.coords.longitude; 

    x.innerHTML="Latitude: " + userLat + 
    "<br>Longitude: " + userLng;
    console.log(userLat);
} 

var searchList;
function searchClosest() {
  var searchLists = document.getElementsByClassName("workout-list-container");
  console.log(searchLists);
  var ids, gpsList, listId = "";
  console.log(searchLists);

  for(var i=0; i<searchLists.length; i++) {
    listId = document.getElementById(searchLists[i].id);
    gpsList = listId.getAttribute("data-sort");
    gpsList = gpsList.split(",");

    // console.log(userLat);
    // console.log(userLng);
    // console.log(gpsList[0]);
    // console.log(gpsList[1]);
    
    searchList = distance(userLat, userLng, gpsList[0], gpsList[1], "K"); 
    listId.setAttribute("data-sort", searchList);
  };
}

function reorderList(){
var divList = $(".workout-list-container");
divList.sort(function(a, b) {
    return parseInt($(b).data("sort")) - parseInt($(a).data("sort"));
});
$("#workout-list").html(divList);
console.log(divList);
};


function distance(lat1, lon1, lat2, lon2, unit) {
  var radlat1 = Math.PI * lat1/180;
  var radlat2 = Math.PI * lat2/180;
  var theta = lon1-lon2;
  var radtheta = Math.PI * theta/180;
  var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
  if (dist > 1) {
    dist = 1;
  }
  dist = Math.acos(dist);
  dist = dist * 180/Math.PI;
  dist = dist * 60 * 1.1515;
  if (unit=="K") { dist = dist * 1.609344; }
  if (unit=="N") { dist = dist * 0.8684; }
  return dist;
}


var map;
function initMap() {
  // Get all map canvas with ".maps" and store them to a variable.
  var maps = document.getElementsByClassName("maps");
  
  var ids, gps, mapId = "";

  // Loop: Explore all elements with ".maps" and create a new Google Map object for them
  for(var i=0; i<maps.length; i++) {

    // Get ID of single div
    mapId = document.getElementById(maps[i].id);

    // Get LatLng stored in data attribute. 
    // !!! Make sure there is no space in data-attribute !!!
    // !!! and the values are separated with comma !!!
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
