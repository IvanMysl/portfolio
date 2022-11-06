const menuBtn = document.querySelector(".menu-btn");
const menuList = document.querySelector(".nav__list")
console.log(menuBtn);
menuBtn.addEventListener("click", () => {
    console.log("active")
    menuList.classList.toggle("nav__active")
});
