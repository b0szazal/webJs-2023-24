let header=document.getElementById("header");
let hetfo=document.getElementById("hetfo");
let kedd=document.getElementById("kedd");
let szerda=document.getElementById("szerda");
let csutortok=document.getElementById("csutortok");
let pentek=document.getElementById("pentek");
let moonimg=document.getElementById("lighttodark");
let sunimg=document.getElementById("darktolight");

function DarkMode(){
    header.classList.remove("light");
    header.classList.add("dark");
    hetfo.classList.remove("light");
    hetfo.classList.add("dark");
    kedd.classList.remove("light");
    kedd.classList.add("dark");
    szerda.classList.remove("light");
    szerda.classList.add("dark");
    csutortok.classList.remove("light");
    csutortok.classList.add("dark");
    pentek.classList.remove("light");
    pentek.classList.add("dark");
    moonimg.classList.add("gone");
    sunimg.classList.remove("gone");
}

function LightMode(){
    header.classList.remove("dark");
    header.classList.add("light");
    hetfo.classList.remove("dark");
    hetfo.classList.add("light");
    kedd.classList.remove("dark");
    kedd.classList.add("light");
    szerda.classList.remove("dark");
    szerda.classList.add("light");
    csutortok.classList.remove("dark");
    csutortok.classList.add("light");
    pentek.classList.remove("dark");
    pentek.classList.add("light");
    moonimg.classList.remove("gone");
    sunimg.classList.add("gone");
}