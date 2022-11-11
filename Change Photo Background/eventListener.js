let red = document.getElementById("red");
let green = document.getElementById("green");
let blue = document.getElementById("blue");
let orange = document.getElementById("orange");
let aqua = document.getElementById("aqua");
let purple = document.getElementById("purple");
let img = document.getElementById("img");

let redBg = function(){
    img.style.backgroundColor = "red";
}

let greenBg = function(){
    img.style.backgroundColor = "rgb(36, 221, 36)";
}

let blueBg = function(){
    img.style.backgroundColor = "rgb(81, 127, 196)";
}

let orangeBg = function(){
    img.style.backgroundColor = "orange";
}

let aquaBg = function(){
    img.style.backgroundColor = "aqua";
}

let purpleBg = function(){
    img.style.backgroundColor = "purple";
}

red.addEventListener("click", redBg);
green.addEventListener("click", greenBg);
blue.addEventListener("click", blueBg);
orange.addEventListener("click", orangeBg);
aqua.addEventListener("click", aquaBg);
purple.addEventListener("click", purpleBg);