let nomes = ["leandro", "antonio", "julia", "renata  ingrata"];
const prompt = require("prompt-sync")();
let opt = prompt("Qual nome deseja pesquisar? ");

if (nomes.includes(opt)) {
  console.log(`O nome ${opt} existe no Array.`);
} else {
  console.log(`O nome ${opt} NÃO existe no Array.`);
}
