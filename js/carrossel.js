document.addEventListener('DOMContentLoaded', () => {
    const carrosseis = document.querySelectorAll('.carrossel'); // Seleciona todos os carrosséis
    const scrollAmount = 300; // Quantidade de pixels para rolar

    carrosseis.forEach(carrossel => {
        const nextBtn = carrossel.parentElement.querySelector('#nextBtn'); // Botão "Avançar" no mesmo artigo
        const prevBtn = carrossel.parentElement.querySelector('#prevBtn'); // Botão "Voltar" no mesmo artigo

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                carrossel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                carrossel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            });
        }
    });
});