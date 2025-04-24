$('.cb-value').click(function () {
  var mainParent = $(this).parent('.toggle-btn');
  if ($(mainParent).find('input.cb-value').is(':checked')) {
    $(mainParent).addClass('active');
  } else {
    $(mainParent).removeClass('active');
  }

})

let profile = document.querySelector('.profile');
let menu = document.querySelector('.menu');

profile.onclick = function () {
  menu.classList.toggle('active');
}


$(document).ready(function () {
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav-top, .slider-nav-bottom', // Both Navs Linked
    autoplay: true,
    autoplaySpeed: 3000, // Main slider ni speed vadhare rakhiye
  });

  $('.slider-nav').slick({
    slidesToShow: 4, // Ek j image dekhaay
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    infinite: false,
    centerMode: false, // CenterMode false kariye
    arrows: false,
    focusOnSelect: true,
    autoplay: true, // Thumbnails automatic slide thay
    autoplaySpeed: 2500, // Thumbnails ni speed thodi ochi rakhiye
  });
});





document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("theme-toggle");
  const body = document.body;

  // Load saved theme
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
  }

  toggleButton.addEventListener("click", function () {
    body.classList.toggle("dark-mode");

    // Save the theme preference
    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
});





const appSlider = document.getElementById("appSlider");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

prevBtn.addEventListener("click", () => {
  appSlider.scrollBy({ left: -150, behavior: "smooth" });
});

nextBtn.addEventListener("click", () => {
  appSlider.scrollBy({ left: 150, behavior: "smooth" });
});



const appSliderEdit = document.getElementById("appSliderEdit");
const prevBtnEdit = document.getElementById("prevBtnEdit");
const nextBtnEdit = document.getElementById("nextBtnEdit");

prevBtnEdit.addEventListener("click", () => {
  appSliderEdit.scrollBy({ left: -150, behavior: "smooth" });
});

nextBtnEdit.addEventListener("click", () => {
  appSliderEdit.scrollBy({ left: 150, behavior: "smooth" });
});


const appSliderCommun = document.getElementById("appSliderCommun");
const prevBtnCommun = document.getElementById("prevBtnCommun");
const nextBtnCommun = document.getElementById("nextBtnCommun");

prevBtnCommun.addEventListener("click", () => {
  appSliderCommun.scrollBy({ left: -150, behavior: "smooth" });
});

nextBtnCommun.addEventListener("click", () => {
  appSliderCommun.scrollBy({ left: 150, behavior: "smooth" });
});


