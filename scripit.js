// Seleciona o formulário e o campo de mensagem
const form = document.getElementById('cadastroForm');
const mensagem = document.getElementById('mensagem');

// Adiciona um ouvinte de evento para o formulário
form.addEventListener('submit', function(event) {
    event.preventDefault();  // Evita o envio do formulário e o recarregamento da página

    // Captura os valores dos campos
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    // Validações básicas
    if (nome === '' || email === '' || senha === '') {
        mensagem.textContent = 'Por favor, preencha todos os campos.';
        mensagem.style.color = 'red';
        return;
    }

    // Exibe uma mensagem de sucesso
    mensagem.textContent = 'Cadastro realizado com sucesso!';
    // mensagem.style.color = 'green';
    // Limpa os campos do formulário
    form.reset();
});