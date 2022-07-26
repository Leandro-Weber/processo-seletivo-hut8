// Exercício 1

let numero = 10;
if (numero >= 0) {
  console.log(`O número ${numero} é positivo.`);
} else {
  console.log(`O número ${numero} é negativo.`);
}

// Exercício 2
console.log(`--------------------------------\n`);

let x = -10,
  y = 5;
if (x >= 0 || y >= 0) {
  console.log(`Ao menos um dos números é positivo.`);
} else {
  console.log(`Nenhum dos números é positivo`);
}

// Exercício 3
console.log(`--------------------------------\n`);

let opcao = 4;
let preco = 10;

switch (opcao) {
  case 1:
    console.log(`Valor à ser pago: ${preco * 0.9}`);
    break;

  case 2:
    console.log(`Valor à ser pago: ${preco * 0.85}`);
    break;

  case 3:
    console.log(`Valor à ser pago: ${preco}`);
    break;

  case 4:
    console.log(`Valor à ser pago: ${preco * 1.1}`);
    break;

  default:
    console.log("Opção inválida.");
    break;
}
