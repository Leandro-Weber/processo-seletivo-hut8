// Função para retornar os alunos que tiraram nota zero em todas as avaliações.
const alunos = [
  { nome: "Leandro", notas: [10, 9, 8] },
  { nome: "Leonardo", notas: [0, 0, 0] },
  { nome: "Juats", notas: [10, 5, 6] },
];

const listarZerados = (array) => {
  let zerados = [];
  array.forEach((element) => {
    if (element.notas.every((element) => element === 0)) zerados.push(element);
  });
  return zerados;
};
console.log(listarZerados(alunos));
