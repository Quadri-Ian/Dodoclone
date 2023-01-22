// Burger menus
document.addEventListener('DOMContentLoaded', function() {
    // open
    const burger = document.querySelectorAll('.navbar-burger');
    const menu = document.querySelectorAll('.navbar-menu');

    if (burger.length && menu.length) {
         for (var i = 0; i < burger.length; i++) {
               burger[i].addEventListener('click', function() {
                    for (var j = 0; j < menu.length; j++) {
                         menu[j].classList.toggle('hidden');
                    }
               });
         }
    }

    // close
    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');

    if (close.length) {
         for (var i = 0; i < close.length; i++) {
               close[i].addEventListener('click', function() {
                    for (var j = 0; j < menu.length; j++) {
                         menu[j].classList.toggle('hidden');
                    }
               });
         }
    }

    if (backdrop.length) {
         for (var i = 0; i < backdrop.length; i++) {
               backdrop[i].addEventListener('click', function() {
                    for (var j = 0; j < menu.length; j++) {
                         menu[j].classList.toggle('hidden');
                    }
               });
         }
    }
});

// Burger menus
document.addEventListener('DOMContentLoaded', function() {
     // open
     const burger = document.querySelectorAll('.navbar-burger-ii');
     const menu = document.querySelectorAll('.navbar-menu-ii');
 
     if (burger.length && menu.length) {
          for (var i = 0; i < burger.length; i++) {
                burger[i].addEventListener('click', function() {
                     for (var j = 0; j < menu.length; j++) {
                          menu[j].classList.toggle('hidden');
                     }
                });
          }
     }
 
     // close
     const close = document.querySelectorAll('.navbar-close-ii');
     const backdrop = document.querySelectorAll('.navbar-backdrop-ii');
 
     if (close.length) {
          for (var i = 0; i < close.length; i++) {
                close[i].addEventListener('click', function() {
                     for (var j = 0; j < menu.length; j++) {
                          menu[j].classList.toggle('hidden');
                     }
                });
          }
     }
 
     if (backdrop.length) {
          for (var i = 0; i < backdrop.length; i++) {
                backdrop[i].addEventListener('click', function() {
                     for (var j = 0; j < menu.length; j++) {
                          menu[j].classList.toggle('hidden');
                     }
                });
          }
     }
 });

          // set the default active slide to the first one
          let slideIndex = 1;
          showSlide(slideIndex);
  
          // change slide with the prev/next button
          function moveSlide(moveStep) {
              showSlide(slideIndex += moveStep);
          }
  
          // change slide with the dots
          function currentSlide(n) {
              showSlide(slideIndex = n);
          }
  
          function showSlide(n) {
              let i;
              const slides = document.getElementsByClassName("slide");
              const dots = document.getElementsByClassName('dot');
              
              if (n > slides.length) { slideIndex = 1 }
              if (n < 1) { slideIndex = slides.length }
  
              // hide all slides
              for (i = 0; i < slides.length; i++) {
                  slides[i].classList.add('hidden');
              }
  
              // remove active status from all dots
              for (i = 0; i < dots.length; i++) {
                  dots[i].classList.remove('bg-orange-500');
                  dots[i].classList.add('bg-orange-100');
              }
  
              // show the active slide
              slides[slideIndex - 1].classList.remove('hidden');
  
              // highlight the active dot
              dots[slideIndex - 1].classList.remove('bg-orange-100');
              dots[slideIndex - 1].classList.add('bg-orange-500');
          }

          