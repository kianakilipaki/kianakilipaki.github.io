// create weather request variable
let weatherRequest = new XMLHttpRequest();
let apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=6fee2cd00a7486172b7361fc5471afb6';
weatherRequest.open('Get', apiURLstring, true);
weatherRequest.send();

// create forecast weather request variable
let forecastRequest = new XMLHttpRequest();
let apiURLstringF = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=6fee2cd00a7486172b7361fc5471afb6';
forecastRequest.open('Get', apiURLstringF, true);
forecastRequest.send();


weatherRequest.onload = function() {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
    
    // summary data
    document.getElementById('desc').innerHTML = weatherData.weather[0].description;
    document.getElementById('temp').innerHTML = weatherData.main.temp;
    document.getElementById('humidity').innerHTML = weatherData.main.humidity;
    document.getElementById('speed').innerHTML = weatherData.wind.speed;

    windChill(weatherData.main.temp, weatherData.wind.speed);
}

forecastRequest.onload = function () {
    let forecastData = JSON.parse(forecastRequest.responseText);
    console.log(forecastData);

    // 5 day forecast
    // day 1
    let i = 0;
    let icon = 'http://openweathermap.org/img/wn/' + forecastData.list[i].weather[0].icon + '@2x.png';
    document.getElementById('day0').innerHTML = getDay(i);
    document.getElementById('temp0').innerHTML = forecastData.list[i].main.temp + '&deg; F';
    document.getElementById('img0').setAttribute('src', icon);
    document.getElementById('img0').setAttribute('alt', forecastData.list[i].weather[0].description);

    // day 2
    i = 8;
    icon = 'http://openweathermap.org/img/wn/' + forecastData.list[i].weather[0].icon + '@2x.png';
    document.getElementById('day1').innerHTML = getDay(i);
    document.getElementById('temp1').innerHTML = forecastData.list[i].main.temp + '&deg; F';
    document.getElementById('img1').setAttribute('src', icon);
    document.getElementById('img1').setAttribute('alt', forecastData.list[i].weather[0].description);

    // day 3
    i = 16;
    icon = 'http://openweathermap.org/img/wn/' + forecastData.list[i].weather[0].icon + '@2x.png';
    document.getElementById('day2').innerHTML = getDay(i);
    document.getElementById('temp2').innerHTML = forecastData.list[i].main.temp + '&deg; F';
    document.getElementById('img2').setAttribute('src', icon);
    document.getElementById('img2').setAttribute('alt', forecastData.list[i].weather[0].description);

    // day 4
    i = 24;
    icon = 'http://openweathermap.org/img/wn/' + forecastData.list[i].weather[0].icon + '@2x.png';
    document.getElementById('day3').innerHTML = getDay(i);
    document.getElementById('temp3').innerHTML = forecastData.list[i].main.temp + '&deg; F';
    document.getElementById('img3').setAttribute('src', icon);
    document.getElementById('img3').setAttribute('alt', forecastData.list[i].weather[0].description);

    // day 5
    i = 32;
    icon = 'http://openweathermap.org/img/wn/' + forecastData.list[i].weather[0].icon + '@2x.png';
    document.getElementById('day4').innerHTML = getDay(i);
    document.getElementById('temp4').innerHTML = forecastData.list[i].main.temp + '&deg; F';
    document.getElementById('img4').setAttribute('src', icon);
    document.getElementById('img4').setAttribute('alt', forecastData.list[i].weather[0].description);
}

function getDay(i) {
    let forecastData = JSON.parse(forecastRequest.responseText);

    // find date for 5-day forecast
    let date = new Date(forecastData.list[i].dt_txt);
    let numday = date.getDay();
    let day = "";
    switch (numday) {
        case 1:
            day = "Mon";
            break;
        case 2:
            day = "Tues";
            break;
        case 3:
            day = "Wed";
            break;
        case 4:
            day = "Thu";
            break;
        case 5:
            day = "Fri";
            break;
        case 6:
            day = "Sat";
            break;
        default:
            day = "Sun";
    }
    return day;

    
}

function windChill(t, s) {
    //calculate wind chill
    let x = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);
    x = Math.round(x * 10) / 10;

    //return windchill
    document.getElementById("wind-chill").innerHTML = x;
}