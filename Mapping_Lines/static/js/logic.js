// Add console.log to check to see if our code is working.
console.log("working");

// We create the map object with options.
let map = L.map('mapid').setView([35.8998, -97.0403], 5);

// Coordinates for each point to be used in the polyline.
let line = [
	[33.9416, -118.4085],
	[30.1975, -97.6664],
	[43.6777, -79.6248],
	[40.6413, -73.7781]
  ];

// Create a polyline using the line coordinates.
L.polyline(line, {
	color: "blue",
	dashArray: 4,
	weight: 4,
	opacity: 0.5
  }).addTo(map);

// We create the tile layer that will be the background of our map.
let routemap = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
routemap.addTo(map);