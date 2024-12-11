//Importando prompt-sync
const prompt = require("prompt-sync")();

function ProximaFase(){
    console.log("Você abre o livro e encontra sua primeira missao resolver um quiz matematico simples.");
    const resposta = prompt("Qual é a resposta para 2 + 2?");
    if (resposta == 4){
        console.log("Parabéns! Você acertou a resposta e avançou para a próxima fase.");
    } else {
        console.log("Resposta incorreta. Tente novamente.");
    };
    const resposta2 = prompt("Qual é a resposta para 3 * 3?");
    if (resposta2 == 9){
        console.log("Parabéns! Você acertou a resposta e avançou para a próxima fase.");
    } else {
        console.log("Resposta incorreta. Tente novamente.");
    };
    const resposta3 = prompt("Qual é a resposta para 5 - 2?");
    if (resposta3 == 3){
        console.log("Parabéns! Você acertou a resposta e avançou para a próxima fase.");
    } else {
        console.log("Resposta incorreta. Tente novamente.");
    };
    console.log("Parabéns! Você concluiu o quiz e avançou para a próxima fase.");
};

module.exports = { ProximaFase };