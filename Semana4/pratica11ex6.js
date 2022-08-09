// Multiplicar todos os valores de um array por outro número.
const numeros = [1, 8, 6, 13, 7, 9, 15, 22, 356, 4, 3];

const multiplicaPor = (array, multiplicador) => {
  array.forEach((element, index) => (array[index] = element * multiplicador));
};
// multiplicaPor(numeros, 2);
// console.log(numeros);

// Outra opção de resolução sem alterar o array original
const multiplicaDnv = (array, multiplicador) => {
  return array.map((element) => element * multiplicador);
};
console.log(multiplicaDnv(numeros, 2));
