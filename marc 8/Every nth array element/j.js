function every(arr, interval=1, start=0) {
    let returnArr=[];
    for(let i=start; i<arr.length; i+=interval){
        returnArr.push(arr[i]);
    }
    return returnArr;
}