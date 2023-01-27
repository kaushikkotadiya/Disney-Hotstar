// Carousel
const carousel = document.querySelector(".carousel");
let sliders = [];

let slideIndex = 0;

const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }

  // Creating DOM
  let slide = document.createElement("div");
  let imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let h2 = document.createElement("h2")/////////////////////
  let p = document.createElement("p");

  // Attach all elements
  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  h2.appendChild(document.createTextNode(movies[slideIndex].note));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  content.appendChild(h1);
  content.appendChild(h2)
  content.appendChild(p);
  slide.appendChild(imgElement);
  slide.appendChild(content);
  carousel.appendChild(slide);

  // set up image
  imgElement.src = movies[slideIndex].image;
  slideIndex++;

  // Set class
  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "movie-title";
  h2.className="note";
  p.className = "movie-des";

  sliders.push(slide);

  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
      30 * (sliders.length - 2)
    }px)`;
  }
};

for (let i = 0; i < 3; i++) {
  createSlide();
}

setInterval(() => {
  createSlide();
}, 2000);

// Video cards
const videoCards = [...document.querySelectorAll(".video-card")];

videoCards.forEach((item) => {
    item.addEventListener("mouseover", () => {
        let video = item.children[1];
        video.play();
    });
    item.addEventListener("mouseleave", () => {
        let video = item.children[1];
        video.pause();
    });
});

// Movie cards
let cardContainers = [...document.querySelectorAll(".card-container")];
let preBTns = [...document.querySelectorAll(".pre-btn")];
let nxtBtns = [...document.querySelectorAll(".nxt-btn")];

cardContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtns[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth - 200;
  });

  preBTns[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth + 200;
  });
});
