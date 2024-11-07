const img1 = document.querySelector(".img");
const btnElem = document.querySelector(".btn");

btnElem.addEventListener("click" , function(){
    if (img1.src.includes('white_lamp.png')){
        img1.src = './img/yellow_lamp.png';
        btnElem.innerHTML = ('Spegni');
    } else {
        img1.src = './img/white_lamp.png';
        btnElem.innerHTML = ('Accendi');
    }
})



/*btnElem.addEventListener("click" , function() {
    img1.src = 'yellow_lamp.png';
})
    

btnElem.addEventListener("click" , function(){
    btnElem.innerHTML = ("Spegni");
})*/
