let cont=document.getElementById("cont");

function getRandomInt(max) {
    return Math.round(Math.random() * max);
}

function Start(){
    let input=parseInt(document.getElementById("input").value);
    if(input>=6 && input<=12){

    }
    else{
        alert("na azé számot adj má meg");
    }
    console.log(input, typeof(input));
}