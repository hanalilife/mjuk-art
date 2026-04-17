/* =========================
載入共用 NAV
========================= */

fetch("nav.html")
.then(res => res.text())
.then(data => {

  const container = document.getElementById("nav-container");
  if(!container) return;

  container.innerHTML = data;

  /* NAV載入後初始化 */

  initMobileMenu();
  setActiveLink();
  initNavScroll();

});


/* =========================
Mobile Menu
========================= */

function initMobileMenu(){

  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");
  const closeBtn = document.querySelector(".mobile-close");

  if(!hamburger || !mobileMenu || !closeBtn) return;

  hamburger.onclick = () => mobileMenu.classList.add("open");
  closeBtn.onclick = () => mobileMenu.classList.remove("open");

}


/* =========================
Active Menu
========================= */

function setActiveLink(){

  const links = document.querySelectorAll(".nav__menu a");

  const currentPage = location.pathname.split("/").pop();

  links.forEach(link=>{

    const linkPage = link.getAttribute("href");

    if(linkPage === currentPage){
      link.classList.add("active");
    }

  });

}


/* =========================
Nav Scroll Effect
========================= */

function initNavScroll(){

  const nav = document.querySelector(".nav");
  if(!nav) return;

  window.addEventListener("scroll", () => {

    if(window.scrollY > 50){
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }

  });

}