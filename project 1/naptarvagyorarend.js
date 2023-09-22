let header=document.getElementById("header");
let moonimg=document.getElementById("lighttodark");
let sunimg=document.getElementById("darktolight")

function DarkMode(){
    header.classList.remove("light");
    header.classList.add("dark");
    moonimg.classList.add("gone");
    sunimg.classList.remove("gone");
}

function LightMode(){
    
    header.classList.remove("dark");
    header.classList.add("light");
    moonimg.classList.remove("gone");
    sunimg.classList.add("gone");
}

