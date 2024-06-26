
// swiper

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    
  });


  // brojke
let valueDisplays = document.querySelectorAll(".num");
let interval = 2000; // smanjena vrednost intervala

let scrollTriggered = false;

function startCounting() {
  if (!scrollTriggered) {
    valueDisplays.forEach((valueDisplay) => {
      let startValue = 0;
      let endValue = parseInt(valueDisplay.getAttribute("data-val"));
      let duration = Math.floor(interval / endValue);
      let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
          clearInterval(counter);
        }
      }, duration);
    });
    scrollTriggered = true;
  }
}

window.addEventListener("scroll", function () {
  let wrapper = document.querySelector(".wrapper");
  let scrollTrigger = wrapper.getAttribute("data-scroll-trigger");

  if (scrollTrigger === "true") {
    let wrapperPosition = wrapper.getBoundingClientRect();
    let windowHeight = window.innerHeight;

    if (wrapperPosition.top < windowHeight && wrapperPosition.bottom >= 0) {
      startCounting();
    }
  }
});




// JavaScript

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("slider");
  const sliderNav = document.getElementById("slider-nav");
  const prevArrow = document.getElementById("prev");
  const nextArrow = document.getElementById("next");

  for (let i = 1; i <= 5; i++) {
    const dot = document.createElement("span");
    dot.setAttribute("data-slide", i);
    sliderNav.appendChild(dot);
  }

  const dots = document.querySelectorAll("#slider-nav span");

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const slideNumber = dot.getAttribute("data-slide");
      slider.scrollLeft = (slideNumber - 1) * slider.offsetWidth;
    });
  });

  prevArrow.addEventListener("click", () => {
    slider.scrollLeft -= slider.offsetWidth;
  });

  nextArrow.addEventListener("click", () => {
    slider.scrollLeft += slider.offsetWidth;
  });

  let currentSlide = 0;

  function nextSlide() {
    currentSlide = (currentSlide + 1) % 5;
    slider.scrollLeft = currentSlide * slider.offsetWidth;
  }

  setInterval(nextSlide, 4000);

  slider.addEventListener("scroll", () => {
    const currentSlide = Math.round(slider.scrollLeft / slider.offsetWidth) + 1;

    dots.forEach((dot) => {
      const dotSlide = dot.getAttribute("data-slide");
      dot.style.opacity = dotSlide == currentSlide ? 1 : 0.75;
    });
  });
});





