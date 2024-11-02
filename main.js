// Start at the bottom
window.onload = function () {
  // Desativa a restauração automática de rolagem e força a rolagem para o final
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual"; // Desativa o comportamento padrão do navegador
  }

  // Força o scroll para o final da página
  window.scrollTo(0, document.body.scrollHeight);

  // Inicia a animação da GIF
  start();
};

// GSAP Code
function start() {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
}

// Section one

// Move the GIF from the bottom of the container to the top as you scroll
gsap.fromTo(
  ".section-one .gif",
  {
    y: "100%", // Inicialmente no fundo da página
  },
  {
    y: "1600px", // Movendo a GIF para cima conforme o scroll
    ease: "none",
    scrollTrigger: {
      trigger: ".section-one .gif-container",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      //markers: true,
    },
  }
);

// Fading animation for the GIF
gsap.to(".section-one .gif", {
  opacity: 1,
  scrollTrigger: {
    trigger: ".section-one .gif",
    start: "top 100px",
    end: "100px",
    scrub: true,
    //markers: true,
  },
});

// Section two - Scroll horizontally

// Move the GIF from the bottom of the container to the top as you scroll
gsap.fromTo(
  ".section-two .horizontal-container",
  {
    y: "0px", x: "-300vw", // Inicialmente no fundo da página
  },
  {
    y: "300vh", x: "0px", // Movendo a GIF para cima conforme o scroll
    ease: "none",
    scrollTrigger: {
      trigger: ".section-two",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      //markers: true,
    },
  }
);

// Move WALKING

gsap.fromTo(
  ".section-two .walking",
  {
    bottom: "350vh", x: "100vw", // Inicialmente no fundo da página
  },
  {
    bottom: "50vh", x: "0px", // Movendo a GIF para cima conforme o scroll
    ease: "none",
    scrollTrigger: {
      trigger: ".section-two",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      //markers: true,
    },
  }
);

// Section four

// Move the GIF from the bottom of the container to the top as you scroll
gsap.fromTo(
  ".section-four .horizontal-container",
  {
    y: "0px", x: "-300vw", // Inicialmente no fundo da página
  },
  {
    y: "300vh", x: "0px", // Movendo a GIF para cima conforme o scroll
    ease: "none",
    scrollTrigger: {
      trigger: ".section-four",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      //markers: true,
    },
  }
);

// Move WALKING

gsap.fromTo(
  ".section-four .walking",
  {
    bottom: "350vh", x: "100vw", // Inicialmente no fundo da página
  },
  {
    bottom: "50vh", x: "0px", // Movendo a GIF para cima conforme o scroll
    ease: "none",
    scrollTrigger: {
      trigger: ".section-four",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      //markers: true,
    },
  }
);

// Section five

// Define the motion path (you can customize the path points)
  const path = [
    { x: 0, y: 0 },
    { x: 800, y: 1000 },
    { x: -800, y: 3000 },
    { x: 0, y: 6000 },
  ];

  gsap.to(".section-five .gif", {
    scrollTrigger: {
      trigger: ".section-five .gif-container",
      start: "top top",  // when the top of the section reaches the top of the viewport
      end: "4200px bottom",  // when the bottom of the section reaches the bottom of the viewport
      scrub: 1,  // smooth animation as you scroll
      markers: true,
    },
    motionPath: {
      path: "#path",
      align: '#path',
      alignOrigin: [0.5, 0.5],
    },
    duration: 0.2
  });

// --------------------------------------- Rain ---------------------------------------

// Function to create a single rain drop
const createRainDrop = (section) => {
  const drop = document.createElement("div");
  drop.classList.add("rain-drop");
  section.appendChild(drop);

  // Randomize the position and animation duration
  drop.style.left = Math.random() * 100 + "vw"; // Random position across the viewport width
  drop.style.animationDuration = Math.random() * 1 + 0.5 + "s"; // Random duration between 0.5s to 1.5s

  // Remove the drop after the animation ends
  drop.addEventListener("animationend", () => {
    drop.remove();
  });
};

// Create rain drops at intervals
setInterval(() => {
  createRainDrop(document.querySelector(".left"));
  createRainDrop(document.querySelector(".right"));
}, 50); // Adjust frequency of drops
