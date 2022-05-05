window.addEventListener("scroll", onScroll)

function onScroll() {
   showNavOnScroll()
   showBackToTopButtonOnScroll()

}

function showBackToTopButtonOnScroll() {
   const navigation = document.getElementById('navigation')
   if (scrollY > 0) {
      navigation.classList.add("scroll")

   } else {
      navigation.classList.remove("scroll")

   }
}

function showNavOnScroll() {
   const button = document.getElementById('backToTopButton')
   if (scrollY > 500) {
      button.classList.add("show")

   } else {
      button.classList.remove("show")

   }
}



function openMenu() {
   document.body.classList.add('menu-expanded')
}
function closeMenu() {
   document.body.classList.remove('menu-expanded')
}




ScrollReveal({
   origin: 'top',
   distance: '30px',
   duration: 700,
}).reveal(`
   #home, 
   #home img, 
   #home .stats,
   #services,
   #services header,
   #services .cards,
   #about,
   #about .header,
   #about .contant,

`);