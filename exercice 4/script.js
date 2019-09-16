var mdp = document.getElementById("motdepasse");
var conf = document.getElementById("confirmation");
var btn = document.getElementsByTagName("button")[0];
var form = document.getElementsByTagName("form")[0];

btn.addEventListener("click", function(){
    if (mdp.value == conf.value){
        mdp.style.borderColor = "green";
        conf.style.borderColor = "green";
    }
    else {
        mdp.style.borderColor = "red";
        conf.style.borderColor = "red";
    }

})