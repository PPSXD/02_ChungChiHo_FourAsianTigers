const navBtn = document.getElementById("nav-mobile-toggle");
const navLinks = document.getElementById("mobile-nav-list");

navBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// add date
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

function HongKong(){
    window.open(`en/HongKong.html` , `_self`);
}

function TaiBei(){
    window.open(`en/TaiBei.html` , `_self`);
}

function Seoul(){
    window.open(`en/Seoul.html` , `_self`);
}0

function Singapore(){
    window.open(`en/Singapore.html` , `_self`);
}


function en_HongKong(){
    window.open(`HongKong.html` , `_self`);
}

function en_TaiBei(){
    window.open(`TaiBei.html` , `_self`);
}

function en_Seoul(){
    window.open(`Seoul.html` , `_self`);
}

function en_Singapore(){
    window.open(`Singapore.html` , `_self`);
}

