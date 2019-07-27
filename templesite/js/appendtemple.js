/*// store JSON data in a variable
var requestURL = 'https://kianakilipaki.github.io/templesite/js/temple.json';

// create request object, open, and send
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

// pass the new object appendData
request.onload = function () {
    var data = request.response;
    appendData(data);
    console.log(data);
}*/

fetch("https://kianakilipaki.github.io/templesite/js/temple.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
        console.log(data);
    })

// fill myData with json data
function appendData(data) {
    var mainContainer = document.getElementById("templesData");

    for (var i = 0; i < data.temples.length; i++) {

        var div = document.createElement("div");
        var img = document.createElement("img");
        var name = document.createElement("h2");
        var address = document.createElement("p");
        var phone = document.createElement("p");
        var ded = document.createElement("p");

        img.src = data.temples[i].photo;
        name.textContent = data.temples[i].name;
        address.textContent = data.temples[i].address;
        phone.textContent = data.temples[i].phone;
        ded.textContent = "Dedicated: " + data.temples[i].Dedication;

        div.appendChild(img);
        div.appendChild(name);
        div.appendChild(address);
        div.appendChild(phone);
        div.appendChild(ded);

        mainContainer.appendChild(div);
        console.log(data);   
    }
}