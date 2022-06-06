const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#new-workout-title").value.trim();
  const type = document.querySelector("#new-workout-type").value.trim();
  const size = document.querySelector("#new-workout-size").value.trim();
  const date = document.querySelector("#datepicker").value.trim();
  const time = document.querySelector("#new-workout-time").value.trim();
  const duration = document.querySelector("#new-workout-duration").value.trim();
  const location = document.querySelector("#location-name").value.trim();
  const address = document.querySelector("#location-address").value.trim();
  const lat = document.querySelector("#location-lat").value.trim();
  const lng = document.querySelector("#location-lng").value.trim();
  const url = document.querySelector("#location-url").value.trim();
  const description = document.querySelector("#new-workout-description").value.trim();

  if ( title && type && size && date && time && duration && location && address && lat && lng && url && description ) {
    const response = await fetch(`/api/workout`, {
      method: "POST",
      body: JSON.stringify({ title, type, size, date, time, duration, location, address, lat, lng, url, description }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to create New Workout");
    }
  }
};


document
  .querySelector('.new-workout-form')
  .addEventListener('submit', newFormHandler);


function initialize() {
  var input = document.getElementById("location-find");
  var autocomplete = new google.maps.places.Autocomplete(input, {
    componentRestrictions: { country: ["au"] } });

    google.maps.event.addListener(autocomplete, "place_changed", function () {
        var place = autocomplete.getPlace();
        console.log(place);
        console.log(place.address_components);
        document.getElementById("location-name").value = place.name;
        // document.getElementById("cityPost").value = place.address_components.5.long_name;
        document.getElementById("location-address").value = place.formatted_address;
        document.getElementById("location-lat").value = place.geometry.location.lat();
        document.getElementById("location-lng").value = place.geometry.location.lng();
        document.getElementById("location-url").value = place.url;
    });
}

google.maps.event.addDomListener(window, "load", initialize);

