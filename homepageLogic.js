document.getElementById("product").addEventListener("click", function(){
    document.getElementById("produktPage").classList.add("active");
});
document.getElementById("back").addEventListener("click", function(){
    document.getElementById('produktPage').classList.remove('active');
});
document.getElementById("gmail").addEventListener("click", function(){
    window.location.href = "mailto:bitbybit.mannheim@gmail.com";
});