// Write JavaScript here.
console.log("main.js loaded successfully!");

/* Some sample JavaScript: this just listens 
for any "click" on the hero element and then
toggles the "active" class which we use to
shift colors when they click */
let hero = document.querySelector(".hero");
hero.addEventListener("click", () => {
  console.log("They clicked the hero!");
  hero.classList.toggle("active");
});
// Select the slides and buttons
const slides = document.querySelectorAll('.slide');
const learnMoreBtn = document.getElementById('learn-more-btn');
const toProjectsBtn = document.getElementById('to-projects-btn');
const goBackAboutBtn = document.getElementById('go-back-about');
const goBackProjectsBtn = document.getElementById('go-back-projects');

// Slide transition function for forward movement
function moveToNextSlide(currentIndex, nextIndex) {
  slides[currentIndex].classList.remove('active');
  slides[nextIndex].classList.add('active');
}

// Slide transition function for backward movement
function moveToPreviousSlide(currentIndex, prevIndex) {
  slides[currentIndex].classList.remove('active');
  slides[prevIndex].classList.add('active');
}

// Handle "Learn More" button click (move to About Me)
learnMoreBtn.addEventListener('click', function() {
  moveToNextSlide(0, 1); // Move from Hero to About Me
});

// Handle "Click Here" button click (move to Projects)
toProjectsBtn.addEventListener('click', function() {
  moveToNextSlide(1, 2); // Move from About Me to Projects
});

// Handle "Go Back" button clicks
goBackAboutBtn.addEventListener('click', function() {
  moveToPreviousSlide(1, 0); // Go back from About Me to Hero
});

goBackProjectsBtn.addEventListener('click', function() {
  moveToPreviousSlide(2, 1); // Go back from Projects to About Me
});
