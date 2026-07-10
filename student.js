function checkGrade(){

let marks = Number(document.getElementById("marks").value);

let grade = document.getElementById("grade");

let percentage = document.getElementById("percentage");

let message = document.getElementById("message");

if(marks==="" || isNaN(marks)){

alert("Please enter marks.");

return;

}

if(marks<0 || marks>100){

alert("Marks should be between 0 and 100");

return;

}

percentage.innerHTML="Percentage : "+marks+"%";

if(marks>=90){

grade.innerHTML="Grade : A+";

message.innerHTML="🌟 Outstanding";

message.style.color="green";

}

else if(marks>=80){

grade.innerHTML="Grade : A";

message.innerHTML="🎉 Excellent";

message.style.color="green";

}

else if(marks>=70){

grade.innerHTML="Grade : B";

message.innerHTML="👍 Very Good";

message.style.color="blue";

}

else if(marks>=60){

grade.innerHTML="Grade : C";

message.innerHTML="🙂 Good";

message.style.color="orange";

}

else if(marks>=50){

grade.innerHTML="Grade : D";

message.innerHTML="⚠ Pass";

message.style.color="#d97706";

}

else{

grade.innerHTML="Grade : F";

message.innerHTML="❌ Fail";

message.style.color="red";

}

}