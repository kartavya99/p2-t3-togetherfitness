$(document).ready(function(){
  getLocation();
});

var x = document.getElementById("warning");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 

  } 
}
    
var userLat;
var userLng;

function showPosition(position) {
    userLat =  position.coords.latitude;
    userLng =  position.coords.longitude; 
    searchClosest();
} ;

var searchList;

function searchClosest() {
  var searchLists = $(".workout-list-container");

  var ids, gpsList, listId = "";

  for(var i=0; i<searchLists.length; i++) {
    listId = document.getElementById(searchLists[i].id);
    gpsList = listId.getAttribute("data-sort");
    gpsList = gpsList.split(",");
    searchList = distance(userLat, userLng, gpsList[0], gpsList[1], "K"); 
    listId.setAttribute("data-sort", searchList);
  };
  appendFilterBtn ();
};

function appendFilterBtn () {
  $("#filter-workout").append(`
  <button id="reorder" class="btn find-btn" onclick="reorderList()">Find workouts closest to me</button> 
`    
  );
};


function reorderList(){
var divList = $(".workout-list-container");
divList.sort(function(a, b) {
    return parseInt($(a).data("sort")) - parseInt($(b).data("sort"));
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



filterSelection("all");

function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("workout-list-container");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    filterRemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) filterAddClass(x[i], "show");
  }
}

// Show filtered elements
function filterAddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function filterRemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("filter-btn");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}