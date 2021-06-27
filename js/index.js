//functionality for CreatePosts button
var Modal2 = document.getElementById("ModalC");
var btn2 = document.getElementById("secondbutton");
var span2 = document.getElementsByClassName("close")[2];

btn2.onclick = function () {
    Modal2.style.display = "block";
}

span2.onclick =function() {
    Modal2.style.display = "none";
}

