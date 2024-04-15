function openNav() {
    document.getElementById("sideNav").style.width = "250px";
    document.getElementsByClassName("container").style.marginLeft = "250px";
    document.body.style.backgroundColor = "#fff";
}

function closeNav() {
    document.getElementById("sideNav").style.width = "0";
    document.getElementsByClassName("container").style.marginLeft = "0";
    document.body.style.backgroundCOlor = "#fff";
}