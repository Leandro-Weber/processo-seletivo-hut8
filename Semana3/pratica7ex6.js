const numeros = [1, 8, 6, 13, 7, 9, 15, 22, 356, 4, 3];

const multiplicaArray = function (array, multiplicador) {
  for (let index = 0; index < array.length; index++) {
    array[index] = array[index] * multiplicador;
  }
  return array;
};

console.log(multiplicaArray(numeros, 100));
