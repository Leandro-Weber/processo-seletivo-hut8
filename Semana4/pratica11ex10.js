// função para encontrar elemetos em comum entre dois arrays.

const array1 = [1, -7, -23, 22, -19, 13, 10, -8, 52, -153, -127],
  array2 = [-5, -19, 32, 28, 65, -2, -49, -63, 22, 13, 255];

const elementosComum = (array1, array2) => {
  let comuns = [];
  array1.forEach((element) => {
    if (array2.includes(element)) comuns.push(element);
  });
  return comuns;
};
console.log(elementosComum(array1, array2));
