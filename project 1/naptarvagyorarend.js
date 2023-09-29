
let moonimg=document.getElementById("lighttodark");
let sunimg=document.getElementById("darktolight")

function DarkMode(){
    let lightdarkmodes=document.getElementsByClassName("dark");
    for(let i=0; i<lightdarkmodes.length; i++){
        lightdarkmodes[i].classList.remove("dark");
        lightdarkmodes[i].classList.add("light");
    }
    moonimg.classList.add("gone");
    sunimg.classList.remove("gone");
}

function LightMode(){
    let lightdarkmodes=document.getElementsByClassName("light");
    for(let i=0; i<lightdarkmodes.length; i++){
        lightdarkmodes[i].classList.remove("light");
        lightdarkmodes[i].classList.add("dark");
    }
    moonimg.classList.remove("gone");
    sunimg.classList.add("gone");
}

