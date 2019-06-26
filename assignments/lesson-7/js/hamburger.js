function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

function currentDate() {
    var today = new Date();
    
    document.getElementById("date").innerHTML = x;
}