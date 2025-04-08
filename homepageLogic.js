document.getElementById("product").addEventListener("click", function(){
    document.getElementById("produktPage").classList.add("active");
});
document.getElementById("rightback").addEventListener("click", function(){
    document.getElementById('produktPage').classList.remove('active');
});
document.getElementById("aboutus").addEventListener("click", function(){
    document.getElementById("aboutusPage").classList.add("active");
});
document.getElementById("leftback").addEventListener("click", function(){
    document.getElementById('aboutusPage').classList.remove('active');
});
document.getElementById("gmail").addEventListener("click", function(){
    window.location.href = "mailto:bitbybit.mannheim@gmail.com";
});