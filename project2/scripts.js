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

function getRandomInt(max) {
    return Math.round(Math.random() * max);
}

function Start(){
    let input=parseInt(document.getElementById("input").value);
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
                <div class="card" onclick="Select(${rng})">
                    <img src="kepek/${imgsrc[rng]}">
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

function Select(index){
    if(firstselectedindex==-1){
        firstselectedindex=index;
    }
    else{
        if(index==firstselectedindex){
            
        }
        firstselectedindex=-1;
    }
}