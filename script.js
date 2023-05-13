// ARROW UP
const arrowUp = document.querySelector(".arrow-up");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 0) {
    arrowUp.classList.add("show");
  } else {
    arrowUp.classList.remove("show");
  }
});

arrowUp.addEventListener("click", () => {
    const scroll = setInterval(() => {
         if (window.pageYOffset === 0) {
            clearInterval(scroll);
        }
         window.scrollBy(0, -100);
    }, 10);
});

// STICKY HEADER

const nav = document.getElementById("nav");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
});

// menu

$('#menu_btn').click(function() {
    $('nav .navigation ul').addClass('active')
});

$('#menu_btn_cross').click(function() {
    $('nav .navigation ul').removeClass('active')
});



