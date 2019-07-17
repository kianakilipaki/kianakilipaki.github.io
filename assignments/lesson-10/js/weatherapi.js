// create weather request variable
let weatherRequest = new XMLHttpRequest();
let apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=6fee2cd00a7486172b7361fc5471afb6';
weatherRequest.open('Get', apiURLstring, true);
weatherRequest.send();

weatherRequest.onload = function() {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);

    document.getElementById('cc-temp').innerHTML = weatherData.main.temp;
    
    let icon = 'http://openweathermap.org/img/wn/' + weatherData.weather[0].icon + '@2x.png';
    let desc = weatherData.weather.description;
    document.getElementById('cc-img').setAttribute('src', icon);
    document.getElementById('cc-img').setAttribute('alt', desc);

}