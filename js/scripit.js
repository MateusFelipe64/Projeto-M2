
function getListaUsuarios() {
    return JSON.parse(localStorage.getItem("listaUsuarios")) || [];
}


function salvarListaUsuarios(lista) {
    localStorage.setItem("listaUsuarios", JSON.stringify(lista));
}


if (!localStorage.getItem("listaUsuarios")) {
    salvarListaUsuarios([]);
}

class Usuarios {
    constructor(nome, doença, cpf, email, senha) {
        const listaUsuarios = getListaUsuarios();
        this.id = listaUsuarios.length;
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

    
    const nome = form.nome.value;
    const doença = form.doença.value;
    const cpf = form.cpf.value;
    const email = form.email.value;
    const senha = form.senha.value;

    
    const novoUsuario = new Usuarios(nome, doença, cpf, email, senha);
    const listaUsuarios = getListaUsuarios();
    listaUsuarios.push(novoUsuario);
    salvarListaUsuarios(listaUsuarios);
console.log(listaUsuarios)


   
    mensagem.textContent = 'Usuário cadastrado com sucesso!';
    form.reset();
});