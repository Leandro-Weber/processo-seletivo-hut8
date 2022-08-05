const notas = [100, 50, 20, 10, 5, 2, 1];
const valor = 576;

const cedulas = function (notas, valor) {
  let retorno = [];
  for (let index = 0; index < notas.length; index++) {
    retorno[index] = Math.floor(valor / notas[index]);
    valor = valor % notas[index];
  }
  return retorno;
};

const apresentarNotas = function (notas, valor, funcao) {
  const resultado = funcao(notas, valor);
  console.log(`R$${valor} equivalem à:`);
  for (let index = 0; index < resultado.length; index++) {
    console.log(`${resultado[index]} nota(s) de R$${notas[index]}`);
  }
};

apresentarNotas(notas, valor, cedulas);
