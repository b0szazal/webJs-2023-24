function min(array, indexOrValue){
    let lowestvalue=Infinity;
    let lowestindex;
    for(let i=0; i<array.length; i++){
        if(array[i]<lowestvalue){
            lowestvalue=array[i];
            lowestindex=i;
        }
    }
    if(indexOrValue=="value"){
        console.log(lowestvalue);
    }
    else if(indexOrValue=="index"){
        console.log(lowestindex);
    }
}

console.log("min([számokkal teli tömb], 'value' vagy 'index')");
min([1,2,3,4,5], 'value');
min([1,2,3,4,5], 'index');