// Membuat Animation scroll
window.addEventListener("scroll", function(){
    const header = this.document.querySelector("header");
    header.classList.toggle("sticky", window.screenY> 0);
});

//Membuat Hamburger
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav ul");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

//cara close navigation
navMenu.addEventListener("click", ()=>{
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
})