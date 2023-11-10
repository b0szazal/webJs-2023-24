let input=document.getElementById("text");
let elements=document.getElementById("elements");
let tomb=[];

function Kiiratas(){
    for (let i in tomb) {
        elements.innerHTML+='<div id="szoveg">'+tomb[i]+'</div>';
    }
}

function getInputValue(){
    tomb=[];
    elements.innerHTML="";
    let text=input.value;
    let regspace=/\s/g
    tomb=text.split(' ');
    for (let i in tomb) {
        if(regspace.test(tomb[i])){
            tomb.splice(i, 1);
        }
    }
    input.value="";
    Kiiratas();
}