function swapHeadAndTail(arr) {
    head=arr.slice(0,arr.length/2-0.5);
    if(arr.length%2==1){
      tail=arr.slice(arr.length/2+0.5);
    }
    else{
      tail=arr.slice(arr.length/2);
    }
    result=tail;
    if(arr.length%2==0){
      result.push(arr[arr.length/2-1]);
    }
    result.push(head);
    console.log(result);
  }

swapHeadAndTail([ 1, 2, 3, 4, 5 ] ), [ 4, 5, 3, 1, 2 ]
swapHeadAndTail([ -1, 2 ]), [ 2, -1 ]
swapHeadAndTail([ 1, 2, -3, 4, 5, 6, -7, 8 ]), [ 5, 6, -7, 8, 1, 2, -3, 4 ]