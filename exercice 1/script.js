var img = document.getElementById("image1");

img.addEventListener ("mouseover", function(){
    img.style.border = "3px solid red";
});

img.addEventListener ("mouseleave", function(){
    img.style.border = "none";
});