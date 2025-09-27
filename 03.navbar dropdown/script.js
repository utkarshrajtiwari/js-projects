let mob = document.querySelector(".navHamburger");
let ul = document.querySelector(".mobileMenu");
mob.addEventListener("click", () => {
  ul.classList.toggle("mob-nav-Active");
});
