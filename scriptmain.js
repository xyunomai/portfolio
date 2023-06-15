'use strict'
/*document.addEventListener('click', function(){
   window.open("main.html");
});


const logoElement = document.getElementsByClassName ("logo") [0];

logoElement.addEventListener("click", function(){
   window.open ("index.html");
});
*/

const modal =document.querySelector('.modal');
const overlay=document.querySelector('.overlay');
const btnCloseModal=document.querySelector('.close-modal');
const showModal=document.querySelectorAll('.contact-modal');

const openModal = function (){
   modal.classList.remove('hidden');
   overlay.classList.remove('hidden');
};

const closeModal = function (){
   modal.classList.add('hidden');
   overlay.classList.add('hidden');
};


for (let i=0; i<showModal.length; i++)
showModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);


const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector ('.mobile-nav');

 menu_btn.addEventListener('click', function(){
   menu_btn.classList.toggle('is-active');
   mobile_menu.classList.toggle('active');
 });

                             
