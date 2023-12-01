let cont=document.getElementById("cont");
let setup=document.getElementById("setup");
let imgsrc=["clo-j.png", "clo-k.png", "clo-q.png", "hea-j.png", "hea-k.png", "hea-q.png", "rom-j.png", "rom-k.png", "rom-q.png", "spa-j.png", "spa-k.png", "spa-q.png"]
let generatedpairs={
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0
};
let firstselectedindex=-1;
let input;

function getRandomInt(max) {
    return Math.round(Math.random() * max);
}

function Start(){
    input=parseInt(document.getElementById("input").value);
    if(input<6){
        input=6;
    }
    else if(input>12){
        input=12;
    }
    setup.style.display="none";
    for(let i=6; i<input; i++){
        generatedpairs[i]=0;
    }
    let tempLit;
    let ki="";
    let rng=0;
    let generated=false;
    for(let i=0; i<input*2 ;i++){
        do{
            rng=getRandomInt(input);
            if(generatedpairs[rng]<2){
                tempLit=`
                <div class="card" onclick="Select(${rng}, ${i})" id="${i}">
                    <img src="kepek/forditott.png" id="${i}.1">
                    <img src="kepek/${imgsrc[rng]}" class="hidden" id="${i}.2">
                </div>
                `;
                ki+=tempLit;
                generatedpairs[rng]++;
                generated=true; 
                
            }
        }while(generated==false);
        generated=false;
    }
    cont.innerHTML=ki;
}

function Select(index, position){
    document.getElementById(position+".1").classList.add("hidden");
    document.getElementById(position+".2").classList.remove("hidden");
    document.getElementById(position+".2").classList.add("shown");
    if(firstselectedindex==-1){
        firstselectedindex=index;
        console.log(firstselectedindex, index);
    }
    else{
        if(index==firstselectedindex){
            
        }
        else{
            document.getElementById(position+".1").classList.remove("hidden");
            document.getElementById(position+".1").classList.add("shown");
            document.getElementById(position+".2").classList.remove("shown");
            document.getElementById(position+".2").classList.add("hidden");
        }
        firstselectedindex=-1;
    }
}