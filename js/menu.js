//menu
(() => {
  const menuBurger = {
    openMenuBtn: document.querySelector(".burger-menu-btn"),
    closeMenuBtn: document.querySelector(".mobile-menu-close"),
    menu: document.querySelector(".mobile-menu"),
  };

  menuBurger.openMenuBtn.addEventListener("click", toggleModal);
  menuBurger.closeMenuBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    if (menuBurger.menu.classList.toggle("is-hidden")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }
})();
