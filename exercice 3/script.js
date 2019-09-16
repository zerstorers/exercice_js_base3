var btngreen = document.getElementsByClassName("green")[0];
var btnred = document.getElementsByClassName("red")[0];
var btnblue = document.getElementsByClassName("blue")[0];
var text = document.getElementById("texte");

btngreen.addEventListener("click" , function(){
    text.style.color = "green";
});

btnred.addEventListener("click" , function(){
    text.style.color = "red";
});

btnblue.addEventListener("click" , function(){
    text.style.color = "blue";
});