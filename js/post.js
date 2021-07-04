function addComments(id) {
    var addEventName = id.value + "<br>";
    var commS = document.getElementById('userComments');
    var commS = document.getElementById('addEventNames');
    commS.innerHTML +=  '<div class="Out-comm"><p class="Out-P">' + addEventName + "</p></div>";
    commS.value=commS.defaultValue;
}
var numberOfClicks=0;
function postLiked(){
    document.getElementById("likeBlog").innerHTML = 
    "<i class='fas fa-thumbs-up'></i> Liked!";
    numberOfClicks += 1;
    if(numberOfClicks!=0) {
        if (numberOfClicks==1){
            document.getElementById('LikeCount').innerHTML = numberOfClicks + "person likes this!";

        }
        else {
            document.getElementById('likeCount').innerHTML = numberOfClicks + " people have liked this!";
        }
    }
}


/*for editing paragraph 
function Edit() {
    var Paraedit = document.getElementById('edit').innerHTML =
    Paraedit.contentEditable="false";
} */