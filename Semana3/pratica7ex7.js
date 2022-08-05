const notas = [6, 8, 7];

const mediaNotas = function (notas) {
  let temp = 0;
  for (let index = 0; index < notas.length; index++) {
    temp += notas[index];
  }
  return temp / notas.length;
};

console.log(mediaNotas(notas));
