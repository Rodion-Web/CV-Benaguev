gsap.to("#parallax-background", {
  yPercent: 0,
  ease: "power1.out",
  scrollTrigger: {
    trigger: "#home",
    start: "top top",
    end: "bottom top",
    scrub: true,
  },
});

gsap.from("#hero-title", {
  opacity: 0,
  y: 30,
  duration: 1.5,
  ease: "power4.out",
});

gsap.from("#hero-subtitle", {
  opacity: 0,
  y: 30,
  delay: 0.5,
  duration: 1.5,
  ease: "power4.out",
});

// Слайд для мобильных устройств
document.addEventListener("DOMContentLoaded", function () {
  let myCarousel = document.querySelector("#experienceCarousel");
  let carousel = new bootstrap.Carousel(myCarousel, {
    interval: 50000, // Автопрокрутка каждые 5 секунд
    wrap: true, // Возврат к первому слайду после последнего
  });
});

// Открытие сертификата в полный экран
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const closeBtn = document.querySelector(".close-modal");

  document.querySelectorAll(".certificate-image").forEach((img) => {
    img.addEventListener("click", function () {
      modal.style.display = "block";
      modalImg.src = this.dataset.full ? this.dataset.full : this.src;

      modalImg.classList.remove("small-image");
      if (this.dataset.size === "small") {
        modalImg.classList.add("small-image");
      }
    });
  });

  closeBtn.onclick = function () {
    modal.style.display = "none";
  };

  modal.onclick = function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  };
});

// Автоматическое закрытие меню при клике на ссылку (для мобильных)
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
        toggle: true,
      });
    });
  });
});
