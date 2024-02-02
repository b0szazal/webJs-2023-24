function insertDash(num) {
  num=num.toString();
  let dashed=""
  for(let i=0; i<num.length; i++){
      dashed+=num[i];
      if(num[i]%2==1 && num[i+1]%2==1){
        dashed+='-';
      }
    }
  return dashed;
}