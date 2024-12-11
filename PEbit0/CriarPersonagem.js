const { IniciarJogo } = require('./IniciarJogo');

// Require prompt sync
const prompt = require('prompt-sync')();

//Importando IniciarJogo

// Criando funcao para criar personagem
function CriarPersonagem (){

    // Objeto que irá armazenar as informações do personagem
    const personagem = {
        nome: [],
        genero: [],
        idade: [],
        escolaridade: []
    }

    // Criação do personagem
    const nome = prompt("Qual o nome do seu personagem?");
    const genero = prompt("Qual o gênero do seu personagem?");
    const idade = prompt("Qual a idade do seu personagem?");
    const escolaridade = prompt("Qual a escolaridade do seu personagem?");

    // Adicionando o personagem ao objeto
    personagem.nome.push(nome);
    personagem.genero.push(genero);
    personagem.idade.push(idade);
    personagem.escolaridade.push(escolaridade);

    console.log("Parabéns! Seu personagem foi criado com sucesso. Agora, vamos iniciar o jogo.");
}

// Exportando a função CriarPersonagem
module.exports = { CriarPersonagem };