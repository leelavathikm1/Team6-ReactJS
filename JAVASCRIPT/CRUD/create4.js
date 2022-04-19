var users=[];

function getValues(){
    var person={
        email:"",
        password:"",
        Edit:"",
        Delete:""
    };
    for (a in person){
        person[a]=document.getElementById(a).value;
    }
    users.push(person)
    localStorage.setItem("users",JSON.stringify(users));
    // console.log(person);
    displayData(users);
}

function displayData(users){
    users.map(function(obj){
    var myTr=document.createElement("tr");
    for (a in obj ){
        var myTd=document.createElement("td");
        myTd.innerHTML=obj[a];
        myTr.appendChild(myTd);
       
    }
     document.getElementById("myTbody").appendChild(myTr)
    });
}