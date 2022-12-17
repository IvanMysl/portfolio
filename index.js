const menuBtn = document.querySelector(".menu-btn");
const menuList = document.querySelector(".nav__list")

menuBtn.addEventListener("click", () => {
    menuList.classList.toggle("nav__active")
})
menuBtn.addEventListener("click" , () => {
    menuBtn.classList.toggle("menu__active")
})

