//functionality for Sign Up Button
var Modal = document.getElementById("ModalA");
var btn = document.getElementById("SIGN UP");
var span = document.getElementsByClassName("close")[1];  //code for close button
btn.onclick = function () {
    Modal.style.display = "block";
}
span.onclick = function () {
    Modal.style.display ="none";
}
window.onclick =function (event) {
    if (event.target == Modal) {
        Modal.style.display = "none";
    }
}

//functionality for SignIn button
var Modal1 = document.getElementById("ModalB");
var btn1 = document.getElementById("SIGN IN");
var span1 = document.getElementsByClassName("close")[0];  //code for close button
btn1.onclick = function () {
    Modal1.style.display = "block";
}
span1.onclick  = function () {
    Modal1.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == Modal1) {
        Modal1.style.display = "none";
    }
}
var linkModal = document.getElementsByClassName("SignUp")[0].onclick = function () {      //code to show up signUp form 
  Modal.style.display = "block";
  Modal1.style.display = "none";
}