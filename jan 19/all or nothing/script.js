function AllOrNothing(answerKey, studentSolution){
    let trues=0;
    let blank=0;
    if(answerKey.length==studentSolution.length && answerKey.length>0){
        for(let i=0; i<answerKey.length; i++){
            if(answerKey[i]==studentSolution[i] || answerKey[i]=='_'){
                trues++;
                if(answerKey[i]=='_'){
                    blank++
                }
            }
        }
    }
    if(trues==answerKey.length || trues==blank){
        console.log(true);
    }
    else{
        console.log(false);
    }
}

AllOrNothing(["B", "A", "_", "_"], ["B", "A", "C", "C"])
AllOrNothing(["A", "B", "A", "_"], ["B", "A", "C", "C"])
AllOrNothing(["A", "B", "C", "_"], ["B", "A", "C", "C"]) 
AllOrNothing(["B", "_"], ["C", "A"])
AllOrNothing(["B", "A"], ["C", "A"])
AllOrNothing(["B"], ["B"])
AllOrNothing(["_"], ["B"])