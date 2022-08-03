'use strict'

let currLocation = {}

// Initialize and add the map
function initMap() {
    // The location of Eilat
    const origin = { lat: 29.555, lng: 34.958 };
    // The map, centered at Eilat
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: origin,
    });
    // The marker, positioned at Eilat
    const marker = new google.maps.Marker({
      position: origin,
      map: map,
    });
  }
  
  window.initMap = initMap;
  
  

  function getPosition() {
    if (!navigator.geolocation) {
        alert('HTML5 Geolocation is not supported in your browser')
        return
    }

    // One shot position getting or continus watch
    navigator.geolocation.getCurrentPosition(showLocation, handleLocationError)
    // navigator.geolocation.watchPosition(showLocation, handleLocationError)
}

function showLocation(position) {
    console.log(position);
    document.getElementById("latitude").innerHTML = position.coords.latitude    
    document.getElementById("longitude").innerHTML = position.coords.longitude
    document.getElementById("accuracy").innerHTML = position.coords.accuracy
    
    currLocation = {lat: position.coords.latitude, lng: position.coords.longitude}
    
    var date = new Date(position.timestamp)
    document.getElementById("timestamp").innerHTML = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
    initMap(position.coords.latitude, position.coords.longitude)
    

}

function handleLocationError(error) {
    var locationError = document.getElementById("locationError")

    switch (error.code) {
        case 0:
            locationError.innerHTML = "There was an error while retrieving your location: " + error.message
            break
        case 1:
            locationError.innerHTML = "The user didn't allow this page to retrieve a location."
            break
        case 2:
            locationError.innerHTML = "The browser was unable to determine your location: " + error.message
            break
        case 3:
            locationError.innerHTML = "The browser timed out before retrieving the location."
            break
    }
}