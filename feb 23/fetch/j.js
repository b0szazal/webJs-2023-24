function FetchUserData(){
    let id=parseInt(document.getElementById("InputID").value);
    fetch('https://jsonplaceholder.org/users/?id='+id)
    .then(response => {
      return response.json();
    })
    .then(user => {
      console.log(user);
      ShowUserData(user);
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}

function ShowUserData(user){
    let ki="<tr>";
    ki+="<td>"+user.id+"</td>";
    ki+="<td>"+user.firstname+" "+user.lastname+"</td>";
    ki+="<td>"+user.email+"</td>";
    ki+="<td>"+user.birthDate+"</td>";
    ki+="<td>"+user.login.password+"</td>";
    ki+="<td>"+user.address.city+"</td>";
    ki+="<td>"+user.phone+"</td>";
    ki+="<td>"+user.website+"</td>";
    ki+="<td>"+user.company.name+"</td>";
    ki+="</tr>";
    document.getElementById("table").innerHTML+=ki;
    document.getElementById("table").style.opacity=1;
    document.getElementById("div").style.display="none";
}

document.getElementById("table").style.opacity=0;
