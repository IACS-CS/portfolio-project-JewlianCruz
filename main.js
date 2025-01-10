// Select the slides and buttons
const slides = document.querySelectorAll('.slide');
const learnMoreBtn = document.getElementById('learn-more-btn');
const toProjectsBtn = document.getElementById('to-projects-btn');
const goBackBtns = document.querySelectorAll('.go-back-btn');

// Function to handle slide flipping transitions
function flipSlide(currentIndex, nextIndex, direction = 'forward') {
  const currentSlide = slides[currentIndex];
  const nextSlide = slides[nextIndex];

  // Add flipping classes based on direction
  currentSlide.classList.add(direction === 'forward' ? 'flip-out' : 'flip-out-reverse');
  nextSlide.classList.add(direction === 'forward' ? 'flip-in' : 'flip-in-reverse');

  // Ensure the next slide becomes active after the animation
  setTimeout(() => {
    currentSlide.classList.remove('active');
    nextSlide.classList.add('active');
    // Remove animation classes to allow re-triggering
    currentSlide.classList.remove('flip-out', 'flip-out-reverse');
    nextSlide.classList.remove('flip-in', 'flip-in-reverse');
  }, 600); // Match CSS animation duration
}

// Event listeners for buttons
learnMoreBtn.addEventListener('click', () => {
  flipSlide(0, 1, 'forward'); // Hero -> About Me
});

toProjectsBtn.addEventListener('click', () => {
  flipSlide(1, 2, 'forward'); // About Me -> Projects
});

goBackBtns[0].addEventListener('click', () => {
  flipSlide(1, 0, 'reverse'); // About Me -> Hero
});

goBackBtns[1].addEventListener('click', () => {
  flipSlide(2, 1, 'reverse'); // Projects -> About Me
});
