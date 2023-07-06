// Initialize the map
var map = L.map('map').setView([0, 0], 2);

// Add a tile layer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
  maxZoom: 18,
  minZoom: 2
}).addTo(map);

// JSON type file of every olympic game
var olympicStadiums = [
    {
        "name": "Panathenean Stadium",
        "time": "<br>Summer 1896<br>Summer 1906",
        "place": "Athina, Greece",
        "latitude": 37.96851179934359,
        "longitude": 23.74164287535313,
        "ID": "1"
    },
    {
        "name": "Vincennes Velodrome",
        "time": "Summer 1900",
        "place": "Paris, France",
        "latitude": 48.929361664090536,
        "longitude": 2.929361664090536,
        "ID": "2"
    },
    {
        "name": "Francis Field",
        "time": "Summer 1904",
        "place": "St. Louis, United States",
        "latitude": 38.648029346790615,
        "longitude": -90.312748455825,
        "ID": "3"
    },
    {
        "name": "White City Stadium",
        "time": "Summer 1908",
        "place": "London, Great Britain",
        "latitude": 51.513736467201056,
        "longitude": -0.2274454869783991,
        "ID": "5"
    },
    {
        "name": "Stockholm Olympic Stadium",
        "place": "Stockholm, Sweden", 
        "time": "Summer 1912",
        "latitude": 59.34547313713457,
        "longitude": 18.07944158773948,
        "ID": "6"
    },
    {
        "name": "Olympisch Stadion",
        "place": "Antwerpen, Belgium", 
        "time": "Summer 1920",
        "latitude": 51.34346973274985,
        "longitude": 4.854423712611259,
        "ID": "7"
    },
    {
        "name": "Stade Olympique Yves-du-Manoir",
        "place": "Chamonix, France", 
        "time": "Winter 1924",
        "latitude": 45.9268756356439,
        "longitude": 6.874697775602907,
        "ID": "9"
    },
    {
        "name": "Olympic Stadium",
        "place": "Amsterdam, Netherlands", 
        "time": "Summer 1928",
        "latitude": 52.34716150353582,
        "longitude": 4.869218712021125,
        "ID": "10"
    },
    {
        "name": "Olympic Stadium",
        "place": "Sankt Moritz, Switzerland", 
        "time": "Winter 1928",
        "latitude": 46.50110775563156,
        "longitude": 9.850229475622472,
        "ID": "11"
    },
    {
        "name": "Los Angeles Memorial Coliseum",
        "place": "Los Angeles, United States", 
        "time": "Summer 1932",
        "latitude": 34.01420376379888,
        "longitude": -118.28759108799342,
        "ID": "12"
    },
    {
        "name": "Lake Placid Speedskating Oval",
        "place": "Lake Placid, United States", 
        "time": "Winter 1932",
        "latitude": 44.28296776771259,
        "longitude": -73.98338255514307,
        "ID": "13"
    },
    {
        "name": "Olympic Stadium",
        "place": "Berlin, Germany", 
        "time": "Summer 1936",
        "latitude": 52.514516702569374,
        "longitude": 13.239777716956493,
        "ID": "14"
    },
    {
        "name": "Große Olympiaschanze",
        "place": "Garmisch-Partenkirchen, Germany", 
        "time": "Winter 1936",
        "latitude": 47.48014028051524,
        "longitude": 11.119571861911925,
        "ID": "15"
    },
    {
        "name": "Wembley Stadium",
        "place": "London, Great Britain", 
        "time": "<br>Summer 1948",
        "latitude": 51.556282430763794,
        "longitude": -0.2775070028561945,
        "ID": "16"
    },
    {
        "name": "St. Moritz Olympic Ice Rink",
        "place": "Sankt Moritz, Switzerland", 
        "time": "Winter 1948",
        "latitude": 46.50116683634173,
        "longitude": 9.850358221659391,
        "ID": "17"
    },
    {
        "name": "Helsinki Olympic Stadium",
        "place": "Helsinki, Finland", 
        "time": "Summer 1952",
        "latitude": 60.187270862546626,
        "longitude": 24.927276689627757,
        "ID": "18"
    },
    {
        "name": "Bislett Stadium",
        "place": "Oslo, Norway", 
        "time": "Winter 1952",
        "latitude": 59.92514481937813,
        "longitude": 10.73339584965151,
        "ID": "19"
    },
    {
        "name": "Melbourne Cricket Ground",
        "place": "Melbourne, Australia", 
        "time": "Summer 1956",
        "latitude": -37.8197466184416,
        "longitude": 144.98351599023061,
        "ID": "20"
    },
    {
        "name": "Stadio Olimpico Del Ghiaccio",
        "place": "Cortina d'Ampezzo, Italy", 
        "time": "Winter 1956",
        "latitude": 46.54407104733599,
        "longitude": 12.134509423515674,
        "ID": "22"
    },
    {
        "name": "Olympic Stadium",
        "place": "Rome, Italy",
        "time": "Summer 1960",
        "latitude": 41.93415195662824,
        "longitude": 12.454867347150548,
        "ID": "23"
    },
    {
        "name": "Blyth Arena & Squaw Valley Olympic Skating Rink",
        "place": "Squaw Valley, United States",
        "time": "Winter 1960",
        "latitude": 43.73640595749786,
        "longitude": -81.43126322075989,
        "ID": "24"
    },
    {
        "name": "National Stadium",
        "place": "Tokyo, Japan",
        "time": "Summer 1964",
        "latitude": 35.67792859857998,
        "longitude": 139.71502368177985,
        "ID": "25"
    },
    {
        "name": "Bergiselschanze (opening ceremony), Olympiahalle (closing ceremony)",
        "place": "Innsbruck, Austria",
        "time": "Winter 1964",
        "latitude": 47.249210819239586,
        "longitude": 11.400197965867031,
        "ID": "26"
    },
    {
        "name": "Estadio Azteca",
        "place": "Mexico City, Mexico",
        "time": "Summer 1968",
        "latitude": 19.332135212784426,
        "longitude": -99.19159298088293,
        "ID": "27"
    },
    {
        "name": "Olympic Stadium (opening ceremony), Le Stade de Glace (closing ceremony)",
        "place": "Grenoble, France",
        "time": "Winter 1968",
        "latitude": 45.16575,
        "longitude": 5.73235,
        "ID": "28"
    },
    {
        "name": "Olympic Stadium (Olympiastadion)",
        "place": "Munich, Germany",
        "time": "Summer 1972",
        "latitude": 52.514823980902456,
        "longitude": 13.239851907913465,
        "ID": "29"
    },
    {
        "name": "Makomanai Open Stadium (opening ceremony), Makomanai Ice Arena (closing ceremony)",
        "place": "Sapporo, Japan",
        "time": "Winter 1972",
        "latitude": 42.99648015504509,
        "longitude": 141.34328146994184,
        "ID": "30"
    },
    {
        "name": "Montreal Olympic Stadium",
        "place": "Montreal, Canada",
        "time": "Summer 1976",
        "latitude": 45.55789482923893,
        "longitude": -73.5520911951095,
        "ID": "31"
    },
    {
        "name": "Bergiselschanze (opening ceremony), Olympiahalle (closing ceremony)",
        "place": "Innsbruck, Austria",
        "time": "Winter 1976",
        "latitude": 47.249174404975605,
        "longitude": 11.399854643101914,
        "ID": "32"
    },
    {
        "name": "Luzhniki Stadium",
        "place": "Moskva, Soviet Union",
        "time": "Summer 1980",
        "latitude": 55.7159470751,
        "longitude": 37.55540998881686,
        "ID": "33"
    },
    {
        "name": "Lake Placid Equestrian Stadium (opening ceremony), Olympic Center Arena (closing ceremony)",
        "place": "Lake Placid, United States",
        "time": "Winter 1980",
        "latitude": 44.2591,
        "longitude": -73.9647,
        "ID": "34"
    },
    {
        "name": "Los Angeles Memorial Coliseum",
        "place": "Los Angeles, United States",
        "time": "Summer 1984",
        "latitude": 34.014168191309565,
        "longitude": -118.28755890148419,
        "ID": "35"
    },
    {
        "name": "Olympic Stadium (opening ceremony), Zetra Olympic Hall (closing ceremony)",
        "place": "Sarajevo, Yugoslavia",
        "time": "Winter 1984",
        "latitude": 43.873833588042025,
        "longitude": 18.40925543691735,
        "ID": "36"
    },
    {
        "name": "Seoul - Olympic Stadium",
        "place": "Seoul, South Korea",
        "time": "Summer 1988",
        "latitude": 37.51595671904125,
        "longitude": 127.07370518461448,
        "ID": "37"
    },
    {
        "name": "McMahon Stadium",
        "place": "Calgary, Canada",
        "time": "Winter 1988",
        "latitude": 51.07056788505059,
        "longitude": -114.12087275526689,
        "ID": "38"
    },
    {
        "name": "Estadio Olímpico Lluís Companys",
        "place": "Barcelona, Spain",
        "time": "Summer 1992",
        "latitude": 41.364997696440625,
        "longitude": 2.1556864913073617,
        "ID": "39"
    },
    {
        "name": "Theatre of Ceremonies",
        "place": "Albertville, France",
        "time": "Winter 1992",
        "latitude": 45.6578,
        "longitude": 6.3694,
        "ID": "40"
    },
    {
        "name": "Lysgårdsbakkene Ski Jumping Arena",
        "place": "Lillehammer, Norway",
        "time": "Winter 1994",
        "latitude": 61.12572418444454,
        "longitude": 10.489031133338129,
        "ID": "41"
    },
    {
        "name": "Centennial Olympic Stadium",
        "place": "Atlanta, United States",
        "time": "Summer 1996",
        "latitude": 33.731,
        "longitude": -84.3895,
        "ID": "42"
    },
    {
        "name": "Nagano Olympic Stadium",
        "place": "Nagano, Japan",
        "time": "Winter 1998",
        "latitude": 36.58005762848337,
        "longitude": 138.16616034276743,
        "ID": "43"
    },
    {
        "name": "Stadium Australia",
        "place": "Sydney, Australia",
        "time": "Summer 2000",
        "latitude": -33.84683885207909,
        "longitude": 151.06354696596526,
        "ID": "44"
    },
    {
        "name": "Rice-Eccles Olympic Stadium",
        "place": "Salt Lake City, United States",
        "time": "Winter 2002",
        "latitude": 40.7599125110979,
        "longitude": -111.8485973840913,
        "ID": "45"
    },
    {
        "name": "Athens - Olympic Stadium",
        "place": "Athina, Greece",
        "time": "Summer 2004",
        "latitude": 38.03646837190076,
        "longitude": 23.78744732686773,
        "ID": "46"
    },
    {
        "name": "Stadio Olimpico di Torino",
        "place": "Torino, Italy",
        "time": "Winter 2006",
        "latitude": 45.04193699237748,
        "longitude": 7.650411614190734,
        "ID": "47"
    },
    {
        "name": "Beijing National Stadium",
        "place": "Beijing, China",
        "time": "Summer 2008",
        "latitude": 39.99314034987791,
        "longitude": 116.3970100889038,
        "ID": "48"
    },
    {
        "name": "BC Place Stadium",
        "place": "Vancouver, Canada",
        "time": "Winter 2010",
        "latitude": 49.27686897165281,
        "longitude": -123.11128553406184,
        "ID": "49"
    },
    {
        "name": "London - Olympic Stadium",
        "place": "London, Great Britain",
        "time": "Summer 2012",
        "latitude": 51.53882292361166,
        "longitude": -0.016190641399457285,
        "ID": "50"
    },
    {
        "name": "Fisht Olympic Stadium",
        "place": "Torino, Italy",
        "time": "Winter 2014",
        "latitude": 45.04193699237748,
        "longitude": 7.650411614190734,
        "ID": "51"
    },
    {
        "name": "Maracanã Stadium",
        "place": "Rio de Janeiro, Brazil",
        "time": "Summer 2016",
        "latitude": -22.911940884709008,
        "longitude": -43.229914403587365,
        "ID": "52"
    }
    
];

// Create a personalized marker
var redIcon = L.icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

// Add a marker for each Olympic stadium
olympicStadiums.forEach(function(stadium) {
  var marker = L.marker([stadium.latitude, stadium.longitude],{icon: redIcon}).addTo(map);


  
   marker.bindPopup(stadium.name + "<br>" + stadium.place + "<br>" + "Games held: " +
  "<a target=_blank class='text-dark text-decoration-none' href='./gameDetails.html?id=" + stadium.ID + "'>" + stadium.time + "</a>");

    const searchParams = new URLSearchParams(window.location.search);
    const id = searchParams.get('id');

  marker.on('click', function() {
    map.flyTo(marker.getLatLng(), 6, {
        duration: 1
    });
  });
});

// Define specific borders 
map.setMaxBounds([
    [-85, -180],
    [85, 180]
  ]);

// add a scale control to the map
L.control.scale({
    position: 'bottomleft'
}).addTo(map);
