var x = document.querySelector(".x");
var y = document.querySelector(".y");
var a = document.querySelector(".cX");
var b = document.querySelector(".cY");

function move(e){
    x.innerText = `ScreenX : ${e.screenX}`;
    y.innerText = `ScreenY : ${e.screenY}`;
    a.innerText = `ClientX : ${e.clientX}`;
	b.innerText = `ClientY : ${e.clientY}`;
}
    
document.addEventListener("mousemove" , move);

