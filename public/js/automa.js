var bstoryBtn = document.getElementById("bstoryBtn");
var bstory = document.getElementById("backstory");

bstoryBtn.addEventListener("click", function(){
    bstory.classList.toggle("hidden");
    bstoryBtn.innerHTML === "Got It." ? bstoryBtn.innerHTML = "What's the story?": bstoryBtn.innerHTML = "Got It.";
});