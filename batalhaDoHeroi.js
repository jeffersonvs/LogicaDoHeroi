// Variáveis para armazenar a identidade do heroi
let nomeHeroi = prompt("Digite o nome do herói:");
let idadeHeroi = prompt("Digite a idade do herói:");
let classelHeroi = parseInt(prompt("Digite a quantidade de XP do herói:\n1 - para Mago\n2 - para Gerreiro\n3 - para Monge\n4 - para Ninja"));
let classe = "";
let ataque = "";

//Atribuindo a classe e o tipo de ataque
switch (classelHeroi) {
    case 1:
        classe = "Mago";
        ataque = "magia"
        break;
    case 2:
        classe = "Guerreiro"
        ataque = "espada"
        break;
    case 3:
        classe = "Monge";
        ataque = "artes marciais"
        break;
    case 4:
        classe = "Ninja";
        ataque = "shuriken"
        break;
    default:
        console.log("Numero digitado invalido!")
}
// Exibindo a mensagem final com classe e tipo de ataque
console.log(`o ${classe} atacou usando ${ataque}`);

