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