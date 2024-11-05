// Caputura dos elementos pelo DOM
const nome_dono = document.getElementById('nameUser');

const info_pet = {
    nome: document.getElementById('namePet'),
    raca: document.getElementById('raca'),
    idade: document.getElementById('idadePet')
};
const botao = document.querySelector('button');
const spans = document.querySelectorAll('.span')


//Cirações dos modelos
class Dono{
    constructor(nomeDono){
        this.nomeDono = nomeDono;
    }

    mostraDono() {
        console.log(this.nomeDono)
    }
}

class Animal extends Dono {
    constructor(nomeDono, nomeAnimal, raca, idadePet) {
        super(nomeDono)
        this.nomeAnimal = nomeAnimal;
        this.raca = raca;
        this.idadePet = idadePet;
    }

    mostrarAnimalConsole() {
        console.log(`O dono é o ${this.nomeDono}, o seu animal é ${this.nomeAnimal}, da raça ${this.raca} e tem ${this.idadePet} anos`)
    }

    exibirAnimal() {
        spans[0].innerHTML = this.nomeDono;
        spans[1].innerHTML = this.nomeAnimal;
        spans[2].innerHTML = this.raca;
        spans[3].innerHTML = this.idadePet;
    }
}

botao.addEventListener('click', ()=>{
    // Instaciando um novo animal
    const animal1 = new Animal(
    nome_dono.value, //Ele vem do input do HTML
    info_pet.nome.value, //Ele vem do input do HTML
    info_pet.raca.value, //Ele vem do input do HTML
    info_pet.idade.value //Ele vem do input do HTML
);
    animal1.mostrarAnimalConsole();
    animal1.exibirAnimal();
});