let header=document.getElementById("header");
let lightdarkmodes=document.getElementsByClassName("light");
let moonimg=document.getElementById("lighttodark");
let sunimg=document.getElementById("darktolight")

function DarkMode(){
    header.classList.remove("light");
    header.classList.add("dark");
    for(let i=0; i<lightdarkmodes.length; i++){
        lightdarkmodes[i].classList.add("light");
        lightdarkmodes[i].classList.remove("dark");
    }
    moonimg.classList.add("gone");
    sunimg.classList.remove("gone");
}

function LightMode(){
    header.classList.remove("dark");
    header.classList.add("light");
    for(let i=0; i<lightdarkmodes.length; i++){
        lightdarkmodes[i].classList.add("dark");
        lightdarkmodes[i].classList.remove("light");
    }
    moonimg.classList.remove("gone");
    sunimg.classList.add("gone");
}

