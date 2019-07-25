function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

function currentDate() {
    var d = new Date();
    document.getElementById("date").innerHTML = d.toDateString();
}

function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}