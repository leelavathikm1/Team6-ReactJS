
var users=[];

function getdata(){
    var student ={
        fname:"",
        lname:"",
        fathername:"",
        mothername:"",
        email:"",
        password:"",
        age:"",
        phone:""

    };
    for (a in student){
        student[a]=document.getElementById(a).value;
    }
    users.push(student)
    localStorage.setItem("users",JSON.stringify(users));
    // console.log(student);
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
     document.getElementById("myTbody").style.color="red"
    });
}