// store JSON data in a variable
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
                
// create request object, open, and send
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

// pass the new object appendData
request.onload = function() {
    var data = request.response;
    appendData(data);
}

// fill myData with json data
function appendData(data) {
    var mainContainer = document.getElementById("myData");
    
    for (var i = 0; i < data.towns.length; i++) {

        if (data.towns[i].name === "Preston" || data.towns[i].name === "Fish Haven" || data.towns[i].name === "Soda Springs") {
        var div = document.createElement("div");
        var name = document.createElement("h2");
        
        var img = document.createElement("img");
        var motto = document.createElement("h4");
        var year = document.createElement("p");
        var pop = document.createElement("p");
        var rain = document.createElement("p");
        var events = document.createElement("p");

        name.textContent = data.towns[i].name;
        img.src = "images/"+ data.towns[i].photo;
        motto.textContent = data.towns[i].motto;
        year.textContent = "Year Founded: " + data.towns[i].yearFounded;
        pop.textContent = "Current Population: " + data.towns[i].currentPopulation;
        rain.textContent = "Average Rainfall: " + data.towns[i].averageRainfall;
        events.textContent = "Events: " + data.towns[i].events;

        div.appendChild(name);
        div.appendChild(img);
        div.appendChild(motto);
        div.appendChild(year);
        div.appendChild(pop);
        div.appendChild(rain);
        div.appendChild(events);
        
        mainContainer.appendChild(div);
        console.log(data.towns[i].name);
        }
    }
}