const botaoMenu = document.querySelector(".menu-hamburguer");
const listaLinks = document.querySelector(".menu");

botaoMenu.addEventListener("click", function(){
    //Anulando o comportamento padrão de recarregar a pagina através de links
    // event.preventDefault();
    listaLinks.classList.toggle("aberto")

    if (listaLinks.classList.contains("aberto")) {
        botaoMenu.classList.add("fechar");
        botaoMenu.classList.remove("aberto")
    } else {
        botaoMenu.classList.add("aberto");
        botaoMenu.classList.remove("fechar")
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const campeonatosLink = document.querySelector('.links-menu li a[href="campeonatos.html"]');
    const subMenu = document.querySelector('.links-menu .sub-menu');

    campeonatosLink.addEventListener('click', function(event) {
        event.preventDefault(); // Impede o link de navegar
        subMenu.classList.toggle('aberto'); // Alterna a classe 'active' para mostrar/esconder o submenu
    });
});