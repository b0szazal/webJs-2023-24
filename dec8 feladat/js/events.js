const button = document.querySelector(".btn");
let input=document.getElementById("input");
button.addEventListener("click", ()=>{
    document.body.innerHTML=input.value;
})