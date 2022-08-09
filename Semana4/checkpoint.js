// Parte 1 - funções de string
// Exercício 1
console.log("Parte 1");
console.log("Exercício 1");

const nomes = "Maria, Paulo, Moisés, Joel, Ana";

const imprimeNomes = (nomes) => {
  nomes = nomes.split(",");
  for (let index = 0; index < nomes.length; index++) {
    console.log(`Nome ${index}: ${nomes[index].trim()}`);
  }
};
imprimeNomes(nomes);

// Exercício 2
console.log(`\nExercício 2`);

let texto = "Olá, mundo, meu, nome, é, Juca";
texto = texto.replace(/,/g, ".");
console.log(texto);
