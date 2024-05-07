// Initialize Leaflet map
var map = L.map('nymap').setView([40.54721107970578, -74.2189738803235], 13); // Set center to New York City and zoom level

// Add a tile layer to the map (for example, OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add a marker to the map for New York City
var marker = L.marker([40.55128137725361, -74.21251473397405]).addTo(map);

// Add a popup to the marker
marker.bindPopup("<b>Carvel</b><br>This is a Leaflet map.").openPopup();

// Add a marker to the map for New York City
var rockefellercentermarker = L.marker([40.75912164529136, -73.97860716497993]).addTo(map);

// Add a popup to the marker
rockefellercentermarker.bindPopup(`
    <b>Rockefeller Center</b><br>A historic landmark featuring plazas and iconic attractions.<br>
    <img src="https://oleksandravavilova.github.io/Oleksandra/images/RC.webp" style="width: 100px; height: auto;">
`).openPopup();


// Add a marker to the map for New York City
var bryantparkmarker = L.marker([40.75358113759977, -73.98293393025328]).addTo(map);


// Add a popup to the marker
bryantparkmarker.bindPopup(`
    <b>Bryant Park</b><br>A fantastic green space with cafes, perfect for relaxation and leisure in the heart of the city.<br>
    <img src="https://oleksandravavilova.github.io/Oleksandra/images/BP.jpeg" style="width: 100px; height: auto;">
`).openPopup();

// Add a marker to the map for New York City
var krispykrememarker = L.marker([40.75177572603904, -73.98612841772126]).addTo(map);


// Add a popup to the marker
krispykrememarker.bindPopup(`
    <b>Krispy Kreme</b><br> Famous place for its delicious glazed doughnuts.<br>
    <img src="https://OleksandraVavilova.github.io/Oleksandra/images/KK.jpeg"  style="width: 100px; height: auto;">
`).openPopup();


// Add a marker to the map for New York City
var empirestatebuildingmarker = L.marker([40.74864125779539, -73.98563825262]).addTo(map);


// Add a popup to the marker
empirestatebuildingmarker.bindPopup(`
    <b>Empire State Building</b><br>Iconic skyscraper with breathtaking views.<br>
    <img src="https://OleksandraVavilova.github.io/Oleksandra/images/ESB.jpeg"  style="width: 100px; height: auto;">
`).openPopup();

// Add a marker to the map for New York City
var cityhallparkmarker = L.marker([40.712496509529146, -74.00652315490349]).addTo(map);


// Add a popup to the marker
cityhallparkmarker.bindPopup(`
    <b>City Hall Park</b><br>City Hall Park has the oldest City Hall building in the US. The City Hall combines French Renaissance and English Neoclassical architectural styles. It is a beautiful and historical place<br>
    <img src="https://OleksandraVavilova.github.io/Oleksandra/images/CH.jpeg"  style="width: 100px; height: auto;">
`).openPopup();

// Add a marker to the map for New York City
var brooklynbridgemarker = L.marker([40.706987872790904, -73.99781806664545]).addTo(map);


// Add a popup to the marker
brooklynbridgemarker.bindPopup(`
    <b>Brooklyn Bridge Promenade</b><br>Brooklyn Bridge Promenade has good views of the city.<br>
    <img src="https://OleksandraVavilova.github.io/Oleksandra/images/BB.jpeg"  style="width: 100px; height: auto;">
`).openPopup();

// Add a marker to the map for New York City
var julianaspizzamarker = L.marker([40.702743353175784, -73.99345837026809]).addTo(map);


// Add a popup to the marker
julianaspizzamarker.bindPopup(`
    <b>Juliana's Pizza</b><br>Great pizza place.<br>
    <img src="https://OleksandraVavilova.github.io/Oleksandra/images/Juliana's_Pizza.jpeg"  style="width: 100px; height: auto;">
`).openPopup();

// Add a marker to the map for New York City
var brooklynbridgeparkmarker = L.marker([40.70232734855437, -73.99587245724803]).addTo(map);


// Add a popup to the marker
brooklynbridgeparkmarker.bindPopup(`
    <b>Brooklyn Bridge Park</b><br>Waterfront park with good views of the city and picnic areas.<br>
    <img src="https://OleksandraVavilova.github.io/Oleksandra/images/BBP.jpeg"  style="width: 100px; height: auto;">
`).openPopup();

// Load the GeoJSON line file
fetch('https://OleksandraVavilova.github.io/Oleksandra/Oleksandra_daytimeroute.geojson')
    .then(response => response.json())
    .then(geojson => {
        // Customize the style of the line
        var lineStyle = {
            color: 'blue', // Change color as needed
            weight: 5, // Change weight as needed
            opacity: 0.7 // Change opacity as needed
        };

        // Add the GeoJSON line to the map
        L.geoJSON(geojson, {
            style: lineStyle
        }).addTo(map);
    })
    .catch(error => {
        console.error('Error loading GeoJSON file:', error);
    });

// Load the GeoJSON line file
fetch('https://OleksandraVavilova.github.io/Oleksandra/Oleksandra_eveningroute.geojson')
    .then(response => response.json())
    .then(geojson => {
        // Customize the style of the line
        var lineStyle = {
            color: 'red', // Change color as needed
            weight: 5, // Change weight as needed
            opacity: 0.7 // Change opacity as needed
        };

        // Add the GeoJSON line to the map
        L.geoJSON(geojson, {
            style: lineStyle
        }).addTo(map);
    })
    .catch(error => {
        console.error('Error loading GeoJSON file:', error);
    });

// Load the GeoJSON polygon file
fetch('https://OleksandraVavilova.github.io/Oleksandra/daytimebuildings.geojson')
.then(response => response.json())
.then(geojson => {
    // Customize the style of the polygon
    var polygonStyle = {
        fillColor: 'blue', // Fill color
        fillOpacity: 0.5, // Fill opacity
    };

    // Add the GeoJSON polygon to the map
    L.geoJSON(geojson, {
        style: polygonStyle
    }).addTo(map);
})
.catch(error => {
    console.error('Error loading GeoJSON file:', error);
});

// Load the GeoJSON polygon file
fetch('https://OleksandraVavilova.github.io/Oleksandra/eveningbuildings.geojson')
.then(response => response.json())
.then(geojson => {
    // Customize the style of the polygon
    var polygonStyle = {
        fillColor: 'red', // Fill color
        fillOpacity: 0.5, // Fill opacity
    };

    // Add the GeoJSON polygon to the map
    L.geoJSON(geojson, {
        style: polygonStyle
    }).addTo(map);
})
.catch(error => {
    console.error('Error loading GeoJSON file:', error);
});

var categoryColors = {
    "1": "F00267",
    "2": "E25892",
    "3": "E88CB3",
    "4": "FDC9DF",
    "X": "F1E8EC" // Default color for other categories
};


// Function to set style based on category
function getFeatureStyle(feature) {
    var category = feature.properties.hurricane_; // Adjust property name
    var color = categoryColors[category] || "gray"; // Default color if category not found
    var fillOpacity = category === "X" ? 0 : 0.6; // Set fill opacity to 0 for "X" category
    return {
        fillColor: color,
        fillOpacity: fillOpacity,
    };
}


// Load the GeoJSON polygon file
fetch('https://oleksandravavilova.github.io/Oleksandra/Hurricane.geojson')
.then(response => response.json())
.then(geojson => {
    // Add the GeoJSON polygons to the map with customized style
    L.geoJSON(geojson, {
        style: getFeatureStyle
    }).addTo(map);
})
.catch(error => {
    console.error('Error loading GeoJSON file:', error);
});