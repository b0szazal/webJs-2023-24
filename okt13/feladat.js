let div=document.getElementById("elemek");
let tomb=[1, "alma", 'b'];
/*1*/
function TombElsoEleme(){
    div.innerHTML=tomb[0];
}

function TombMasodikEleme(){
    div.innerHTML=tomb[1];
}

function TombHarmadikEleme(){
    div.innerHTML=tomb[2];
}
/*2*/
function TombOsszesEleme(){
    div.innerHTML="";
    for (let i in tomb) {
        div.innerHTML+=tomb[i]+"  ";
    }
}
/*3*/
function ElemHozzaadasa(){
    let input=document.getElementById("hozzaadottelem");
    tomb.push(input.value);
}
/*4*/
function TombHossza(){
    div.innerHTML="A tömb "+tomb.length+" elemet tartalmaz."
}
/*5*/
function ElemEltavolitasa(){
    let input=document.getElementById("elemindexe");
    try{
        tomb.splice(input.value, 1);
    }
    catch(IndexOutOfBounds){
        
    }
}