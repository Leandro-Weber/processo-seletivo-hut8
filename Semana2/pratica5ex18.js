let compras = [
  { nome: "maçã", quantidade: 2, valor: 0.5 },
  { nome: "alface", quantidade: 1, valor: 1.73 },
  { nome: "Água 5L", quantidade: 2, valor: 5.99 },
  { nome: "Pão Francês", quantidade: 8, valor: 0.63 },
];

let valorTotal = 0.0;

for (const key in compras) {
  for (let index = 0; index < compras[key].quantidade; index++) {
    valorTotal += compras[key].valor;
  }
}
console.log(`Valor total das compras: R$${valorTotal.toFixed(2)}`);
