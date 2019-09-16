var btngreen = document.getElementsByClassName("green")[0];
var btnred = document.getElementsByClassName("red")[1];
var btnblue = document.getElementsByClassName("blue")[2];
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