var users=[];

function getValues(){
    var person={
        email :"",
        password:"",
    };

    for (a in person){
        person[a] = document.getElementById(a).value;
    } 
    users.push(person);
    localStorage.setItem("users",JSON.stringify(users));
    // console.log(users);
    displayData(users)
}

function displayData(users){
    users.map(function(obj) {
        var myTr=document.createElement("tr");
        for (a in obj) {
            var myTd= document.createElement("mytd");
            myTd.innerHTML=obj[a];
            myTr.appendChild(myTd);
        }
        document.getElementById("myTbody").appendChild(myTr);
    });
}