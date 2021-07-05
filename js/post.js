//code for comments button
function addComments(id) {
    var addEventName = id.value + "<br>";
    var commS = document.getElementById('userComments');
    commS.value=commS.defaultValue;
    var commS = document.getElementById('addEventNames');
    commS.innerHTML +=  '<div class="Out-comm"><p class="Out-P">' + addEventName + "</p></div>";
    
}

//code for like button
var numberOfClicks=0;
function postLiked(){
    document.getElementById("likeBlog").innerHTML = 
    "<i class='fas fa-thumbs-up'></i> Liked!";
    numberOfClicks += 1;
    if(numberOfClicks!=0) {
        if (numberOfClicks==1){
            document.getElementById('likeCount').innerHTML = numberOfClicks + "person likes this!";

        }
        else {
            document.getElementById('likeCount').innerHTML = numberOfClicks + " people have liked this!";
        }
    }
}

function Edit() {
    
    document.getElementById("EditBlog").innerHTML = 
    "Save <i class='fas fa-save'></i>" ;
     var editElem = document.getElementById("edit");
    editElem.contentEditable="true";
    var userVersion = editElem.innerHTML;
    localStorage.userEdits = userVersion;

} 



