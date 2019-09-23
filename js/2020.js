console.log("2020.js loaded");
var aboutText = document.getElementById("text-about");
var aboutCircle = document.getElementById("circle-about");
var closeAbout = document.getElementById("close-about")
var shown = document.getElementById("shown")
aboutCircle.onclick = ()=> {
    aboutText.style.visibility = "visible";
    aboutText.style.opacity = 1;
    shown.className="blur";
};
closeAbout.onclick = ()=> {
    aboutText.style.visibility = "hidden";
    aboutText.style.opacity = 0;

}