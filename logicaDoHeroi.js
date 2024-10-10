// Variáveis para armazenar o nome e a quantidade de experiência do herói
let nomeHeroi = prompt("Digite o nome do herói:");
let saldoVitorias = parseInt(prompt("Digite a quantidade de XP do herói:"));
let nivelHeroi = ""; // Variável para armazenar o nível do herói

// Estrutura de decisão para determinar o nível do herói com base no XP
if (saldoVitorias <= 1000) {
  nivelHeroi = "Ferro";
} else if (saldoVitorias >= 1001 && saldoVitorias <= 2000) {
  nivelHeroi = "Bronze";
} else if (saldoVitorias >= 2001 && saldoVitorias <= 5000) {
  nivelHeroi = "Prata";
} else if (saldoVitorias >= 5001 && saldoVitorias <= 7000) {
  nivelHeroi = "Ouro";
} else if (saldoVitorias >= 7001 && saldoVitorias <= 8000) {
  nivelHeroi = "Platina";
} else if (saldoVitorias >= 8001 && saldoVitorias <= 9000) {
  nivelHeroi = "Ascendente";
} else if (saldoVitorias >= 9001 && saldoVitorias <= 10000) {
  nivelHeroi = "Imortal";
} else if (saldoVitorias >= 10001) {
  nivelHeroi = "Radiante";
}

// Exibindo a mensagem final com o nome e o nível do herói
console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivelHeroi}.`);

