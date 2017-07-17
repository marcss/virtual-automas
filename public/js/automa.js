var bstoryBtn = document.getElementById("bstoryBtn");
var bstory = document.getElementById("backstory");

bstoryBtn.addEventListener("click", function(){
    bstory.classList.toggle("hidden");
    if(bstoryBtn.innerHTML === "Got It."){
        bstoryBtn.innerHTML = "Tell me why I'm here.";
    } else {
        bstoryBtn.innerHTML = "Got It.";
    }
    //bstoryBtn.innerHTML = "Got It. Show Me.";
});
