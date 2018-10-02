function init(){
	if (navigator.geolocation){
		navigator.geolocation.getCurrentPosition(displayLocation);
	}else{
		alert("No geo")
	}

}

function displayLocation(position){
	var lat = position.coords.latitude;
	var lon = position.coords.longitude;

	var div = document.getElementById("location");
	div.innerHTML = "Lat: " + lat + ". Long: " + lon;
}

window.onload = init;
