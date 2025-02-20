
  
  // Initialize particles.js
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 80, // Number of particles
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: { value: "#ffffff" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" }
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: { enable: false }
      },
      size: {
        value: 3,
        random: true,
        anim: { enable: false }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out"
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "grab" },
        onclick: { enable: true, mode: "push" }
      },
      modes: {
        grab: { distance: 140, line_linked: { opacity: 1 } },
        push: { particles_nb: 4 }
      }
    },
    retina_detect: true
  });

  // Initialize Typed.js
  var typed = new Typed('#element', { 
    strings: [
      'Python.', 
      'Java.', 
      'HTML.', 
      'CSS.', 
      'JavaScript.', 
      'Node.js.', 
      'MySQL.', 
      'React.js.'
    ],
    typeSpeed: 50,      // Typing speed
    backSpeed: 25,      // Backspacing speed
    backDelay: 1000,    // Delay before deleting
    startDelay: 500,    // Delay before starting the typing effect
    loop: true          // Loops the animation
  });

  // Mobile Menu Toggle
//   const menuBtn = document.querySelector(".menu-btn");
//   const menuContent = document.querySelector(".menu-content");

//   menuBtn.addEventListener("click", function () {
//     menuContent.classList.toggle("show");
//   });

//   // Close menu when clicking outside
//   document.addEventListener("click", function (event) {
//     if (!menuBtn.contains(event.target) && !menuContent.contains(event.target)) {
//       menuContent.classList.remove("show");
//     }
//   });
// });
  // 
  
  const menuBtn = document.querySelector('.menu-btn');
  const menuContent = document.querySelector('.menu-content');

  menuBtn.addEventListener('click', () => {
    menuContent.classList.toggle('show');
  });



