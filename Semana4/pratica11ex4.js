// Função para calcular a média das notas de um array.
const notas = [6, 8, 7];

const media = (array) => {
  let soma = 0;
  array.forEach((element) => (soma += element));
  return soma / array.length;
};
console.log(`A média das notas ${notas} é: ${media(notas)}`);
