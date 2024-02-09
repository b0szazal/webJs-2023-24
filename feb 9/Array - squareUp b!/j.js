function squareUp(n)
{
    let array=[];
    for(let i=1; i<=n;i++){
      for(let j=n; j>=1; j--){
        if(j>i){
          array.push(0);
        }
        else{
          array.push(j);
        }
      }
    }
    return array; 
}