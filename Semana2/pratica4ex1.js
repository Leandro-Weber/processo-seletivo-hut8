let nomes = ["leandro", "antonio", "julia", "renata  ingrata"];
let linha = "";

for (let i = 0; i < nomes.length - 1; i++) {
  linha += nomes[i] + ", ";
}
linha += nomes[nomes.length - 1];

console.log(linha);
