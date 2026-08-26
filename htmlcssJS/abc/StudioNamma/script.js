const locations = [
    {
        city: "HONG KONG, CHINA",
        timezone: "Asia/Hong_Kong"
    },
    {
        city: "MUMBAI, INDIA",
        timezone: "Asia/Kolkata"
    },
    {
        city: "LONDON, UK",
        timezone: "Europe/London"
    },
    {
        city: "NEW YORK, USA",
        timezone: "America/New_York"
    },
    {
        city: "TOKYO, JAPAN",
        timezone: "Asia/Tokyo"
    }
];

let currentIndex = 0;

const locationEl = document.getElementById("location");
const timeEl = document.getElementById("time");

function updateClock() {
    const current = locations[currentIndex];

    timeEl.textContent = new Date().toLocaleTimeString("en-GB", {
        hour12: false,
        timeZone: current.timezone
    });
}

function changeLocation() {
    currentIndex = (currentIndex + 1) % locations.length;

    // Restart animation
    locationEl.classList.remove("slide-up");
    void locationEl.offsetWidth;

    // Change text
    locationEl.textContent = locations[currentIndex].city;

    // Play animation
    locationEl.classList.add("slide-up");
}

// Initial values
locationEl.textContent = locations[0].city;
updateClock();

// Update time every second
setInterval(updateClock, 1000);

// Change city every 5 seconds
setInterval(changeLocation, 5000);


//Cursor animation
const hero = document.querySelector('.hero');
const cursorVideo = document.querySelector('.cursor-video');

const cursorGap = 14;

let mouseX = 0;
let mouseY = 0;

let currentX = 0;
let currentY = 0;

let lastX = 0;

hero.addEventListener('mouseenter', () => {
    cursorVideo.classList.add('is-visible');
});

hero.addEventListener('mouseleave', () => {
    cursorVideo.classList.remove('is-visible');
});

hero.addEventListener('mousemove', (event) => {
    mouseX = event.clientX + cursorGap;
    mouseY = event.clientY + cursorGap;
});

function animateCursor() {

    // Smooth follow
    currentX += (mouseX - currentX) * 0.08;
    currentY += (mouseY - currentY) * 0.08;

    const dx = currentX - lastX;

    // Your original effect
    const tilt = Math.max(-15, Math.min(15, dx * 0.4));
    const stretch = Math.max(0.7, 1 - Math.abs(dx) * 0.01);

    cursorVideo.style.left = `${currentX}px`;
    cursorVideo.style.top = `${currentY}px`;

    cursorVideo.style.transform =
        `scaleX(${dx < 0 ? -stretch : stretch}) rotate(${tilt}deg)`;

    lastX = currentX;

    requestAnimationFrame(animateCursor);
}

animateCursor();

//page3 animation
const gallery = document.querySelector(".hover-gallery");
const images = document.querySelectorAll(".hover-gallery img");
const hoverWords = document.querySelectorAll(".hover-word");

let currentImage = 0;
let interval;

hoverWords.forEach(word => {

    word.addEventListener("mouseenter", () => {

        gallery.style.display = "block";

        currentImage = 0;

        images.forEach(img => img.classList.remove("active"));
        images[0].classList.add("active");

        interval = setInterval(() => {

            images[currentImage].classList.remove("active");

            currentImage = (currentImage + 1) % images.length;

            images[currentImage].classList.add("active");

        }, 500);

    });

    word.addEventListener("mouseleave", () => {

        gallery.style.display = "none";

        clearInterval(interval);

    });

});

document.addEventListener("mousemove", e => {

    gallery.style.left = e.clientX + 40 + "px";
    gallery.style.top = e.clientY - 200 + "px";

});