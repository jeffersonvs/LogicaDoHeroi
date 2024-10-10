//função para avaliar o nivel do heroi
function avaliacaoDoHeroi(saldoVitorias) {
    let nivelHeroi
    if (saldoVitorias <= 10) {
        nivelHeroi = "Ferro";
      } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        nivelHeroi = "Bronze";
      } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        nivelHeroi = "Prata";
      } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        nivelHeroi = "Ouro";
      } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        nivelHeroi = "Diamante";
      } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        nivelHeroi = "Lendario";
      } else if (saldoVitorias >= 101) {
        nivelHeroi = "Imortal";
    }
    return nivelHeroi
}

// Variáveis para armazenar a quantidade de vitorias e derrotas do herói
let vitoriaHeroi = parseInt(prompt("Digite a quantidade de vitórias do herói:"));
let derrotaHeroi = parseInt(prompt("Digite a quantidade de derrotas do herói:"));
saldoVitorias = vitoriaHeroi - derrotaHeroi;
let nivel = avaliacaoDoHeroi(saldoVitorias);
// Exibindo a mensagem final com o nome e o nível do herói
console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);

