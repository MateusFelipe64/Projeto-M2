
function getListaUsuarios() {
    return JSON.parse(localStorage.getItem("listaUsuarios")) || [];
}


function salvarListaUsuarios(lista) {
    localStorage.setItem("listaUsuarios", JSON.stringify(lista));
}


function exibirUsuarios() {
    const tabela = document.getElementById("tabelaUsuarios").getElementsByTagName("tbody")[0];
    tabela.innerHTML = ""; 

    const listaUsuarios = getListaUsuarios();
    listaUsuarios.forEach((usuario, index) => {
        const row = tabela.insertRow();

        row.innerHTML = `
            <td>${usuario.nome}</td>
            <td>${usuario.doença}</td>
            <td>${usuario.cpf}</td>
            <td>${usuario.email}</td>
            <td>
                <button onclick="editarUsuario(${index})">Editar</button>
                <button onclick="excluirUsuario(${index})">Excluir</button>
            </td>
        `;
    });
}


function editarUsuario(index) {
    const listaUsuarios = getListaUsuarios();
    const usuario = listaUsuarios[index];

    const nome = prompt("Editar Nome:", usuario.nome);
    const doença = prompt("Editar Doença:", usuario.doença);
    const cpf = prompt("Editar CPF:", usuario.cpf);
    const email = prompt("Editar Email:", usuario.email);

    if (nome && doença && cpf && email) {
        listaUsuarios[index] = { ...usuario, nome, doença, cpf, email };
        salvarListaUsuarios(listaUsuarios);
        exibirUsuarios();
    }
}


function excluirUsuario(index) {
    const listaUsuarios = getListaUsuarios();
    listaUsuarios.splice(index, 1);
    salvarListaUsuarios(listaUsuarios);
    exibirUsuarios();
}

window.onload = exibirUsuarios;

