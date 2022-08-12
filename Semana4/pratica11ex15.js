// Implementar funções para tratar um array contendo informações de livros de uma livraria
// As funcionalidades necessárias são:
// - Autor do livro mais vendido
// - Filtrar livros que tem um preço abaixo do valor que será inserido
// - Filtrar livros que tem um preço acima do valor que será inserido
// - Pesquisa pelo nome do livro
// - Pesquisa pelo autor do livro
// - Pesquisa pelo código do livro
// - Lista do Estoque
// - Top X livros mais vendidos
// - Aumento de X % no preço dos livros.

const livros = [
  {
    cod: "8568014003",
    nome: "mais esperto que o diabo",
    autor: "Napoleon Hill",
    valor: 24.6,
    quantidadeVendido: 17675,
  },
  {
    cod: "8550801488",
    nome: "pai rico, pai pobre",
    autor: "Robert T. Kiyosaki",
    valor: 42.71,
    quantidadeVendido: 8992,
  },
  {
    cod: "8547001085",
    nome: "antifragil",
    autor: "Nassim Nicholas Taleb",
    valor: 70.99,
    quantidadeVendido: 1700,
  },
  {
    cod: "8595080801",
    nome: "o investidor inteligente",
    autor: "Benjamin Graham",
    valor: 36.3,
    quantidadeVendido: 8445,
  },
  {
    cod: "8539004119",
    nome: "o poder do hábito",
    autor: "Charles Duhigg",
    valor: 48.9,
    quantidadeVendido: 14581,
  },
  {
    cod: "8543102146",
    nome: "essencialismo",
    autor: "Greg Mckeown",
    valor: 36.43,
    quantidadeVendido: 9730,
  },
  {
    cod: "9788539003839",
    nome: "rápido e devagar",
    autor: "Daniel Kahneman",
    valor: 50.93,
    quantidadeVendido: 5703,
  },
  {
    cod: "8551003429",
    nome: "princípios",
    autor: "Ray Dalio",
    valor: 89.9,
    quantidadeVendido: 3707,
  },
  {
    cod: "855717358X",
    nome: "gestão de alta performance",
    autor: "Andrew S. Grove",
    valor: 34.94,
    quantidadeVendido: 442,
  },
  {
    cod: "8550805246",
    nome: "empresas feitas para vencer",
    autor: "Jim Collins",
    valor: 44.2,
    quantidadeVendido: 824,
  },
  {
    cod: "855080455X",
    nome: "avalie o que importa",
    autor: "John Doerr",
    valor: 40.9,
    quantidadeVendido: 797,
  },
];

// Ordeno o array em ordem decrescente de vendas
// assim o livro mais vendido é o primeiro do array
const maisVendido = (array) => {
  array.sort((a, b) => b.quantidadeVendido - a.quantidadeVendido);
  console.log(`${array[0].autor} é o autor do livro mais vendido.`);
};
//maisVendido(livros);

const livroAbaixo = (array, preco) => {
  const newArray = array.filter((element) => element.valor < preco);
  if (newArray.length === 0) {
    console.log(`Não há livros com preço abaixo de R$${preco}.`);
  } else {
    console.log(`Os livros com preço abaixo de R$${preco} são:`);
    newArray.forEach((element) => console.log(element.nome));
  }
};
//livroAbaixo(livros, 40);

const livroAcima = (array, preco) => {
  const newArray = array.filter((element) => element.valor > preco);
  if (newArray.length === 0) {
    console.log(`Não há livros com preço abaixo de R$${preco}.`);
  } else {
    console.log(`Os livros com preço abaixo de R$${preco} são:`);
    newArray.forEach((element) => console.log(element.nome));
  }
};
//livroAcima(livros, 40);

const pesquisaNome = (array, string) => {
  const busca = array.find((element) => element.nome === string);
  if (busca === undefined) {
    console.log(`Não há livros com este nome`);
  } else {
    console.log(busca);
  }
};
//pesquisaNome(livros, "avalie o que importa");

const pesquisaAutor = (array, string) => {
  const busca = array.filter((element) => element.autor === string);
  if (busca.length === 0) {
    console.log(`Não há livros deste autor na biblioteca`);
  } else {
    console.log(`O(s) livro(s) do autor ${string} são:`);
    busca.forEach((element) =>
      console.log(
        `Título: ${element.nome} - Preço: R$${element.valor} - Código: ${element.cod}`
      )
    );
  }
};
//pesquisaAutor(livros, "Andrew S. Grove");

const pesquisaCod = (array, cod) => {
  const busca = array.find((element) => element.cod === cod);
  if (busca === undefined) {
    console.log(`Não há livros com este código`);
  } else {
    console.log(busca);
  }
};
//pesquisaCod(livros, "8550801488");

const estoque = (array) => {
  console.log(`Os livros em estoque são:`);
  array.forEach((element) =>
    console.log(`Título: ${element.nome} - Código: ${element.cod}`)
  );
};
//estoque(livros);

const topVendidos = (array, top) => {
  if (array.lenght < top) top = array.length;
  array.sort((a, b) => b.quantidadeVendido - a.quantidadeVendido);
  console.log(`Os ${top} livros mais vendidos são:`);
  for (let index = 0; index < top; index++) {
    console.log(
      `Título: ${array[index].nome} - Cópias vendidas: ${array[index].quantidadeVendido} - Autor: ${array[index].autor}`
    );
  }
};
//topVendidos(livros, 4);

const aumentoPreco = (array, porcento) => {
  array.forEach((element, index, array) => {
    element.valor = (element.valor + element.valor * porcento).toFixed(2);
  });

  console.log(`Valores atualizados em ${porcento}%:`);
  array.forEach((element) => {
    console.log(`Título: ${element.nome} - Novo Valor: ${element.valor}`);
  });
};
//aumentoPreco(livros, 200);
