const navBtn = document.getElementById("nav-mobile-toggle");
const navLinks = document.getElementById("mobile-nav-list");

navBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

function HongKong(){
    window.open(`en/HongKong.html` , `_self`);
}

function TaiPei(){
    window.open(`en/TaiPei.html` , `_self`);
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

function en_TaiPei(){
    window.open(`TaiPei.html` , `_self`);
}

function en_Seoul(){
    window.open(`Seoul.html` , `_self`);
}

function en_Singapore(){
    window.open(`Singapore.html` , `_self`);
}

