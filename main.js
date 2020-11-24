
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.getElementById("drop-nav").style.transform = "translateY(0%)";
    document.getElementById("drop-nav").style.boxShadow =
      "0 0 10px rgb(187, 187, 187)";
  } else {
    document.getElementById("drop-nav").style.transform = "translateY(-100%)";
    document.getElementById("drop-nav").style.boxShadow = "0 0 0 gray";
     
  }
}

$("document").ready(() => {
  $('.mobile-menu-btn').on('click', () => {
    $('.mobile-menu').toggleClass('toggle-mobile-menu');
    $('.mobile-menu .inner').toggleClass('toggle-mobile-menu-inner');
  
  })

  $('.mobile-menu .mobile-header .close-btn').on('click', () => {
    $('.mobile-menu').toggleClass('toggle-mobile-menu');
    $(".mobile-menu .inner").toggleClass("toggle-mobile-menu-inner");
  
  })

 $(".desktop-menu-btn").on("click", () => {
   $(".desktop-menu").toggleClass("toggle-desktop-menu");
   $(".desktop-menu .inner").toggleClass("toggle-desktop-menu-inner");
 });

 $(".desktop-menu .inner .close-btn").on("click", () => {
   $(".desktop-menu").toggleClass("toggle-desktop-menu");
   $(".desktop-menu .inner").toggleClass("toggle-desktop-menu-inner");
 });

  $('.mobile-menu .menu .menu-item').on('click', (e) => {
   $(e.target.children[1]).toggleClass('rotate-carrot');
  
  })
})

var acc = document.getElementsByClassName("menu-item");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}


//slick carousal

