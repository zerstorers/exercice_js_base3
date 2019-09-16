

var text = document.getElementById("texte");
var btnpop = document.getElementsByTagName("a")[0];
var btnend = document.getElementsByTagName("a")[1];

// btnend.addEventListener("click" , function(){
//     text.parentNode.removeChild(text);
// });

btnend.addEventListener("click", function(){
    text.style.display = "none";
});

btnpop.addEventListener("click", function(){
    text.style.display = "block";
})