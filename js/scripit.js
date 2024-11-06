if (!localStorage.getItem("listaUsuarios")) {
    localStorage.setItem("listaUsuarios", JSON.stringify([]));
}

class Usuarios {
    constructor(nome, doença, cpf, email, senha) {
        this.id = JSON.parse(localStorage.getItem("listaUsuarios")).length;
        this.nome = nome;
        this.doença = doença;
        this.cpf = cpf;
        this.email = email;
        this.senha = senha;
    }
}

const form = document.getElementById('cadastroForm');
const mensagem = document.getElementById('mensagem');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const doença = document.getElementById('doença').value;
    const cpf = document.getElementById('cpf').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    if (nome === '' || doença === '' || email === '' || senha === '' || cpf === '') {
        mensagem.textContent = 'Por favor, preencha todos os campos.';
        mensagem.style.color = 'red';
        return;
    }

    const novoUsuario = new Usuarios(nome, doença, cpf, email, senha);
    const listaUsuario = JSON.parse(localStorage.getItem("listaUsuarios"));
    listaUsuario.push(novoUsuario);

    localStorage.setItem("listaUsuarios", JSON.stringify(listaUsuario));

    mensagem.textContent = 'Cadastro realizado com sucesso!';
    mensagem.style.color = 'green';
    form.reset();
});