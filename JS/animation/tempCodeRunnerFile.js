function animateJSBox1() {
  const box = document.getElementById("jsBox1");
  let position = 0;
  const targetPosition = 200;

  const interval = setInterval(() => {
    position += 10;
    box.style.transform = `translateX(${position}px)`;

    if (position >= targetPosition) {
      clearInterval(interval);
      // Reset position
      setTimeout(() => {
        box.style.transform = "translateX(0)";
      }, 500);
    }
  }, 50);

}
