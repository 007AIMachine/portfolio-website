// Initialize particles.js for the background
particlesJS("particles-js", {
  particles: {
    number: {
      value: 80, // Number of particles
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false },
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: true, mode: "push" },
    },
    modes: {
      grab: { distance: 140, line_linked: { opacity: 1 } },
      push: { particles_nb: 4 },
    },
  },
  retina_detect: true,
});

// Initialize Typed.js
var colors = ["#3bff12", "#fffb00", "#d2fd00", "orange", "#3bff12", "cyan", "magenta", "#64ffda"];

var typed = new Typed("#element", {
  strings: [
    "Python.",
    "Java.",
    "HTML.",
    "CSS.",
    "JavaScript.",
    "Node.js.",
    "MySQL.",
    "React.js.",
  ],
  typeSpeed: 50,
  backSpeed: 25,
  backDelay: 1000,
  startDelay: 500,
  loop: true,
  preStringTyped: function (index) {
    document.querySelector("#element").style.color = colors[index % colors.length];
  },
});


// Function to toggle the mobile menu
function toggleMenu() {
  const menuContent = document.querySelector('.menu-content');
  menuContent.classList.toggle('show');
}

// Optional: Close the menu when a link is clicked (for better UX)
document.querySelectorAll('.menu-content li a').forEach(link => {
  link.addEventListener('click', () => {
    const menuContent = document.querySelector('.menu-content');
    if (menuContent.classList.contains('show')) {
      menuContent.classList.remove('show');
    }
  });
});