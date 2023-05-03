/*const quotes = [
  {
    id: '1',
    title: 'Isaac Newton',
    quote: `I do not know what I may appear to the world; but to myself, I seem
          to have been only like a boy playing on the seashore, and diverting
          myself now and then in finding a smoother pebble or prettier shell
          than ordinary, while the great ocean of truth lay all undiscovered
          before me.`,
    source: 'When apples fall down. 1756'
  },
   {
    id: '2',
    title: 'Isaac Newton',
    quote: `I do not know what I may appear to the world; but to myself, I seem
          to have been only like a boy playing on the seashore, and diverting
          myself now and then in finding a smoother pebble or prettier shell
          than ordinary, while the great ocean of truth lay all undiscovered
          before me.`,
    source: 'When apples fall down. 1756'
  },
   {
    id: '3',
    title: 'Isaac Newton',
    quote: `I do not know what I may appear to the world; but to myself, I seem
          to have been only like a boy playing on the seashore, and diverting
          myself now and then in finding a smoother pebble or prettier shell
          than ordinary, while the great ocean of truth lay all undiscovered
          before me.`,
    source: 'When apples fall down. 1756'
  },
];

/*const slides = document.querySelectorAll(".quotes__slide");
let currentSlide = 0;
const slideInterval = setInterval(nextSlide, 5000);

function nextSlide() {
  slides[currentSlide].style.opacity = 0;
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.opacity = 1;
}

const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");

prevButton.addEventListener("click", () => {
  slides[currentSlide].style.opacity = 0;
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slides[currentSlide].style.opacity = 1;
});

nextButton.addEventListener("click", () => {
  slides[currentSlide].style.opacity = 0;
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.opacity = 1;
});
