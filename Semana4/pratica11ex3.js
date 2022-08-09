// Funções para imprimir os números positivos, negativos, pares e impares além de fazer a contagem deles.
const numeros = [1, -7, -23, 25, -19, 13, 10, -8, 52, -153, -127];

const positivos = (array) => {
  let positivosOnly = array.filter((element) => element >= 0);
  console.log(
    `O array possui ${positivosOnly.length} números positivos:\n${positivosOnly}`
  );
};

const negativos = (array) => {
  let positivosOnly = array.filter((element) => element < 0);
  console.log(
    `O array possui ${positivosOnly.length} números negativos:\n${positivosOnly}`
  );
};

const pares = (array) => {
  let positivosOnly = array.filter((element) => element % 2 === 0);
  console.log(
    `O array possui ${positivosOnly.length} números pares:\n${positivosOnly}`
  );
};

const impares = (array) => {
  let positivosOnly = array.filter((element) => element % 2 != 0);
  console.log(
    `O array possui ${positivosOnly.length} números impares:\n${positivosOnly}`
  );
};

positivos(numeros);
console.log(`-----------------------------`);
negativos(numeros);
console.log(`-----------------------------`);
pares(numeros);
console.log(`-----------------------------`);
impares(numeros);
