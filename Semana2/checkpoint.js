// Parte 1
// Exercício 1

for (let index = 0; index < 15; index++) {
  console.log("Formação Otterwise.");
}

console.log(`--------------------------------\n`);
// Parte 2
// Exercício 1

const arrayQualquer = [1, 2, 3, 4, 5, 6];
for (let index = 0; index < arrayQualquer.length - 1; index++) {
  console.log(arrayQualquer[index]);
}

console.log(`--------------------------------\n`);
// Parte 3
// Exercício 1

let numeros = [5, 9, 10, 6];
let soma = 0;
for (let index = 0; index < numeros.length; index++) {
  soma += index * numeros[index];
}
console.log(soma);
console.log(`--------------------------------\n`);
// Exercício 2

let user = {
  name: "Juca",
  projects: [
    { name: "Projeto 1", start: "01/02/2021", active: true },
    { name: "Projeto 2", start: "03/03/2021", active: false },
    { name: "Projeto 3", start: "10/08/2021", active: true },
    { name: "Projeto 4", start: "20/08/2021", active: false },
    { name: "Projeto 5", start: "18/10/2021", active: true },
  ],
};

console.log("Projetos ativos: ");
for (let index = 0; index < user.projects.length; index++) {
  if (user.projects[index].active) {
    console.log(`Nome: ${user.projects[index].name}`);
  }
}

console.log(`--------------------------------\n`);
// Exercício 3

let numerosArray = [6, 21, 9, 2, 50, 98, 1];

function maiorNumero(array) {
  let temp = array[0];
  for (let index = 0; index < array.length; index++) {
    if (temp < array[index]) {
      temp = array[index];
    }
  }
  console.log(`O maior número é: ${temp}`);
}
maiorNumero(numerosArray);

console.log(`--------------------------------\n`);
// Exercício 4

let frase = "Frase super criativa uau!. ";

function contaPalavras(frase) {
  frase = frase.trim();
  frase = frase.split(" ");
  return frase.length;
}

console.log(`A frase "${frase}" possui ${contaPalavras(frase)} palavras.`);

console.log(`--------------------------------\n`);
// Exercício 5

const users = [
  { name: "Joao", skills: ["Javascript", "ReactJS", "Redux"] },
  { name: "Pedro", skills: ["VueJS", "Ruby on Rails", "Elixir"] },
];

let f = "Habilidades: ";
for (const key in users) {
  console.log(`Nome: ${users[key].name}`);
  for (const key2 in users[key].skills) {
    f += users[key].skills[key2] + ", ";
  }
  f = f.slice(0, f.length - 2);
  console.log(`${f}\n`);
  f = "Habilidades: ";
}

console.log(`--------------------------------\n`);
// Exercício 6

function rockPaperScissorsWinner(v1, v2) {
  let winner;
  if (v1 == 0 && v2 == 1) {
    return "player 1";
  } else if (v1 == 0 && v2 == 2) {
    return "player 2";
  } else if (v1 == 1 && v2 == 2) {
    return "player 1";
  } else if (v2 == 0 && v1 == 1) {
    return "player 2";
  } else if (v2 == 0 && v1 == 2) {
    return "player 1";
  } else if (v2 == 1 && v1 == 2) {
    return "player 2";
  } else {
    return "draw";
  }
}

let p1 = Math.random(),
  p2 = Math.random();
while (p1 >= 0.3) {
  p1 = Math.random();
}
while (p2 >= 0.3) {
  p2 = Math.random();
}

console.log(
  `O vencedor é: ${rockPaperScissorsWinner(
    Math.floor(p1 * 10),
    Math.floor(p2 * 10)
  )}`
);
