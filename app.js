// Importando Prompt-Sync
const prompt = require ("prompt-sync")();
// Importando Função CriarPersonagem
const { CriarPersonagem } = require ("./PEbit0/CriarPersonagem");
// Importando Função IniciarJogo
const { IniciarJogo } = require("./PEbit0/IniciarJogo");

// Criar Novo Jogo
console.log("Bem-vind@ ao PEBit, seu universo pernambucano dentro de um console!");

// Pergunta Inicial
const CriarNovoJogo = prompt("Deseja prosseguir? (s/n)");

// Condicional para Criar Novo Jogo
if (CriarNovoJogo == "s") {
    // Início da Criação do Personagem
    console.log("Ótimio! Vamos começar criando o seu personagem.");
    CriarPersonagem();
    console.log("Agora que seu personagem foi criado, vamos iniciar o jogo.");
    IniciarJogo ();
} else if (CriarNovoJogo == "n") {
    console.log("Que pena! Até a próxima.");
} else {
    console.log("Opção inválida. Tente novamente.");
};
