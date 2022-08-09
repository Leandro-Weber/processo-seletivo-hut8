// substituir os elementos pares do array por "X"

const array = [1, -7, -23, 22, -19, 13, 10, -8, 52, -153, -127];

const substituiPares = (array) => {
  array.forEach((element, index) => {
    if (element % 2 === 0) {
      array[index] = "X";
    }
  });
};
substituiPares(array);
console.log(array);
