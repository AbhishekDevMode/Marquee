const locomotiveScroll = new LocomotiveScroll();
let lastscroll = 0;

window.addEventListener("scroll", () => {
  let currentScroll = window.pageYOffset;

  if (currentScroll > 300) {
    if (currentScroll > lastscroll) {
      gsap.to("header", { y: -100 });
    } else {
      gsap.to("header", { y: 0 });
    }
  } else {
    gsap.to("header", { y: 0 });
  }
  lastscroll = currentScroll;
});

const line1Words = document.querySelectorAll("#line1 .word");
const line2Words = document.querySelectorAll("#line2 .word");
const allWords = [...line1Words, ...line2Words];

// Set initial state
gsap.set(allWords, {
  opacity: 0,
  x: -40
});
const tl = gsap.timeline({
  ScrollTrigger: {
    trigger: ".about",
    start: "top top",
    end: "+=800",
    scrub: 2,
    pin: true,
    markers: false
  }
});

tl.to(".about svg", {
  scale: 0.6,
  filter: "blur(30px)",
  duration: 1
});

const textTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".about",
    start: "top 20%",
    end: "top 5%",
    scrub: 1.5,
    markers: false
  }
});

textTl
  .to(line1Words, {
    opacity: 1,
    x: 0,
    duration: 0.5,
    stagger: 0.1,
    ease: "power2.out"
  })
  .to(
    line2Words,
    {
      opacity: 1,
      x: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.out"
    },
    "-=0.2"
  );
let progress = gsap.timeline({
  scrollTrigger: {
    trigger: ".vision",
    start: "top top",
    end: "+=2000",
    scrub: 2,
    pin: true
  }
});

progress
  .to(
    ".progress-bar-line img",
    {
      top: "100%",
      duration: 4
    },
    "harsh"
  )

  .to(
    ".progress-fill",
    {
      height: "100%",
      duration: 4
    },
    "harsh"
  )

  .to(
    ".vtc1",
    {
      opacity: 0
    },
    0.4
  )

  .to(
    ".vtc2",
    {
      y: -50,
      opacity: 1
    },
    0.4
  )

  .to(
    ".image-scroll-div",
    {
      y: "-80vh",
      duration: 0.5,
      ease: "none"
    },
    0.4
  )

  .to(
    ".vtc2",
    {
      opacity: 0
    },
    1.4
  )

  .to(
    ".vtc3",
    {
      y: -50,
      opacity: 1
    },
    1.4
  )
  .to(
    ".image-scroll-div",
    {
      y: "-160vh",
      duration: 0.5,
      ease: "none"
    },
    1.4
  )

  .to(
    ".vtc3",
    {
      opacity: 0
    },
    2.4
  )

  .to(
    ".vtc4",
    {
      y: -50,
      opacity: 1
    },
    2.4
  )

  .to(
    ".image-scroll-div",
    {
      y: "-240vh",
      duration: 0.5,
      ease: "none"
    },
    2.4
  );

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const frameCount = 85;

const imageSeq = {
  frame: 0
};

const currentFrame = (index) =>
  `./images/ezgif-frame-${String(index + 1).padStart(3, "0")}.jpg`;

const images = [];

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = currentFrame(i);
  images.push(img);
}

images.forEach((img, i) => {
  img.onload = () => {
    console.log("Loaded:", i);
    if (i == 0) render();
  };
  img.onerror = () => {
    console.log("Error:", i, img.src);
  };
});

function render(){
  if (!images[imageSeq].frame) return;

  context.clearRect(0, 0, canvas.width, canvas.height);

  context.drawImage(images[imageSeq.frame], 0, 0, canvas.width, canvas.height);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: "none",
  onUpdate: render,
  scrollTrigger: {
    trigger: ".canvas-section",
    start: "top top",
    end: "+=2000",
    scrub: 1,
    pin: true,
    markers: true
  }
});
