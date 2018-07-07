function geoFindMe() {
  /*var output = document.getElementById("out");*/

  if (!navigator.geolocation){
    alert("Geolocation is not supported by your browser");
    return;
  }

  function success(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;

    /*output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';

    var img = new Image();
    img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";

    output.appendChild(img);*/
    console.log({"Latitude":latitude,"Longitude":longitude});
    location = {"Latitude":latitude,"Longitude":longitude} ;
    /*d.resolve(location);*/
    return location;
  }

  function error() {
    /*d.resolve("error");*/
  }

  /*output.innerHTML = "<p>Locating…</p>";*/

  navigator.geolocation.getCurrentPosition(success, error);
  
  
}