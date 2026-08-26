    const menuTrigger = document.getElementById('menu-trigger');
    const closeTrigger = document.getElementById('close-trigger');
    const menuOverlay = document.getElementById('fullScreenMenu');

    // Open Menu
    menuTrigger.addEventListener('click', (e) => {
        e.preventDefault(); // Prevents the page from jumping
        menuOverlay.classList.add('is-active');
    });

    // Close Menu
    closeTrigger.addEventListener('click', () => {
        menuOverlay.classList.remove('is-active');
    });