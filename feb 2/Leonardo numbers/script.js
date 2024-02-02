L = (n , L0 , L1 , add) => {
  let arr=[];
  arr.push(L0);
  if(n==1){
    return arr;
  }
  arr.push(L1);
  if(n==2){
    return arr;
  }
  for(let i=2; i<n; i++){
    arr.push(arr[i-1]+arr[i-2]+add)
  }
  return arr
}