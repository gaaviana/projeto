document.addEventListener('DOMContentLoaded', () => {
    const carrossel = document.getElementById('carrossel');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');

    const scrollAmount = 300; // Quantidade de pixels para rolar

    nextBtn.addEventListener('click', () => {
        carrossel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });

    prevBtn.addEventListener('click', () => {
        carrossel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
});