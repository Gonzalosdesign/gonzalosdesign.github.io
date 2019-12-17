

// window.scrollY = function ( s ) {


window.addEventListener("scroll", (sFunction) => {
    const y = window.scrollY;

    document.getElementById("showOnScroll").style.opacity = "1";
    if ("900" <= y) {
        document.getElementById("showOnScroll2").style.opacity = "1";
    }

   

    if ("1650" > y) {
        document.getElementById("barra").style.opacity = "0";
        document.getElementById("chart").style.opacity = "0";

    } else if ("1650" <= y && y < "1800") {
        document.getElementById("barraMujer").style.width = "58%";
        document.getElementById("barraHombre").style.width = "42%";
        document.getElementById("barra").style.opacity = "1";
        document.getElementById("chart").style.opacity = "1";
        document.getElementById("pM").innerHTML = "Mujeres: 58%";
        document.getElementById("pH").innerHTML = "Hombres: 42%";

    } else if ("2200" <= y && y < "2600") {
        document.getElementById("barraMujer").style.width = "63%";
        document.getElementById("barraHombre").style.width = "37%";
        document.getElementById("barra").style.opacity = "1";
        document.getElementById("chart").style.opacity = "1";
        document.getElementById("pM").innerHTML = "Mujeres: 63%";
        document.getElementById("pH").innerHTML = "Hombres: 37%";

    } else if ("3100" <= y && y < "3500") {
        document.getElementById("barraMujer").style.width = "55%";
        document.getElementById("barraHombre").style.width = "45%";
        document.getElementById("barra").style.opacity = "1";
        document.getElementById("chart").style.opacity = "1";
        document.getElementById("pM").innerHTML = "Mujeres: 55%";
        document.getElementById("pH").innerHTML = "Hombres: 45%";

    } else if ("4000" <= y && y < "4400") {
        document.getElementById("barraMujer").style.width = "45%";
        document.getElementById("barraHombre").style.width = "55%";
        document.getElementById("barra").style.opacity = "1";
        document.getElementById("chart").style.opacity = "1";
        document.getElementById("pM").innerHTML = "Mujeres: 45%";
        document.getElementById("pH").innerHTML = "Hombres: 55%";

    } else if ("4800" <= y && y < "5300") {
        document.getElementById("barraMujer").style.width = "43%";
        document.getElementById("barraHombre").style.width = "57%";
        document.getElementById("barra").style.opacity = "1";
        document.getElementById("chart").style.opacity = "1";
        document.getElementById("pM").innerHTML = "Mujeres: 43%";
        document.getElementById("pH").innerHTML = "Hombres: 57%";

    } else if ("5700" <= y && y < "6200") {
        document.getElementById("barraMujer").style.width = "36%";
        document.getElementById("barraHombre").style.width = "64%";
        document.getElementById("barra").style.opacity = "1";
        document.getElementById("chart").style.opacity = "1";
        document.getElementById("pM").innerHTML = "Mujeres: 36%";
        document.getElementById("pH").innerHTML = "Hombres: 64%";

    } else if ("6600" <= y && y < "7300") {
        document.getElementById("barraMujer").style.width = "11%";
        document.getElementById("barraHombre").style.width = "89%";
        document.getElementById("barra").style.opacity = "1";
        document.getElementById("chart").style.opacity = "1";
        document.getElementById("pM").innerHTML = "11,4%";
        document.getElementById("pH").innerHTML = "Hombres: 88,6%";

    } else if ("7300" <= y) {
        document.getElementById("barra").style.opacity = "0";
        document.getElementById("chart").style.opacity = "0";
    } 

    console.log(y);
})




document.getElementById("b1").onmouseover = function() {
    document.getElementById("b1").style.backgroundImage = "url(img/banquitoH.png";
}
document.getElementById("b2").onmouseover = function() {
    document.getElementById("b2").style.backgroundImage = "url(img/banquitoM.png";
}
document.getElementById("b3").onmouseover = function() {
    document.getElementById("b3").style.backgroundImage = "url(img/banquitoH.png";
}
document.getElementById("b4").onmouseover = function() {
    document.getElementById("b4").style.backgroundImage = "url(img/banquitoH.png";
}
document.getElementById("b5").onmouseover = function() {
    document.getElementById("b5").style.backgroundImage = "url(img/banquitoM.png";
}
document.getElementById("b6").onmouseover = function() {
    document.getElementById("b6").style.backgroundImage = "url(img/banquitoM.png";
}
document.getElementById("b7").onmouseover = function() {
    document.getElementById("b7").style.backgroundImage = "url(img/banquitoM.png";
}
document.getElementById("b8").onmouseover = function() {
    document.getElementById("b8").style.backgroundImage = "url(img/banquitoM.png";
}
document.getElementById("b9").onmouseover = function() {
    document.getElementById("b9").style.backgroundImage = "url(img/banquitoH.png";
}
document.getElementById("b10").onmouseover = function() {
    document.getElementById("b10").style.backgroundImage = "url(img/banquitoM.png";
}
document.getElementById("b11").onmouseover = function() {
    document.getElementById("b11").style.backgroundImage = "url(img/banquitoH.png";
}
document.getElementById("b12").onmouseover = function() {
    document.getElementById("b12").style.backgroundImage = "url(img/banquitoM.png";
}
document.getElementById("b13").onmouseover = function() {
    document.getElementById("b13").style.backgroundImage = "url(img/banquitoH.png";
}
document.getElementById("b14").onmouseover = function() {
    document.getElementById("b14").style.backgroundImage = "url(img/banquitoM.png";
}
document.getElementById("b15").onmouseover = function() {
    document.getElementById("b15").style.backgroundImage = "url(img/banquitoH.png";
}
document.getElementById("b16").onmouseover = function() {
    document.getElementById("b16").style.backgroundImage = "url(img/banquitoM.png";
}
document.getElementById("b17").onmouseover = function() {
    document.getElementById("b17").style.backgroundImage = "url(img/banquitoH.png";
}
document.getElementById("b18").onmouseover = function() {
    document.getElementById("b18").style.backgroundImage = "url(img/banquitoM.png";
}
document.getElementById("b19").onmouseover = function() {
    document.getElementById("b19").style.backgroundImage = "url(img/banquitoH.png";
}
document.getElementById("b20").onmouseover = function() {
    document.getElementById("b20").style.backgroundImage = "url(img/banquitoM.png";
}
document.getElementById("b21").onmouseover = function() {
    document.getElementById("b21").style.backgroundImage = "url(img/banquitoM.png";
}
document.getElementById("b22").onmouseover = function() {
    document.getElementById("b22").style.backgroundImage = "url(img/banquitoH.png";
}
document.getElementById("b23").onmouseover = function() {
    document.getElementById("b23").style.backgroundImage = "url(img/banquitoM.png";
}
document.getElementById("b24").onmouseover = function() {
    document.getElementById("b24").style.backgroundImage = "url(img/banquitoM.png";
}




function refreshPage(){
    window.location.reload();
    document.documentElement.scrollTop = 0;
} 