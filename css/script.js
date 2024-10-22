window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var homeSection = document.getElementById('home');
    var meSection = document.getElementById('me');
    var workSection = document.getElementById('work');
    var contactSection = document.getElementById('contact');

    var scrollPosition = window.scrollY;

    console.log(scrollPosition); // Para verificar a posição do scroll

    if (scrollPosition >= contactSection.offsetTop) {
        header.style.backgroundColor = "#f0f0f0"; // Cor da seção de contato
    } else if (scrollPosition >= workSection.offsetTop) {
        header.style.backgroundColor = "#e0e0e0"; // Cor da seção de trabalho
    } else if (scrollPosition >= meSection.offsetTop) {
        header.style.backgroundColor = "#d0d0d0"; // Cor da seção sobre mim
    } else {
        header.style.backgroundColor = "white"; // Cor da seção inicial
    }
});
