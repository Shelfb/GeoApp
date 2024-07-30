document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', function() {
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
        animateMenuDots();
    });

    document.addEventListener('click', function(event) {
        if (!menuToggle.contains(event.target) && !menu.contains(event.target)) {
            menu.style.display = 'none';
            resetMenuDots();
        }
    });

    function animateMenuDots() {
        const dots = menuToggle.querySelectorAll('span');
        dots.forEach((dot, index) => {
            dot.style.transform = `translateY(${index * 2}px) rotate(${index * 45}deg)`;
        });
    }

    function resetMenuDots() {
        const dots = menuToggle.querySelectorAll('span');
        dots.forEach(dot => {
            dot.style.transform = 'none';
        });
    }

    // Simulación de redirección a la página de información del restaurante
    const viewMoreButtons = document.querySelectorAll('.view-more');
    viewMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const restaurantName = this.parentElement.querySelector('h3').textContent;
            alert(`Redirigiendo a la página de información de ${restaurantName}`);
        });
    });
});