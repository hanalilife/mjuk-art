
window.addEventListener("scroll",function(){

const nav=document.querySelector(".nav");

if(window.scrollY>50){

nav.classList.add("scrolled");

}else{

nav.classList.remove("scrolled");

}



});

/* 自動判斷 active */

const links=document.querySelectorAll(".nav__menu a");

const currentPage=location.pathname.split("/").pop();

links.forEach(link=>{

const linkPage=link.getAttribute("href");

if(linkPage===currentPage){

link.classList.add("active");

}

});

const hamburger=document.querySelector(".hamburger");

const mobileMenu=document.querySelector(".mobile-menu");

const closeBtn=document.querySelector(".mobile-close");


hamburger.addEventListener("click",function(){

mobileMenu.classList.add("open");

});


closeBtn.addEventListener("click",function(){

mobileMenu.classList.remove("open");

});