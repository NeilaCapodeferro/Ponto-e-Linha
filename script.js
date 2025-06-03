// Pega todos os botões das abas
const tabButtons = document.querySelectorAll('.tab-button');
// Pega todas as seções que são conteúdo das abas
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const target = button.getAttribute('data-target');

        // Remove 'active' de todos os botões e seções
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(section => section.classList.remove('active'));

        // Adiciona 'active' no botão clicado e na seção correspondente
        button.classList.add('active');
        document.getElementById(target).classList.add('active');
    });
});
