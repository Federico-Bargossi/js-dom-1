const img1 = document.querySelector(".img");
const img2 = document.querySelector(".img2");
const btnElem = document.querySelector(".btn");
const btnElem2 = document.querySelector(".btn2");

btnElem.addEventListener("click" , function() {
    img2.classList.add("active");
    img1.classList.add("none");
})

btnElem.addEventListener("click" , function(){
    btnElem2.classList.add("active");
    btnElem.classList.add("none");
})

btnElem2.addEventListener("click" , function(){
    btnElem.classList.remove("none");
    btnElem2.classList.remove("active");
    img2.classList.remove("active");
    img1.classList.remove("none");
})