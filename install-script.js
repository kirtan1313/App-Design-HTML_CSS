const sliderTrack = document.querySelector('.install-slider-track');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const cards = document.querySelectorAll('.install-card');

let currentIndex = 0;
const cardWidth = cards[0].offsetWidth + 20; // Card width + margin

// Event Listeners
nextBtn.addEventListener('click', () => {
  if (currentIndex < cards.length - 1) {
    currentIndex++;
    updateSlider();
  }
});

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});

function updateSlider() {
  sliderTrack.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === cards.length - 1;
}

// Initial State
updateSlider();



const appSliderPageApp = document.getElementById("appSliderPageApp");
const prevBtnPageApp = document.getElementById("prevBtnPageApp");
const nextBtnPageApp = document.getElementById("nextBtnPageApp");

prevBtnPageApp.addEventListener("click", () => {
  appSliderPageApp.scrollBy({ left: -150, behavior: "smooth" });
});

nextBtnPageApp.addEventListener("click", () => {
  appSliderPageApp.scrollBy({ left: 150, behavior: "smooth" });
});



const appSliderCommunApp = document.getElementById("appSliderCommunApp");
const prevBtnCommunApp = document.getElementById("prevBtnCommunApp");
const nextBtnCommunApp = document.getElementById("nextBtnCommunApp");

if (appSliderCommunApp && prevBtnCommunApp && nextBtnCommunApp) {
    prevBtnCommunApp.addEventListener("click", () => {
        appSliderCommunApp.scrollBy({ left: -150, behavior: "smooth" });
    });

    nextBtnCommunApp.addEventListener("click", () => {
        appSliderCommunApp.scrollBy({ left: 150, behavior: "smooth" });
    });
} 


function toggleIcon(element) {
  const iconContainer = element.querySelector('.toggle-icon');
  const isBookmarkIcon = iconContainer.tagName.toLowerCase() === 'i';

  if (isBookmarkIcon) {
      // Switch back to the original image
      iconContainer.outerHTML = `
          <img src="./assets/icon/save-instagram.png" alt="" class="responsive-img toggle-icon">
      `;
  } else {
      // Switch to the font-awesome icon
      iconContainer.outerHTML = `
          <i class="fa-solid fa-bookmark toggle-icon"></i>
      `;
  }
}
let profile = document.querySelector('.profile');
let menu = document.querySelector('.menu');

profile.onclick = function () {
  menu.classList.toggle('active');
}




document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  const darkModeBtn = document.getElementById("dark-mode-btn");
  const lightModeBtn = document.getElementById("light-mode-btn");

  // Load saved theme
  if (localStorage.getItem("theme") === "dark") {
    setTheme("dark");
  } else {
    setTheme("light");
  }

  // Event Listener for Dark Mode button
  darkModeBtn.addEventListener("click", function () {
    setTheme("dark");
  });

  // Event Listener for Light Mode button
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


document.addEventListener("DOMContentLoaded", function () {
  // Update the dropdown icon dynamically
  document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      const newIconPath = this.getAttribute('data-icon'); // Get new icon path
      const selectedIcon = document.getElementById('selected-icon'); // Find selected icon element
      selectedIcon.src = newIconPath; // Update the selected icon's src
    });
  });

  

  
  const dropdownButton = document.getElementById("dropdownMenuButton");
  dropdownButton.addEventListener("shown.bs.dropdown", function () {
    console.log("Dropdown opened, aria-expanded is now true.");
  });
  dropdownButton.addEventListener("hidden.bs.dropdown", function () {
    console.log("Dropdown closed, aria-expanded is now false.");
  });
});



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
