let container=document.getElementById("cont");
let colors=["yellow", "yellow", "yellow", "yellow"];

/*function getRandomInt(max) {
    return Math.round(Math.random() * max);
}*/

function ChangeColor(index){
   /* let color=getRandomInt(2);
    if(color==0){
        colors[index]="Red";
    }
    else if(color==1){
        colors[index]="Orange";
    }
    else{
        colors[index]="Blue";
    }*/
    if(colors[index]=="Red"){
        colors[index]="Blue";
    }
    else{
        colors[index]="Red";
    }
    Rendering();
}

function Rendering(){
    let ki="";
    for (let index = 0; index < 4; index++) {
        ki+='<div class="item" onclick="ChangeColor('+index+')" style="background-color:'+colors[index]+';"></div>'
    }
    container.innerHTML=ki;
}