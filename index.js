

var one = document.getElementById('SignUpform')

one.addEventListener('submit',saveForm)

function saveForm(event){
    event.preventDefault()

    var username = document.getElementById("Uname").value



    var email = document.getElementById("email").value



    var password = document.getElementById("word").value
  

    let data = {
        Duname:username,
        Demail:email,
        Dpassword:password
    }

    console.log(data)
    // const arr = JSON.parse(localStorage.getItem('user'))||[];
    // arr.push(data)
    localStorage.setItem('user',JSON.stringify(data))
        alert('SignUp Successfull')
}

var two = document.getElementById("SignInform")

two.addEventListener('submit',savenewform)

function savenewform (event){
    event.preventDefault()

    var  username = document.getElementById("fname").value

    var password = document.getElementById("password").value

 let savedData = JSON.parse(localStorage.getItem('user')) ||[]

   



    if(username !== savedData.Duname){
        alert("invalid username")
        return;
    }
    if(password !== savedData.Dpassword){
        alert("invalid  password")
        return;
    }
    alert ("login sucessfull")

    document.getElementById("newform").reset();
}

var SignInform = document.getElementById("SignInform")
var SignUpform =document.getElementById("SignUpform")
// var postbox = document.getElementById("postbox")

function opensignupmodel(){
    // postbox.style.display = "none";
    SignUpform.style.display = "block";
    SignInform.style.display =  "none";
}

function opensigninmodel(){
    // postbox.style.display = "none"
    SignInform.style.display = "block"
    SignUpform.style.display ="none"
 }

 function closesignup(){
    SignUpform.style.display= "none"
    SignUpform.style.display= "block"
    SignUpform.style.display= "none"
 }

 function closesignin(){
    SignInform.style.display= "none"
    SignInform.style.display= "block"
    SignInform.style.display= "none"
    // postbox.style.display = "block"
    // postbox.style.display = "none"
 }

//  function openpost(){
//     postbox.style.display = "none"
//     postbox.style.display = "block"
//     postbox.style.display = "none"
//  }
