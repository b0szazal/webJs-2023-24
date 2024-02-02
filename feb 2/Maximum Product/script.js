  function adjacentElementsProduct(array) {
    let highest=-Infinity;
    for(let i=0; i<array.length-1; i++){
      if((array[i]*array[i+1])>highest){
        highest=array[i]*array[i+1];
      }
    }
    return highest
  }