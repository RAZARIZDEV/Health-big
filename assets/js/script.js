

const header = document.getElementById("header");
const hero = document.querySelector(".section-health");

window.addEventListener("load", () => {
  hero.style.paddingTop = header.offsetHeight + "px";
});
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      header.classList.add("sticky");
      hero.style.paddingTop = header.offsetHeight + "px";
    }

    if (ent.isIntersecting === true) {
      header.classList.remove("sticky");
      // hero.style.paddingTop = "50px";
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-100px",
  }
);
obs.observe(hero);
 

document.addEventListener("DOMContentLoaded", function () {
  const toggler = document.querySelector(".navbar-toggler");
  toggler.addEventListener("click", () => {
    toggler.classList.toggle("opened");
  });

  const headerSwiper = new Swiper(".header-swiper", {
    slidesPerView: 3, // Important: 'auto' allows flexible number of slides
    spaceBetween: 0,
    loop: true, // Enable seamless infinite looping
    speed: 5000, // Speed of transition
    autoplay: {
      delay: 0, // No pause between transitions
      pauseOnMouseEnter: false, // Don't pause on mouse enter
      disableOnInteraction: false, // Keep autoplay even if user touches
    },
    grabCursor: true,
    allowTouchMove: true,
    // runCallbacksOnInit: true, // 🔸 Important to fire slideChange/init
    on: {
      init: function (swiper) {
        scaleMiddleSlide(swiper);
      },
      slideChangeTransitionEnd: function (swiper) {
        scaleMiddleSlide(swiper);
      },
    },
  });

  function scaleMiddleSlide(swiper) {
    // Remove from all
    swiper.slides.forEach((slide) => slide.classList.remove("is-scaled"));

    // Get all visible slides
    const visibleSlides = swiper.slides.filter((slide) =>
      slide.classList.contains("swiper-slide-visible")
    );

    // Scale middle one only if exactly 3 are visible
    if (visibleSlides.length === 3) {
      visibleSlides[1].classList.add("is-scaled");
    }
  }


  new Swiper(".featured-swiper", {
    slidesPerView: 4, // Important: 'auto' allows flexible number of slides
    spaceBetween: 0,
    loop: true, // Enable seamless infinite looping
    speed: 3000, // Speed of transition
    autoplay: {
      delay: 0, // No pause between transitions
      pauseOnMouseEnter: false, // Don't pause on mouse enter
      disableOnInteraction: false, // Keep autoplay even if user touches
    },
    grabCursor: true,
    allowTouchMove: true,
    breakpoints: {
      500: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
      1199: {
        slidesPerView: 4,
      },
    },
  });


    const pricingSwiper =  new Swiper(".pricing-swiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    // speed: 3000,
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
    navigation: {
      nextEl: ".right-btn",
      prevEl: ".left-btn",
    },
    grabCursor: true,
    allowTouchMove: true,
    breakpoints: {
      0: {
        // Mobile
        slidesPerView: 1,
      },
      768: {
        // Tablet
        slidesPerView: 2,
      },
      992: {
        // Laptop/Desktop
        slidesPerView: 3,
      },
    },
  });





  // new Swiper(".doctors-swiper", {
  //   slidesPerView: 2,
  //   spaceBetween: 40,
  //   loop: true,
  //   // speed: 3000,
  //   // autoplay: {
  //   //   delay: 2500,
  //   //   disableOnInteraction: false,
  //   // },
  //   navigation: {
  //     nextEl: ".right-btn",
  //     prevEl: ".left-btn",
  //   },
  //   grabCursor: true,
  //   allowTouchMove: true,

  //   breakpoints: {
  //     0: {
  //       // Mobile
  //       slidesPerView: 1,
  //     },
  //     768: {
  //       // Tablet
  //       slidesPerView: 2,
  //     },
  //     992: {
  //       // Laptop/Desktop
  //       slidesPerView: 2,
  //     },
  //   },
  // });

  new Swiper(".testimonial-swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    speed: 3000,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    grabCursor: true,
    allowTouchMove: true,
    pagination: {
      el: ".swiper-pagination", // important: you need this element in HTML
      clickable: true,
    },
  });


// ======================== Comment Start ===========
/*


  const readMoreBtn = document.getElementById("readMoreBlog");

  readMoreBtn.addEventListener("click", function () {
    // Fade out the visible element
    const mobileReadMore = document.querySelector(".visibleOnTablet");
    if (mobileReadMore) {
      mobileReadMore.classList.add("fade-out");

      // const target = document.querySelector("#morehelp-cta");
      if (mobileReadMore) {
        const offsetTop = mobileReadMore.offsetTop - header.offsetHeight;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }

      setTimeout(() => {
        mobileReadMore.style.display = "none";
      }, 500); // matches transition time
    }

    // Fade in all elements with 'hideOnMobile'
    const hiddenItems = document.querySelectorAll(".hideOnTablet");
    hiddenItems.forEach(function (el) {
      el.style.display = "block"; // ensure it's visible before animating
      el.classList.add("fade-in");
    });
  });

  const showLessBlogBtn = document.getElementById("showLessBlog");
  const blogSection = document.getElementById("morehelp-cta");

  showLessBlogBtn.addEventListener("click", () => {
    // 1. Fade IN the mobileReadMore
    const mobileReadMore = document.querySelector(".visibleOnTablet");
    if (mobileReadMore) {
      // Make it block so fade-in can work
      mobileReadMore.style.display = "block";
      mobileReadMore.classList.remove("fade-out");
      mobileReadMore.classList.add("fade-in");

      // Scroll to it
      const offsetTop = blogSection.offsetTop - header.offsetHeight;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }

    // 2. Fade-OUT then hide the hideOnTablet items
    const hiddenItems = document.querySelectorAll(".hideOnTablet");
    hiddenItems.forEach((el) => {
      // trigger fade-out
      el.classList.remove("fade-in");
      el.classList.add("fade-out");

      // after transition, hide
      setTimeout(() => {
        el.style.display = "none";
      }, 500); // match your CSS transition-duration
    });
  });

*/ 

// ============== Comment End ===============
  


  const flips = document.querySelectorAll(".flip");

  // Set up mobile observer once
  let io;
  if (window.innerWidth < 768) {
    io = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          const card = target.querySelector(".card");
          card.classList.toggle("flipped", isIntersecting);
        });
      },
      { threshold: 0.6 }
    );

    flips.forEach((flip) => io.observe(flip));
  }

  flips.forEach((flip) => {
    const card = flip.querySelector(".card");
    const learnMoreBtn = flip.querySelector(".learn-more-btn");

    if (window.innerWidth >= 992) {
      // Desktop: hover to flip
      flip.addEventListener("mouseenter", () => card.classList.add("flipped"));
      flip.addEventListener("mouseleave", () =>
        card.classList.remove("flipped")
      );
    } else if (window.innerWidth >= 576) {
      // Tablet: click to flip/unflip
      if (!learnMoreBtn) return;

      learnMoreBtn.addEventListener("click", (e) => {
        e.stopPropagation(); // prevent immediate document click
        learnMoreBtn.style.opacity = "0"; // hide the button
        setTimeout(() => card.classList.add("flipped"), 200);
      });

      document.addEventListener("click", (e) => {
        if (!flip.contains(e.target) && card.classList.contains("flipped")) {
          card.classList.remove("flipped");
          learnMoreBtn.style.opacity = "1"; // restore button
        }
      });
    }
    // else (<576) — already handled by IntersectionObserver; no click handlers
  });












  const goTopButton = document.getElementById("up-arrow");

  // Show button when user scrolls down 300px
  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      goTopButton.classList.add("show");
    } else {
      goTopButton.classList.remove("show");
    }
  });

  // Scroll to top smoothly when clicked
  goTopButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  const header = document.getElementById("header");

  // 1. Target all nav links, dropdown toggles, and also offcanvas links
  const navLinks = document.querySelectorAll(
    '.navbar-nav a[href^="#"], .offcanvas-body a[href^="#"]'
  );
  const dropdownToggles = document.querySelectorAll(".dropdown-toggle");
  const offcanvasElement = document.getElementById("offcanvasNavbar");
  const offcanvasInstance =
    bootstrap.Offcanvas.getOrCreateInstance(offcanvasElement);

  // Collapse navbar menu (for standard `.navbar-collapse`)
  // const collapseEl = document.getElementById("navbarSupportedContent");
  // const collapseInstance =
  //   collapseEl && bootstrap.Collapse.getOrCreateInstance(collapseEl);

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // 2. Remove 'active' from all links and dropdown toggles
      navLinks.forEach((l) => l.classList.remove("active"));
      dropdownToggles.forEach((t) => t.classList.remove("active"));

      // 3. Add 'active' to the clicked link
      this.classList.add("active");

      // 4. If inside dropdown, activate parent toggle too
      const dropdown = this.closest(".dropdown-menu");
      if (dropdown) {
        const toggle = dropdown.previousElementSibling;
        if (toggle && toggle.classList.contains("dropdown-toggle")) {
          toggle.classList.add("active");
        }
      }

      // 5. Smooth scroll to the section
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        const offsetTop = target.offsetTop - header.offsetHeight;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }

      // 6. Close the offcanvas if open (for mobile)
      if (offcanvasElement.classList.contains("show")) {
        offcanvasInstance.hide();
      }

      // 6. Close collapsed navbar if open (for .navbar-collapse)
      // if (collapseEl && collapseEl.classList.contains("show")) {
      //   collapseInstance.hide();
      // }
    });
  });
  // const header = document.getElementById("header");

  // // Select ALL relevant menu links inside navbar (including dropdown items and btn)
  // const navLinks = document.querySelectorAll('.navbar-nav a[href^="#"]');
  // const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

  // // Click behavior: Manual active class toggle only
  // navLinks.forEach((link) => {
  //   link.addEventListener("click", function (e) {
  //     e.preventDefault();

  //     // Remove active class from all nav-links, dropdown-toggles, and buttons
  //     navLinks.forEach((l) => l.classList.remove("active"));
  //     dropdownToggles.forEach((t) => t.classList.remove("active"));

  //     // Add active class to clicked link
  //     this.classList.add("active");

  //     // Special case: If clicked link is inside a dropdown, mark its toggle as active too
  //     const dropdown = this.closest(".dropdown-menu");
  //     if (dropdown) {
  //       const toggle = dropdown.previousElementSibling;
  //       if (toggle && toggle.classList.contains("dropdown-toggle")) {
  //         toggle.classList.add("active");
  //       }
  //     }

  //     // Scroll to the section smoothly with header offset
  //     const target = document.querySelector(this.getAttribute("href"));
  //     if (target) {
  //       const offsetTop = target.offsetTop - header.offsetHeight;
  //       window.scrollTo({
  //         top: offsetTop,
  //         behavior: "smooth",
  //       });
  //     }
  //   });
  // });

  document.querySelectorAll(".custom-select").forEach((select) => {
    const selected = select.querySelector(".selected");
    const options = select.querySelector(".options");
    const optionItems = select.querySelectorAll(".option");

    selected.addEventListener("click", (e) => {
      document.querySelectorAll(".options").forEach((opt) => {
        if (opt !== options) opt.style.display = "none";
      });
      options.style.display =
        options.style.display === "block" ? "none" : "block";
      e.stopPropagation();
    });

    optionItems.forEach((option) => {
      option.addEventListener("click", (e) => {
        selected.textContent = option.textContent;
        options.style.display = "none";
        e.stopPropagation();
      });
    });
  });

  document.addEventListener("click", () => {
    document
      .querySelectorAll(".options")
      .forEach((opt) => (opt.style.display = "none"));
  });
});




// ================= Blog Post Section  ===============================



  document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".blog-section .row");
    const cards = container.querySelectorAll(":scope > .blog-card");
    const toggleBtn = document.getElementById("toggleBlogBtn");
    const cardsToShow = 3;
    let visibleCount = cardsToShow;

    function updateCardsVisibility() {
      cards.forEach((card, index) => {
        card.style.display = index < visibleCount ? "block" : "none";
      });

      if (cards.length <= cardsToShow) {
        toggleBtn.style.display = "none";
      } else {
        toggleBtn.style.display = "inline-block";
        toggleBtn.textContent = (visibleCount >= cards.length) ? "Show Less" : "Show More";
      }
    }

    toggleBtn.addEventListener("click", function () {
      if (visibleCount >= cards.length) {
        visibleCount = cardsToShow;
      } else {
        visibleCount = Math.min(visibleCount + cardsToShow, cards.length);
      }
      updateCardsVisibility();
    });

    // Initial setup
    updateCardsVisibility();
  });


// ==================== Auto Hide Dropdown Menu On Header ================================

  document.addEventListener("DOMContentLoaded", function () {
    const dropdownToggle = document.querySelector('.nav-item.dropdown .nav-link.dropdown-toggle');
    const dropdownMenu = document.querySelector('.nav-item.dropdown .dropdown-menu');

    let hideTimeout;

    dropdownToggle.addEventListener('click', function (e) {
      // Only trigger this logic on desktop (e.g., width >= 992px)
      if (window.innerWidth >= 992) {
        e.preventDefault(); // prevent default bootstrap toggle behavior

        // Toggle the dropdown menu manually
        dropdownMenu.classList.toggle('show');

        // Clear previous timeout if any
        clearTimeout(hideTimeout);

        // Set timeout to hide dropdown after 3 seconds
        if (dropdownMenu.classList.contains('show')) {
          hideTimeout = setTimeout(() => {
            dropdownMenu.classList.remove('show');
          }, 1200);
        }
      }
    });
  });



// ==================== Auto Hide Dropdown Menu On Find A Doc Section ================================

 
document.querySelectorAll(".custom-select").forEach((select) => {
  const selected = select.querySelector(".selected");
  const options = select.querySelector(".options");
  let autoHideTimeout;

  selected.addEventListener("click", () => {
    // Clear any previous timeout
    clearTimeout(autoHideTimeout);

    // Only set timeout if dropdown was just opened
    if (options.style.display === "block") {
      autoHideTimeout = setTimeout(() => {
        options.style.display = "none";
      }, 3000);
    }
  });

  // Also clear the timeout if an option is clicked manually
  select.querySelectorAll(".option").forEach((option) => {
    option.addEventListener("click", () => {
      clearTimeout(autoHideTimeout);
    });
  });

  // Optional: clear timeout if clicked outside (already handled in your code)
  document.addEventListener("click", () => {
    clearTimeout(autoHideTimeout);
  });
});



// ==============================  Reduce Nav Link OPacity ==================


document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  if (window.innerWidth >= 992) {
    navLinks.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        navLinks.forEach((otherLink) => {
          otherLink.style.opacity = otherLink === link ? "1" : "0.4";
        });
      });

      link.addEventListener("mouseleave", () => {
        navLinks.forEach((otherLink) => {
          otherLink.style.opacity = "1";
        });
      });
    });
  }
});


// ======================= Auto Scroll when click on Navigation =================

// Doctors Swiper
const doctorsSwiper = new Swiper(".doctors-swiper", {
  slidesPerView: 2,
  spaceBetween: 40,
  loop: true,
  grabCursor: true,
  allowTouchMove: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    enabled: false,
  },
  navigation: {
    nextEl: ".doctors-next",
    prevEl: ".doctors-prev",
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    992: { slidesPerView: 2 },
  },
});

// Trigger autoplay on doctors nav click
document.querySelector(".doctors-next").addEventListener("click", () => {
  doctorsSwiper.autoplay.start();
});
document.querySelector(".doctors-prev").addEventListener("click", () => {
  doctorsSwiper.autoplay.start();
});


// Pricing Swiper
const pricingSwiper = new Swiper(".pricing-swiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  loop: true,
  grabCursor: true,
  allowTouchMove: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    enabled: false,
  },
  navigation: {
    nextEl: ".pricing-next",
    prevEl: ".pricing-prev",
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    992: { slidesPerView: 3 },
  },
});

// Trigger autoplay on pricing nav click
document.querySelector(".pricing-next").addEventListener("click", () => {
  pricingSwiper.autoplay.start();
});
document.querySelector(".pricing-prev").addEventListener("click", () => {
  pricingSwiper.autoplay.start();
});
