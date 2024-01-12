function SumOfOddCubedNumbers(array){
    let output=0;
    let kys=false;
    try{
        for(let i=0; i<array.length; i++){
            try{
                if(array[i]%2==1){
                    output+=Math.pow(array[i], 3);
                }
            }
            catch{
                console.log("undefined");
                kys=true;
            }
        }
    }
    catch{
        kys=true;
    }
    if(kys){
        console.log(undefined);
    }
    else{
        console.log(output);
    }
}

console.log("SumOfOddCubedNumbers([remélhetőleg számokkal teli tömb])");
SumOfOddCubedNumbers([1,2,3,4,5]);
