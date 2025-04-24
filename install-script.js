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


