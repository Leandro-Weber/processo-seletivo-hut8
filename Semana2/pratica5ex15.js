const notas = [
  { nome: "Marcos", notas: [10, 7, 2] },
  { nome: "Michele", notas: [10, 10, 10] },
  { nome: "Pedro", notas: [3, 10, 9] },
  { nome: "Andressa", notas: [6, 6, 8] },
  { nome: "Cristiana", notas: [7, 9, 2] },
];

for (let index = 0; index < notas.length; index++) {
  let media =
    (notas[index].notas[0] + notas[index].notas[1] + notas[index].notas[2]) / 3;

  if (media >= 7) {
    console.log(notas[index].nome);
  }
}
