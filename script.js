// script.js

// Função para alternar o menu de navegação em dispositivos móveis
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelectorAll('nav ul li a');

    // Fechar o menu quando um link é clicado
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (menuToggle.checked) {
                menuToggle.checked = false;
            }
        });
    });
});

// Função para adicionar efeito de hover na logo
document.addEventListener('DOMContentLoaded', function () {
    const logo = document.querySelector('.logo');

    logo.addEventListener('mouseover', function () {
        logo.style.color = '#ffab40'; // Pastel laranja médio
    });

    logo.addEventListener('mouseout', function () {
        logo.style.color = '#333'; // Cor original
    });
});