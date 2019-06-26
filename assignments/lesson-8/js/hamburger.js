function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

function currentDate() {
    var x = 6/25/2019;
    document.getElementById("date").innerHTML = x;
}

function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}