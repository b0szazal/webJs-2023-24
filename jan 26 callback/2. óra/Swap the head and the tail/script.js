function swapHeadAndTail(arr) {
  let result=[];
    if(arr.length%2==0){
      result.push(...arr.slice(0,arr.length/2));
      result.push(...arr.slice(arr.length/2));
    }
    else{
      result.push(...arr.slice(0,arr.length/2-0.5));
      result.push(arr[arr.length/2-0.5]);
      result.push(...arr.slice(arr.length/2+0.5));
    }
    console.log(result);
}


swapHeadAndTail([ 1, 2, 3, 4, 5 ] ), [ 4, 5, 3, 1, 2 ]
swapHeadAndTail([ -1, 2 ]), [ 2, -1 ]
swapHeadAndTail([ 1, 2, -3, 4, 5, 6, -7, 8 ]), [ 5, 6, -7, 8, 1, 2, -3, 4 ]