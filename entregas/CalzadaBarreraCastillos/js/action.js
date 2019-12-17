function mouseDown() {
  document.getElementById("mano1").style.WebkitAnimationPlayState = "paused"; // Code for Chrome, Safari, and Opera
  document.getElementById("mano1").style.AnimationPlayState = "paused";
}

function mouseUp() {
  document.getElementById("mano1").style.WebkitAnimationPlayState = "running"; // Code for Chrome, Safari, and Opera
  document.getElementById("mano1").style.AnimationPlayState = "running";
}

document.getElementById("mal").onmouseover = function() {mouseOver()};
document.getElementById("mal").onmouseout = function() {mouseOut()};

document.getElementById("mal2").onmouseover = function() {mouseOver()};
document.getElementById("mal2").onmouseout = function() {mouseOut()};

function mouseOver() {
    document.getElementById("mafalda").src = "img/mafaldanose.png";
}

function mouseOut() {
    document.getElementById("mafalda").src = "img/mafalda_quieta.png";
}

document.getElementById("ok").onmouseover = function() {mouseOverOk()};
document.getElementById("ok").onmouseout = function() {mouseOutOk()};

function mouseOverOk() {
    document.getElementById("mafalda").src = "img/mafaldaok.png";
}

function mouseOutOk() {
    document.getElementById("mafalda").src = "img/mafalda_quieta.png";
}

function redireccion() {
window.location.href = "final.html"; 
}
function redireccionReanima() {
window.location.href = "reanimacionok.html"; 
}

