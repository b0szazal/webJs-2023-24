// All or Nothing 
function possiblyPerfect(key,answers) {
    let faults=0;
    let good=0;
    let blanks=0;
    for(let i=0; i<key.length; i++){
        if (key[i]==answers[i]){
            good++;
        }
        else if(key[i]=='_'){
            blanks++;
        }
        else{
            faults++;
        }
    }
    if(good+blanks==key.length || faults+blanks==key.length){
        return true;
    }
    return false;
}



console.log(possiblyPerfect([..."A_C_B"],[..."ADCEB"]) + " >> true ");
console.log( possiblyPerfect([..."B_B"],[..."BDC"]) + " >> false ");
console.log( possiblyPerfect([..."T_FFF"],[..."FFTTT"]) + " >> true ");
console.log( possiblyPerfect([..."BA__"],[..."BACC"]) + " >> true ");
console.log( possiblyPerfect([..."ABA_"],[..."BACC"]) + " >> true ");
console.log( possiblyPerfect([..."ABC_"],[..."BACC"]) + " >> false ");
console.log( possiblyPerfect([..."B_"],[..."CA"]) + " >> true ");
console.log( possiblyPerfect([..."BA"],[..."CA"]) + " >> false ");
console.log( possiblyPerfect([..."B"],[..."B"]) + " >> true ");
console.log( possiblyPerfect([..."_T__"],[..."TFFF"]) + " >> true ");
console.log( possiblyPerfect([..."_T__"],[..."TTFT"]) + " >> true ");
console.log( possiblyPerfect([..."_TTT"],[..."TTFT"]) + " >> false ");
console.log( possiblyPerfect([..."_TTT"],[..."TTTT"]) + " >> true ");
console.log( possiblyPerfect([..."_TTT"],[..."FFFF"]) + " >> true ");
console.log( possiblyPerfect([..."____"],[..."FFFF"]) + " >> true ");



// Mean vs. Median
function meanVsMedian(numbers) {
    numbers=numbers.sort(function(a, b){return a-b});
    let mean=getMean(numbers);
    let median=getMedian(numbers);
    if(mean==median){
        return "same";
    }
    if(mean>median){
        return "mean";
    }
    return "median";
}

function getMean(nums){
    let sum=0;
    for(let i=0; i<nums.length; i++){
        sum+=nums[i];
    }
    return sum/nums.length;
}

function getMedian(nums){
    let median=nums[Math.floor(nums.length/2)];
    if(nums.length%2==0){
        median=(median+nums[Math.round(nums.length/2)])/2;
    }
    return median
}

console.log(meanVsMedian([1, 1, 1]), ' >> same');
console.log(meanVsMedian([1, 2, 37]), ' >> mean');
console.log(meanVsMedian([7, 14, -70]), ' >> median');



// Swap the head and the tail
function swapHeadAndTail(arr) {
    head=arr.slice(0,Math.floor(arr.length/2));
    tail=arr.slice(Math.round(arr.length/2), );
    result=tail;
    if(arr.length%2==1){
      result.push(arr[Math.floor(arr.length/2)]);
    }
    result.push(...head);
    return result;
}

console.log(swapHeadAndTail([ 1, 2, 3, 4, 5 ]), [ 4, 5, 3, 1, 2 ]);
console.log(swapHeadAndTail([ -1, 2 ]), [ 2, -1 ]);
console.log(swapHeadAndTail([ 1, 2, -3, 4, 5, 6, -7, 8 ]), [ 5, 6, -7, 8, 1, 2, -3, 4 ]);