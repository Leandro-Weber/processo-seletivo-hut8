// Função para verificar se um nome existe no array.
const nomes = [
  "Juliana",
  "Pedro",
  "Regina",
  "João",
  "Patrícia",
  "Gabriel",
  "Carlos",
  "Carla",
];
const teste = "Carla";

const nomeExiste = (array, nome) => {
  if (array.includes(nome)) console.log(`O nome ${nome} está no array.`);
  else console.log(`O nome ${nome} não está no array.`);
};

nomeExiste(nomes, teste);
