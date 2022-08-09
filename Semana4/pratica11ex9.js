// Função para calcular o preço total das compras.

const compras = [
  { nome: "maçã", quantidade: 2, valor: 0.5 },
  { nome: "alface", quantidade: 1, valor: 1.73 },
  { nome: "Água 5L", quantidade: 2, valor: 5.99 },
  { nome: "Pão Francês", quantidade: 8, valor: 0.63 },
];

const precoTotal = (array) => {
  let preco = 0;
  array.forEach((element) => {
    preco += element.quantidade * element.valor;
  });
  console.log(`R$ ${preco}`);
};
precoTotal(compras);
