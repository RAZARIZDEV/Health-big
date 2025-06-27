// NAV LINKS

// Select all navigation links
const navLinks = document.querySelectorAll(".main-nav-link.hovers");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    // Remove the 'active' class from all links
    navLinks.forEach((lnk) => lnk.classList.remove("active"));

    // Add the 'active' class to the clicked link
    this.classList.add("active");
  });
});

// IMAGES

// Select all the images
/*
const img1 = document.querySelector(".health-img--1");
const img2 = document.querySelector(".health-img--2");
const img3 = document.querySelector(".health-img--3");

// Add hover event listeners to images
img2.addEventListener("mouseenter", () => {
  // Make Image 1 disappear when Image 2 is hovered
  img1.style.transition = "opacity 0.3s ease"; // Smooth transition
  img1.style.opacity = "0"; // Make Image 1 disappear
});

img2.addEventListener("mouseleave", () => {
  // Make Image 1 reappear when hover is removed from Image 2
  img1.style.transition = "opacity 0.3s ease"; // Smooth transition
  img1.style.opacity = "1"; // Make Image 1 reappear
});

img3.addEventListener("mouseenter", () => {
  // Make Images 1 and 2 disappear when Image 3 is hovered
  img1.style.transition = "opacity 0.3s ease"; // Smooth transition
  img2.style.transition = "opacity 0.3s ease"; // Smooth transition
  img1.style.opacity = "0"; // Make Image 1 disappear
  img2.style.opacity = "0"; // Make Image 2 disappear
});

img3.addEventListener("mouseleave", () => {
  // Make Images 1 and 2 reappear when hover is removed from Image 3
  img1.style.transition = "opacity 0.3s ease"; // Smooth transition
  img2.style.transition = "opacity 0.3s ease"; // Smooth transition
  img1.style.opacity = "1"; // Make Image 1 reappear
  img2.style.opacity = "1"; // Make Image 2 reappear
});
*/

// PRICING PLANS
// document.addEventListener("DOMContentLoaded", () => {
//   const showMoreButton = document.querySelector(".show--more a");
//   const lastBox = document.querySelector(".pricing-plan__box.last-box");
//   const special = document.querySelector(".special");

//   showMoreButton.addEventListener("click", (event) => {
//     event.preventDefault(); // Prevent the default anchor link behavior

//     // Toggle the "show" class on the last box
//     lastBox.classList.toggle("show");

//     if (lastBox.classList.contains("show")) {
//       showMoreButton.textContent = "Show less";

//       // Wait for the height transition to complete before scrolling
//       setTimeout(() => {
//         showMoreButton.scrollIntoView({ behavior: "smooth", block: "start" });
//       }, 500); // Delay matches the transition duration (0.5s)

//       // Add and remove appropriate classes
//       special.classList.add("div-margin");
//       special.classList.remove("general-margin-top-fix");
//     } else {
//       showMoreButton.textContent = "Show more";

//       // Scroll back to the start of the pricing section when collapsing
//       showMoreButton.scrollIntoView({ behavior: "smooth", block: "end" });

//       // Add and remove appropriate classes
//       special.classList.remove("div-margin");
//       special.classList.add("general-margin-top-fix");
//     }
//   });
// });

// DOCTORS

// const professionals = document.querySelector(".professionals");
// const professionalsHidden1 = document.querySelector(".box--1");
// const professionalsHidden3 = document.querySelector(".box--3");
// const boxes = document.querySelectorAll(".professional-box");
// const leftBtn = document.querySelector(".left-btn");
// const rightBtn = document.querySelector(".right-btn");

// let currentIndex = 0; // Tracks the first visible box

// rightBtn.addEventListener("click", () => {
//   // Increment the index
//   currentIndex++;

//   // If currentIndex exceeds the last index, reset to 0
//   if (currentIndex > boxes.length - 2) {
//     currentIndex = 0;
//   }

//   updateProfessionals();
// });

// leftBtn.addEventListener("click", () => {
//   // Decrement the index

//   if (currentIndex < boxes.length - 2) {
//     currentIndex = boxes.length - 2;
//   } else {
//     currentIndex--;
//   }

//   updateProfessionals();
// });

// function updateProfessionals() {
//   // Scroll to show the next set of boxes
//   professionals.style.transform = `translateX(-${currentIndex * 49.4}%)`;

//   // Update opacity for the first and third elements based on the current index
//   // if (currentIndex === 0) {
//   //   professionalsHidden1.style.opacity = "1"; // Fully visible
//   //   professionalsHidden3.style.opacity = "0"; // Hidden
//   // } else if (currentIndex === 1) {
//   //   professionalsHidden1.style.opacity = "0"; // Hidden
//   //   professionalsHidden3.style.opacity = "1"; // Hidden
//   // }
// }

// DOCTORS 2

// const professionals = document.querySelector(".professionals");
// const boxes = document.querySelectorAll(".professional-box");
// const leftBtn = document.querySelector(".left-btn");
// const rightBtn = document.querySelector(".right-btn");

// let currentIndex = 0; // Tracks the first visible box
// let autoScrollInterval; // To store the interval ID

// // Function to update the scroll position
// function updateProfessionals() {
//   professionals.style.transform = `translateX(-${currentIndex * 49.4}%)`;
// }

// // Function to scroll automatically to the left
// function startAutoScroll() {
//   autoScrollInterval = setInterval(() => {
//     currentIndex++;
//     if (currentIndex > boxes.length - 2) {
//       currentIndex = 0;
//     }
//     updateProfessionals();
//   }, 3000); // Change every 3 seconds (adjust as needed)
// }

// // Start auto-scroll on page load
// startAutoScroll();

// // Pause auto-scroll when a button is clicked
// function stopAutoScroll() {
//   clearInterval(autoScrollInterval);
//   startAutoScroll(); // Restart auto-scroll after interaction
// }

// // Right button click
// rightBtn.addEventListener("click", () => {
//   stopAutoScroll(); // Restart the timer
//   currentIndex++;
//   if (currentIndex > boxes.length - 2) {
//     currentIndex = 0;
//   }
//   updateProfessionals();
// });

// // Left button click
// leftBtn.addEventListener("click", () => {
//   stopAutoScroll(); // Restart the timer
//   currentIndex--;
//   if (currentIndex < 0) {
//     currentIndex = boxes.length - 2;
//   }
//   updateProfessionals();
// });

// DOCTORS 3

// const professionals = document.querySelector(".professionals");
// const boxes = document.querySelectorAll(".professional-box");
// const leftBtn = document.querySelector(".left-btn");
// const rightBtn = document.querySelector(".right-btn");

// // Clone the first box and append it to the end
// const firstBoxClone = boxes[0].cloneNode(true);
// professionals.appendChild(firstBoxClone);

// let currentIndex = 0; // Tracks the first visible box
// let autoScrollInterval; // To store the interval ID

// // Function to update the scroll position
// function updateProfessionals() {
//   professionals.style.transform = `translateX(-${currentIndex * 49.4}%)`;
// }

// // Function to scroll automatically to the left
// function startAutoScroll() {
//   autoScrollInterval = setInterval(() => {
//     currentIndex++;
//     if (currentIndex > boxes.length) {
//       // Adjusted to account for the cloned item
//       currentIndex = 1; // Jump to the first real item
//       professionals.style.transition = "none"; // Disable transition for instant jump
//       updateProfessionals(); // Update position instantly
//     } else {
//       professionals.style.transition = "transform 0.5s ease"; // Re-enable transition
//     }
//     updateProfessionals();
//   }, 3000); // Change every 3 seconds (adjust as needed)
// }

// // Start auto-scroll on page load
// startAutoScroll();

// // Pause auto-scroll when a button is clicked
// function stopAutoScroll() {
//   clearInterval(autoScrollInterval);
//   startAutoScroll(); // Restart auto-scroll after interaction
// }

// // Right button click
// rightBtn.addEventListener("click", () => {
//   stopAutoScroll(); // Restart the timer
//   currentIndex++;
//   if (currentIndex > boxes.length) {
//     // Adjusted to account for the cloned item
//     currentIndex = 1; // Jump to the first real item
//     professionals.style.transition = "none"; // Disable transition for instant jump
//     updateProfessionals(); // Update position instantly
//   } else {
//     professionals.style.transition = "transform 0.5s ease"; // Re-enable transition
//   }
//   updateProfessionals();
// });

// // Left button click
// leftBtn.addEventListener("click", () => {
//   stopAutoScroll(); // Restart the timer
//   currentIndex--;
//   if (currentIndex < 0) {
//     currentIndex = boxes.length - 1; // Go to the last real item
//   }
//   updateProfessionals();
// });

// TESTIMONIAL

const testimonials = document.querySelectorAll(".testimonial-box"); // Select all testimonials
const dots = document.querySelectorAll(".dot"); // Select all dots
let activeIndex = 0; // Keep track of the currently active testimonial

function showTestimonial(index) {
  if (index === activeIndex) return; // Prevent redundant clicks on the active dot

  // Set the current active testimonial as "previous"
  const currentTestimonial = testimonials[activeIndex];
  currentTestimonial.classList.remove("active");
  currentTestimonial.classList.add("previous");

  // Remove "previous" class after animation completes to reset its state
  setTimeout(() => {
    currentTestimonial.classList.remove("previous");
  }, 600); // Matches the CSS transition duration (0.6s)

  // Set the new active testimonial
  const nextTestimonial = testimonials[index];
  nextTestimonial.classList.add("active");

  // Update the active state for the dots
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });

  // Update the active index
  activeIndex = index;
}

// Add event listeners to each dot
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => showTestimonial(index));
});

// FORM

document.addEventListener("DOMContentLoaded", () => {
  const dropdowns = document.querySelectorAll(".custom-dropdown");

  dropdowns.forEach((dropdown) => {
    const selected = dropdown.querySelector(".dropdown-selected");
    const optionsContainer = dropdown.querySelector(".dropdown-options");
    const options = dropdown.querySelectorAll(".dropdown-option");

    // Toggle dropdown visibility
    selected.addEventListener("click", () => {
      dropdown.classList.toggle("open");
    });

    // Handle option selection
    options.forEach((option) => {
      option.addEventListener("click", () => {
        selected.textContent = option.textContent;
        dropdown.classList.remove("open");
      });
    });

    // Close dropdown if clicked outside
    document.addEventListener("click", (e) => {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove("open");
      }
    });
  });
});

// STICKY NAVIGATION

const sectionHealthEl = document.querySelector(".section-health");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

obs.observe(sectionHealthEl);

// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top

    if (href === "#" && !link.classList.contains("anchor--link"))
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// UP ARROW BUTTON

// Select the up-arrow button and the above section
// const upArrow = document.getElementById("up-arrow");
// const aboveSection = document.getElementById("above-section");

// // Function to toggle the visibility of the button
// function toggleUpArrow() {
//   const aboveSectionBottom = aboveSection.getBoundingClientRect().bottom;

//   // Show the button only if we're below the above section
//   if (aboveSectionBottom < 0) {
//     upArrow.classList.add("visible");
//   } else {
//     upArrow.classList.remove("visible");
//   }
// }

// // Scroll to the top when the button is clicked
// upArrow.addEventListener("click", () => {
//   window.scrollTo({ top: 0, behavior: "smooth" });
// });

// // Listen for scroll events
// window.addEventListener("scroll", toggleUpArrow);

// SUB NAV LINKS

document.querySelectorAll(".main-nav-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    const parentLi = this.parentElement; // The parent <li> of the clicked link
    const subMenu = parentLi.querySelector(".sub-menu"); // Look for the sub-menu inside the parent <li>
    const menuList = document.querySelector("sub-menu menu-list");
    // If there's a sub-menu, toggle its visibility
    if (subMenu) {
      e.preventDefault(); // Prevent default navigation behavior

      // Close all other open sub-menus
      document.querySelectorAll(".main-nav-list li.open").forEach((openLi) => {
        if (openLi !== parentLi) {
          openLi.classList.remove("open");
        }
      });

      // Toggle the open class on the current <li>
      parentLi.classList.toggle("open");
    } else {
      //If the clicked link does not have a sub-menu, close all open sub-menus
      document.querySelectorAll(".main-nav-list li.open").forEach((openLi) => {
        openLi.classList.remove("open");
      });
    }
  });
});



document.addEventListener("DOMContentLoaded", function () {
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
    // centeredSlides: true, // (optional) center slides for better look
  });
  new Swiper(".pricing-swiper", {
    slidesPerView: 3, // Important: 'auto' allows flexible number of slides
    spaceBetween: 40,
    loop: true, // Enable seamless infinite looping
    speed: 3000, // Speed of transition
    autoplay: {
      delay: 0, // No pause between transitions
      pauseOnMouseEnter: false, // Don't pause on mouse enter
      disableOnInteraction: false, // Keep autoplay even if user touches
    },
    grabCursor: true,
    allowTouchMove: true,
    // centeredSlides: true, // (optional) center slides for better look
  });
  new Swiper(".doctors-swiper", {
    slidesPerView: 2,
    spaceBetween: 40,
    loop: true,
    speed: 3000,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: { // ✅ Fixed here
      nextEl: ".right-btn",
      prevEl: ".left-btn",
    },
    grabCursor: true,
    allowTouchMove: true,
  });

});
