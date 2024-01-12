const Reversing=() => {
    let text=document.getElementById("input").value;
    document.getElementById("setup").classList.add("gone");
    let ki="";
    for (let i=text.length-1;i>=0; i-- ) {
        ki+=text[i];
    }
    document.getElementById("reversed").classList.remove("gone");
    document.getElementById("reversed").innerHTML=ki;
}