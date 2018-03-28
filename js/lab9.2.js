document.addEventListener('DOMContentLoaded', function() {
    
    var map = L.map('map').setView([40.05127, -105.64071], 10);


    L.tileLayer('https://api.mapbox.com/styles/v1/brightrain/ciycbsoa8007c2rqf7ym69old/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYnJpZ2h0cmFpbiIsImEiOiJyMjgtNGk4In0.Y64dPMiS4Xi8BXRiDhWXyg',
                {

        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',

        maxZoom: 18

    }).addTo(map);


    function showLatLng(e) 
    {
        document.getElementById("whereIsThis").innerText = (e.latlng.lat).toFixed(5) + " | " + (e.latlng.lng).toFixed(5);
    }
    map.on('mousemove', showLatLng);


    document.getElementById("goToFRCCBoulder").onclick = function()
    {
        map.setView([40.1386, -105.12793], 16);
    };


    document.getElementById("goToRMNP").onclick = function()
    {
        map.setView([40.4, -105.8], 12);
    };



    var geojsonFeature = {
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -105.5624771118164,
                        40.0680881132379
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "marker-color": "#7e7e7e",
                    "marker-size": "medium",
                    "marker-symbol": "",
                    "Name": "Long Lake"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -105.61946868896484,
                        40.06940179082131
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -105.5240249633789,
                        40.11693985890127
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -105.74752807617188,
                        40.05468715477417
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -105.58547973632812,
                        40.02945467133602
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -105.66410064697266,
                        40.0759697987031
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -105.64624786376953,
                        40.085163945601664
                    ]
                }
            }
        ]
    }
    L.geoJSON(geojsonFeature).addTo(map);
});