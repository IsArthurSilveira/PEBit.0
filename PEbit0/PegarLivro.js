// Importar Prompt-Sync
const prompt = require ("prompt-sync")();

// Importar Próxima Fase
const { ProximaFase } = require ("./ProximaFase");

// Criando a função PegarLivro
function PegarLivro (){
    // Pergunta Inicial
    const pegarLivro = prompt("O que você faz? (1) Pega o livro e abre (2) Deixa o livro e vai embora");
    // Condicional para Pegar Livro
    if (pegarLivro === "1") {
        ProximaFase();
    } else if (pegarLivro === "2") {
        console.log("Você deixa o livro e vai embora. Até a próxima.");
    } else {
        console.log("Opção inválida. Tente novamente.");
    };
};

// Exportando a função PegarLivro
module.exports = { PegarLivro };