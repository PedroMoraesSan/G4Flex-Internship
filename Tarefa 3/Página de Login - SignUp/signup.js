// #1 SignUp Page > Set an Email and a Password
// #2 Login Page > Put the credentials and confirm the access. 
// Get the input fields and the SignUp button



button = document.getElementById("signUpButton")

var email = document.getElementById("email_holder").value;
var password = document.getElementById("password_holder").value; 

function check(){
  var email = document.getElementById("email_holder").value;
  var password = document.getElementById("password_holder").value; 

  if (email === "admin@gmail.com" &&  password === "123"){
    alert("Correct")
    location.href = '/Lista de Tarefas/tasklist.html'
} else {
  alert("Incorrect")
}

}


