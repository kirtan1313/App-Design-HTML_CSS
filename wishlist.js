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

  document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        const newIconPath = this.getAttribute('data-icon'); 
        const selectedIcon = document.getElementById('selected-icon'); 
        selectedIcon.src = newIconPath; 
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