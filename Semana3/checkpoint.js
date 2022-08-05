// Parte 1
// Exercício 1
console.log("Parte 1");
console.log("Exercício 1");

const media = (a, b) => {
  return (a + b) / 2;
};
console.log(media(5, 8));

console.log(`--------------------------------`);
// Parte 2
// Exercício 2
console.log("Parte 2");
console.log(`Exercício 1`);

const soma = (a, b) => a + b;

const subtrai = (a, b) => a - b;

const multiplica = (a, b) => a * b;

const divide = (a, b) => a / b;

const operacoes = {
  soma: soma,
  subtrai: subtrai,
  multiplica: multiplica,
  divide: divide,
};
console.log(operacoes["multiplica"](3, 2));

// Exercício 2
console.log(`\nExercício 2`);

const usuario = { name: "Juca", idade: 28 };

const ehMaior = ({ idade }) =>
  idade >= 18
    ? console.log("É maior de idade")
    : console.log("Não é maior de idade.");

ehMaior(usuario);
