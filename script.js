// Carousel principal 1 (HEADER) INDEX
(function () {
  const carousel = document.getElementById("carousel-images");
  const carouselImages = document.querySelectorAll(".carousel-slide");
  const dotsContainer = document.getElementById("carousel-dots");
  let index = 0;

  if (carousel && carouselImages.length > 0 && dotsContainer) {
    function updateCarousel() {
      carousel.style.transform = `translateX(-${index * 100}%)`;
      dotsContainer.querySelectorAll("div").forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
      });
    }

    function nextMainSlide() {
      index = (index + 1) % carouselImages.length;
      updateCarousel();
    }

    function prevMainSlide() {
      index = (index - 1 + carouselImages.length) % carouselImages.length;
      updateCarousel();
    }

    function createDots() {
      dotsContainer.innerHTML = "";
      carouselImages.forEach((_, i) => {
        const dot = document.createElement("div");
        dot.addEventListener("click", () => {
          index = i;
          updateCarousel();
        });
        dotsContainer.appendChild(dot);
      });
      updateCarousel();
    }

    createDots();
    setInterval(nextMainSlide, 5000); // automático

    // Exponer funciones del carrusel principal con nombres únicos
    window.prevMainSlide = prevMainSlide;
    window.nextMainSlide = nextMainSlide;
  }
})();


// Carousel 2 de sección de servicios 
(function () {
  const serviceCarousel = document.getElementById("carousel2Images");
  const serviceImages = document.querySelectorAll(".carousel2-slide");
  const dotsContainer = document.getElementById("carousel2dots");
  let serviceIndex = 0;

  if (serviceCarousel && serviceImages.length > 0 && dotsContainer) {
    function updateServiceCarousel() {
      serviceCarousel.style.transform = `translateX(-${serviceIndex * 100}%)`;
      dotsContainer.querySelectorAll("div").forEach((dot, i) => {
        dot.classList.toggle("active", i === serviceIndex);
      });
    }

    function nextServiceSlide() {
      serviceIndex = (serviceIndex + 1) % serviceImages.length;
      updateServiceCarousel();
    }

    function prevServiceSlide() {
      serviceIndex = (serviceIndex - 1 + serviceImages.length) % serviceImages.length;
      updateServiceCarousel();
    }

    function createServiceDots() {
      dotsContainer.innerHTML = "";
      serviceImages.forEach((_, i) => {
        const dot = document.createElement("div");
        dot.addEventListener("click", () => {
          serviceIndex = i;
          updateServiceCarousel();
        });
        dotsContainer.appendChild(dot);
      });
      updateServiceCarousel();
    }

    createServiceDots();
    setInterval(nextServiceSlide, 5000); // automático

    // Nombres únicos para evitar conflicto
    window.prevServiceSlide = prevServiceSlide;
    window.nextServiceSlide = nextServiceSlide;
  }
})();


// Slider before/after INDEX
const containers = document.querySelectorAll('.container');
containers.forEach(container => {
  const slider = container.querySelector('.slider');
  const imageBefore = container.querySelector('.image-before');

  slider.addEventListener('input', (e) => {
    const value = e.target.value;
    imageBefore.style.width = `${value}%`;
    container.style.setProperty('--position', `${value}%`);
  });
});


// Slider portfolio (slider2)
document.querySelectorAll('.slider2-container').forEach(container => {
  const slider = container.querySelector('.slider2-slider');
  const imageBefore = container.querySelector('.slider2-image-before');
  const sliderLine = container.querySelector('.slider2-slider-line');
  const sliderButton = container.querySelector('.slider2-slider-button');

  function updateSlider(value) {
    container.style.setProperty('--position', `${value}%`);
  }

  slider.addEventListener('input', (e) => {
    updateSlider(e.target.value);
  });

  updateSlider(slider.value);
});


// carousel 3 PAGINA SERVICES
// Carousel 3 (SERVICIOS)
(function () {
  const carousel = document.getElementById("carousel3-images");
  const carouselImages = document.querySelectorAll(".carousel3-slide");
  const dotsContainer = document.getElementById("carousel3-dots");
  let index = 0;

  if (carousel && carouselImages.length > 0 && dotsContainer) {
    function updateCarousel() {
      carousel.style.transform = `translateX(-${index * 100}%)`;
      dotsContainer.querySelectorAll("div").forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
      });
    }

    function nextSlide3() {
      index = (index + 1) % carouselImages.length;
      updateCarousel();
    }

    function prevSlide3() {
      index = (index - 1 + carouselImages.length) % carouselImages.length;
      updateCarousel();
    }

    function createDots() {
      dotsContainer.innerHTML = "";
      carouselImages.forEach((_, i) => {
        const dot = document.createElement("div");
        dot.addEventListener("click", () => {
          index = i;
          updateCarousel();
        });
        dotsContainer.appendChild(dot);
      });
      updateCarousel();
    }

    createDots();
    setInterval(nextSlide3, 5000); // automático

    // Exponer funciones de carousel 3
    window.prevSlide3 = prevSlide3;
    window.nextSlide3 = nextSlide3;
  }
})();

//FORMULARIO
  const steps = document.querySelectorAll(".form-step");
  const nextBtns = document.querySelectorAll(".next-btn");
  const backBtns = document.querySelectorAll(".back-btn");
  const stepIndicator = document.getElementById("stepIndicator");

  let currentStep = 0;

  function showStep(stepIndex) {
    steps.forEach((step, i) => {
      step.classList.toggle("active", i === stepIndex);
    });
    stepIndicator.textContent = `Question ${stepIndex + 1} of ${steps.length}`;
  }

  nextBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      if (currentStep < steps.length - 1) {
        currentStep++;
        showStep(currentStep);
      }
    });
  });

  backBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      if (currentStep > 0) {
        currentStep--;
        showStep(currentStep);
      }
    });
  });

  showStep(currentStep);


 document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
});


  document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  });

