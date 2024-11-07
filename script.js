const img1 = document.querySelector(".img");
const btnElem = document.querySelector(".btn");

btnElem.addEventListener("click" , function() {
    img1.src = './img/yellow_lamp.png';
})
    

btnElem.addEventListener("click" , function(){
    btnElem.innerHTML = ("Spegni");
})
