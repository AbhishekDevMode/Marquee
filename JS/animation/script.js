// ===== GLOBAL ANIMATION VARIABLES =====
let animationFrameId = null;
let isAnimating = false;

// ===== 1. SECTION 3: JAVASCRIPT ANIMATIONS =====

// Move animation using setInterval
function animateJSBox1() {
  // Step 1: Get the element to animate
  const box = document.getElementById("jsBox1");

  // Step 2: Initialize animation variables
  let position = 0; // Starting position in pixels
  const targetPosition = 200; // End position (200px to the right)

  // Step 3: Animate using setInterval
  const interval = setInterval(() => {
    position += 10; // Move 10px per frame
    box.style.transform = `translateX(${position}px)`; // Apply transformation

    // Step 4: Check if animation is complete
    if (position >= targetPosition) {
      clearInterval(interval); // Stop the animation loop
      // Step 5: Reset position after a delay
      setTimeout(() => {
        box.style.transform = "translateX(0)"; // Return to start
      }, 500); // Wait 500ms before resetting
    }
  }, 50); // Execute every 50 milliseconds
}

// 🔧 Built-in Functions Used

// Function	Purpose
// document.getElementById()	Gets an HTML element by its ID attribute
// setInterval()	Executes code repeatedly every N milliseconds
// clearInterval()	Stops a setInterval() loop
// setTimeout()	Executes code once after a delay (in milliseconds)

// Step-by-Step Execution

// Get element: Selects the box with ID jsBox1
// Start loop: setInterval() runs every 50ms (20 frames/second)
// Move right: Each iteration adds 10px to the position
// Apply transform: translateX() moves the box horizontally
// Check completion: When position reaches 200px, stop the loop
// Reset: After 500ms (0.5 seconds), return box to original position

//timeline visualization
// Time    Position    Box Movement
// 0ms     0px         [█] ← Starting position
// 50ms    10px        ░[█]
// 100ms   20px        ░░[█]
// 150ms   30px        ░░░[█]
// ...continues...
// 1000ms  200px       ░░░░░░░░░░[█] ← Target reached
// 1500ms  0px         [█] ← Reset after delay
// Bounce animation using CSS class and JavaScript
// Interval: 50ms per update
// Movement per update: 10px
// Total distance: 200px
// Total time: (200px ÷ 10px) × 50ms = 1 second to move + 500ms reset delay = 1.5 seconds total

// Key Learning: This is a imperative animation approach using time-based loops. For smoother 60fps animations, 
// requestAnimationFrame() is preferred over setInterval().

function animateBounce() {
  const box = document.getElementById("jsBox2");
  box.style.animation = "none";

  // Trigger reflow to restart animation
  void box.offsetWidth;
  box.style.animation = "bounce 0.6s ease-in-out 3";
}

// Pulse animation
function animatePulse() {
  const box = document.getElementById("jsBox3");
  box.style.animation = "none";

  // Trigger reflow
  void box.offsetWidth;

  box.style.animation = "pulse 0.8s ease-in-out 3";
}

// ===== 2. SECTION 4: REQUESTANIMATIONFRAME (RAF) =====

// Smooth RAF animation
function startRAFAnimation() {
  const box = document.getElementById("rafBox");
  let position = 0;
  const targetPosition = 200;
  isAnimating = true;

  function animate() {
    if (!isAnimating) return;

    position += 5;
    box.style.transform = `translateX(${position}px)`;

    if (position < targetPosition) {
      animationFrameId = requestAnimationFrame(animate);
    } else {
      // Return to original position
      position = 0;
      box.style.transform = "translateX(0)";
    }
  }

  animate();
}

// Circle motion animation
function startCircleMotion() {
  const box = document.getElementById("rafBox2");
  let angle = 0;
  const radius = 60;
  isAnimating = true;

  function animateCircle() {
    if (!isAnimating) return;

    angle += 5;
    const x = Math.cos((angle * Math.PI) / 180) * radius;
    const y = Math.sin((angle * Math.PI) / 180) * radius;

    box.style.transform = `translate(${x}px, ${y}px)`;

    if (angle < 360) {
      animationFrameId = requestAnimationFrame(animateCircle);
    } else {
      box.style.transform = "translate(0, 0)";
    }
  }

  animateCircle();
}

// Stop all animations
function stopAllAnimations() {
  isAnimating = false;
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }

  // Reset all boxes
  document.getElementById("rafBox").style.transform = "translate(0, 0)";
  document.getElementById("rafBox2").style.transform = "translate(0, 0)";
}

// ===== 3. SECTION 5: COMPLEX ANIMATIONS =====

// Morphing animation
function startMorphing() {
  const morphBox = document.getElementById("morphBox");
  let morphState = 0;
  isAnimating = true;

  function morph() {
    if (!isAnimating) return;

    morphState += 2;

    // Cycle through different shapes
    if (morphState < 90) {
      // Square to circle
      const borderRadius = (morphState / 90) * 50;
      morphBox.style.borderRadius = borderRadius + "%";
    } else if (morphState < 180) {
      // Circle to rectangle
      const progress = (morphState - 90) / 90;
      const borderRadius = 50 - progress * 50;
      morphBox.style.borderRadius = borderRadius + "%";
    } else {
      morphState = 0;
    }

    animationFrameId = requestAnimationFrame(morph);
  }

  morph();
}

// Particle system animation
function createParticles() {
  const container = document.getElementById("particleContainer");
  container.innerHTML = ""; // Clear previous particles
  isAnimating = true;

  // Create 15 particles
  for (let i = 0; i < 15; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    container.appendChild(particle);

    animateParticle(particle, i);
  }
}

function animateParticle(particle, index) {
  let x = 75; // Center
  let y = 75; // Center
  let vx = (Math.random() - 0.5) * 4; // Velocity X
  let vy = (Math.random() - 0.5) * 4; // Velocity Y
  let life = 1;

  function particleAnimate() {
    if (!isAnimating) return;

    // Update position
    x += vx;
    y += vy;

    // Add gravity
    vy += 0.1;

    // Fade out
    life -= 0.02;

    particle.style.left = x + "px";
    particle.style.top = y + "px";
    particle.style.opacity = life;

    // Check bounds
    if (x > 0 && x < 150 && y > 0 && y < 150 && life > 0) {
      requestAnimationFrame(particleAnimate);
    } else {
      particle.remove();
    }
  }

  particleAnimate();
}

// ===== 4. ADVANCED EASING FUNCTIONS =====

// Linear
function easeLinear(t) {
  return t;
}

// Ease In (Quadratic)
function easeInQuad(t) {
  return t * t;
}

// Ease Out (Quadratic)
function easeOutQuad(t) {
  return 1 - (1 - t) * (1 - t);
}

// Ease In Out (Quadratic)
function easeInOutQuad(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

// Ease In Cubic
function easeInCubic(t) {
  return t * t * t;
}

// Ease Out Cubic
function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

// ===== 5. ANIMATION WITH EASING =====

function animateWithEasing(
  element,
  startValue,
  endValue,
  duration,
  easingFunction,
) {
  const startTime = Date.now();

  function animate() {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easingFunction(progress);

    const value = startValue + (endValue - startValue) * easedProgress;
    element.style.left = value + "px";

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  }

  animate();
}

// ===== 6. ANIMATION UTILITY CLASS =====

class Animator {
  constructor(element) {
    this.element = element;
    this.frameId = null;
  }

  // Move element
  moveTo(x, y, duration, easing = easeInOutQuad) {
    const startX = 0;
    const startY = 0;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const t = easing(progress);

      const currentX = startX + (x - startX) * t;
      const currentY = startY + (y - startY) * t;

      this.element.style.transform = `translate(${currentX}px, ${currentY}px)`;

      if (progress < 1) {
        this.frameId = requestAnimationFrame(animate);
      }
    };

    animate();
  }

  // Rotate element
  rotateTo(degrees, duration, easing = easeInOutQuad) {
    const startDeg = 0;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const t = easing(progress);

      const currentDeg = startDeg + (degrees - startDeg) * t;
      this.element.style.transform = `rotate(${currentDeg}deg)`;

      if (progress < 1) {
        this.frameId = requestAnimationFrame(animate);
      }
    };

    animate();
  }

  // Scale element
  scaleTo(scale, duration, easing = easeInOutQuad) {
    const startScale = 1;

    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const t = easing(progress);

      const currentScale = startScale + (scale - startScale) * t;
      this.element.style.transform = `scale(${currentScale})`;

      if (progress < 1) {
        this.frameId = requestAnimationFrame(animate);
      }
    };

    animate();
  }

  // Stop animation
  stop() {
    if (this.frameId) {
      cancelAnimationFrame(this.frameId);
    }
  }
}

// ===== 7. HELPER FUNCTIONS =====

// Get element's current position
function getPosition(element) {
  const rect = element.getBoundingClientRect();
  return {
    x: rect.left,
    y: rect.top,
    width: rect.width,
    height: rect.height,
  };
}

// Check if animation is running
function isRunning() {
  return isAnimating;
}

// Reset all animations
function resetAll() {
  stopAllAnimations();
  document.querySelectorAll(".box").forEach((box) => {
    box.style.transform = "";
    box.style.animation = "";
  });
}

// ===== CONSOLE HELPER FUNCTIONS =====

console.log(`
╔════════════════════════════════════════════════════════╗
║    Animation Learning Guide - Console Functions       ║
╚════════════════════════════════════════════════════════╝

📚 Available Functions:
  - animateJSBox1()        : Move animation
  - animateBounce()        : Bounce effect
  - animatePulse()         : Pulse effect
  - startRAFAnimation()    : Smooth linear animation
  - startCircleMotion()    : Circular motion
  - stopAllAnimations()    : Stop current animations
  - startMorphing()        : Shape morphing
  - createParticles()      : Particle system
  - resetAll()             : Reset everything

📊 Easing Functions (use with animation):
  - easeLinear()
  - easeInQuad()
  - easeOutQuad()
  - easeInOutQuad()
  - easeInCubic()
  - easeOutCubic()

🎨 Animator Class:
  const animator = new Animator(element);
  animator.moveTo(100, 100, 1000);
  animator.rotateTo(360, 2000);
  animator.scaleTo(1.5, 1000);

Try: animateJSBox1() or animateBounce()
`);
