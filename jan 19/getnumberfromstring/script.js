function GetNumberFromString(text){
    let numbers="";
    for(let i=0; i<text.length; i++){
        if(text[i].match(/([0-9])/)){
            numbers+=text[i];
        }
    }
    parseInt(numbers)
    console.log(numbers, typeof(numbers));
}