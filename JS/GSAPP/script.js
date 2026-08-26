let tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#page1",
    start: "top top",
    end: "+=1200",
    scrub: 2,
    pin: true,
    markers: true
  }
});

tl.to(".card1", { top: "15%", ease: "power1.out" })
  .to(".card2", { top: "20%", ease: "power1.out" })
  .to(".card3", { top: "25%", ease: "power1.out" })
  .to(".card4", { top: "30%", ease: "power1.out" });

let h1=document.querySelector(".abhishek");
let clutter="";
h1.textContent.split("").forEach(char=>{
  clutter += `<span>${char}</span>`;
});

h1.innerHTML=clutter;

// gsap.from(".abhishek")