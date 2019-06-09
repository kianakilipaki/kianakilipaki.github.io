//get variables from document
let t = parseInt(document.getElementById("temp").innerHTML);
let s = parseInt(document.getElementById("speed").innerHTML);

//calculate wind chill
let x = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);

//return windchill
document.getElementById("wind-chill").innerHTML = x;
