// Importando Prompt-Sync
const prompt = require ("prompt-sync")();

//Importando Pegar Livro
const { PegarLivro } = require ("./PegarLivro");

function IniciarJogo (){

    console.log("Olá! Seja bem-vind@ ao Console.Zero, o coração pulsante de Tecnocife. Sou a IA.Lúcia, mas pode me chamar de Lu. Hoje, serei sua guia nesta jornada.");
    // Pergunta Inicial
    const prosseguir = prompt("Deseja prosseguir? (s/n)");

    // Condicional para Criar Novo Jogo
    if (prosseguir === "s") {
    // Encontrar Livro
    console.log("Ótimo! Vamos começar encontrando o livro de códigos.");
    console.log("Você está no Console.Zero um lugar vibrante no centro de Tecnocife. Você olha ao redor e ve um livro em cima de um letreiro com o nome Tecnocife."); 
    PegarLivro();
    }else if (prosseguir === "n") {
    console.log("Que pena! Até a próxima.");
    } else {
    console.log("Opção inválida. Tente novamente.");
    };
}

// Exportando a função IniciarJogo
module.exports = { IniciarJogo };