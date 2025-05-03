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
    asNavFor: '.slider-nav-top, .slider-nav-bottom',
    autoplay: true,
    autoplaySpeed: 3000,
  });

  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    infinite: false,
    centerMode: false,
    arrows: false,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 2500,
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  const darkModeBtn = document.getElementById("dark-mode-btn");
  const lightModeBtn = document.getElementById("light-mode-btn");

  if (localStorage.getItem("theme") === "dark") {
    setTheme("dark");
  } else {
    setTheme("light");
  }

  darkModeBtn.addEventListener("click", function () {
    setTheme("dark");
  });

  lightModeBtn.addEventListener("click", function () {
    setTheme("light");
  });

  function setTheme(mode) {
    if (mode === "dark") {
      body.classList.add("dark-mode");
      darkModeBtn.classList.add("active");
      lightModeBtn.classList.remove("active");
      localStorage.setItem("theme", "dark");
    } else {
      body.classList.remove("dark-mode");
      lightModeBtn.classList.add("active");
      darkModeBtn.classList.remove("active");
      localStorage.setItem("theme", "light");
    }
  }
});


// window
document.querySelectorAll('.dropdown-item').forEach(item => {
  item.addEventListener('click', function (e) {
      e.preventDefault();
      const newIconPath = this.getAttribute('data-icon'); 
      const selectedIcon = document.getElementById('selected-icon'); 
      selectedIcon.src = newIconPath; 
  });
});


// Serach 

document.addEventListener("DOMContentLoaded", function () {
  const searchIconBtn = document.getElementById("search-icon-btn");
  const searchInputBox = document.getElementById("search-input-box");
  const closeSearchBtn = document.getElementById("close-search-btn");

 
  searchIconBtn.addEventListener("click", function () {
      searchInputBox.classList.remove("d-none"); 
  });

  closeSearchBtn.addEventListener("click", function () {
      searchInputBox.classList.add("d-none");
  });
});



const appSliderPageApp = document.getElementById("appSlider");
const prevBtnPageApp = document.getElementById("prevBtn");
const nextBtnPageApp = document.getElementById("nextBtn");

prevBtnPageApp.addEventListener("click", () => {
  appSliderPageApp.scrollBy({ left: -150, behavior: "smooth" });
});

nextBtnPageApp.addEventListener("click", () => {
  appSliderPageApp.scrollBy({ left: 150, behavior: "smooth" });
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



const appSliderCommunApp = document.getElementById("appSliderCommun");
const prevBtnCommunApp = document.getElementById("prevBtnCommun");
const nextBtnCommunApp = document.getElementById("nextBtnCommun");

if (appSliderCommunApp && prevBtnCommunApp && nextBtnCommunApp) {
    prevBtnCommunApp.addEventListener("click", () => {
        appSliderCommunApp.scrollBy({ left: -150, behavior: "smooth" });
    });

    nextBtnCommunApp.addEventListener("click", () => {
        appSliderCommunApp.scrollBy({ left: 150, behavior: "smooth" });
    });
} 


