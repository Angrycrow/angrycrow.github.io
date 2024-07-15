// Basic map display stuff.
let map;
let poly; 
let infoWindow; 

function initMap() 
{
    const map = new google.maps.Map(document.getElementById('map'), 
    {
        center: {lat: 34.233, lng: -118.578},
        zoom: 17,
        mapId: '9f06e9facff83033',
        disableDefaultUI: true,
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: true,
        streetViewControl: true,
        rotateControl: true,
        fullscreenControl: false
    });
        
    // Creates button in top center. 
    const locationButton = document.createElement("button");
    const infoWindow = new google.maps.InfoWindow(); 
    locationButton.textContent = "Pan to Current Location";
    locationButton.classList.add("custom-map-control-button");

    poly = new google.maps.Polyline({
        strokeColor: "#000000",
        strokeOpacity: 1.0,
        strokeWeight: 3,
      });
      poly.setMap(map);
      // Add a listener for the click event
      map.addListener("click", addLatLng);

    map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
    // Scroll to user location. 
    locationButton.addEventListener("click", () => 
        {
            // Try HTML5 geolocation.
            if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
            (position) => {
                const pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
                };

                infoWindow.setPosition(pos);
                infoWindow.setContent("Location found.");
                infoWindow.open(map);
                map.setCenter(pos);
            },
            () => {
                handleLocationError(true, infoWindow, map.getCenter());
            },
            );
            } else {
            // Browser doesn't support Geolocation
            handleLocationError(false, infoWindow, map.getCenter());
            }
        });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) 
{
    infoWindow.setPosition(pos);
    infoWindow.setContent(
        browserHasGeolocation
        ? "Error: The Geolocation service failed."
        : "Error: Your browser doesn't support geolocation.",
    );
    infoWindow.open(map);
}

// Handles click events on a map, and adds a new point to the Polyline.
function addLatLng(event) {
    const path = poly.getPath();
  
    // Because path is an MVCArray, we can simply append a new coordinate
    // and it will automatically appear.
    path.push(event.latLng);
    // Add a new marker at the new plotted point on the polyline.
    new google.maps.Marker({
      position: event.latLng,
      title: "#" + path.getLength(),
      map: map,
    });
  }
  
  window.initMap = initMap;
