let funcionarios = [
  { nome: "João", idade: 30, salario: 15000, senioridade: "senior" },
  { nome: "Pedro", idade: 22, salario: 10000, senioridade: "pleno" },
  { nome: "Carla", idade: 27, salario: 1500, senioridade: "estagio" },
  { nome: "Lucas", idade: 35, salario: 15000, senioridade: "senior" },
  { nome: "Roberta", idade: 45, salario: 5000, senioridade: "junior" },
  { nome: "Patrícia", idade: 19, salario: 10000, senioridade: "pleno" },
  { nome: "Joana", idade: 23, salario: 5000, senioridade: "junior" },
];

const prompt = require("prompt-sync")();

const idadeCrescente = function (arr) {
  arr.sort((a, b) => {
    return a.idade - b.idade;
  });
};

const idadeDecrescente = function (arr) {
  arr.sort((a, b) => {
    return b.idade - a.idade;
  });
};

const salarioCrescente = function (arr) {
  arr.sort((a, b) => {
    return a.salario - b.salario;
  });
};

const salarioDecrescente = function (arr) {
  arr.sort((a, b) => {
    return b.salario - a.salario;
  });
};

const senioridadeCrescente = function (arr) {
  arr.sort((a, b) => {
    if (a.senioridade === "senior") {
      if (b.senioridade === "senior") {
        return 0;
      } else {
        return 1;
      }
    } else if (a.senioridade === "pleno") {
      if (b.senioridade === "pleno") {
        return 0;
      } else if (b.senioridade === "senior") {
        return -1;
      } else {
        return 1;
      }
    } else if (a.senioridade === "junior") {
      if (b.senioridade === "junior") {
        return 0;
      } else if (b.senioridade === "estagio") {
        return 1;
      } else {
        return -1;
      }
    } else {
      if (b.senioridade === "estagio") {
        return 0;
      } else {
        return -1;
      }
    }
  });
};

const senioridadeDecrescente = function (arr) {
  arr.sort((b, a) => {
    if (a.senioridade === "senior") {
      if (b.senioridade === "senior") {
        return 0;
      } else {
        return 1;
      }
    } else if (a.senioridade === "pleno") {
      if (b.senioridade === "pleno") {
        return 0;
      } else if (b.senioridade === "senior") {
        return -1;
      } else {
        return 1;
      }
    } else if (a.senioridade === "junior") {
      if (b.senioridade === "junior") {
        return 0;
      } else if (b.senioridade === "estagio") {
        return 1;
      } else {
        return -1;
      }
    } else {
      if (b.senioridade === "estagio") {
        return 0;
      } else {
        return -1;
      }
    }
  });
};

let cod = 0;
while (cod < 1 || cod > 3) {
  console.log(`Ordenar por:\n(1) Idade\n(2) Salario\n(3) Senioridade`);
  cod = prompt();
}
opt = cod;
cod = 0;
while (cod < 1 || cod > 2) {
  console.log(`Ordem:\n(1) Crescente\n(2) Descrescente`);
  cod = prompt();
}
opt += cod;

switch (opt) {
  case "11":
    idadeCrescente(funcionarios);
    break;

  case "12":
    idadeDecrescente(funcionarios);
    break;

  case "21":
    salarioCrescente(funcionarios);
    break;

  case "22":
    salarioDecrescente(funcionarios);
    break;

  case "31":
    senioridadeCrescente(funcionarios);
    break;

  case "32":
    senioridadeDecrescente(funcionarios);
    break;

  default:
    break;
}

// idadeCrescente(funcionarios);
// idadeDecrescente(funcionarios);
// salarioCrescente(funcionarios);
// salarioDecrescente(funcionarios);
// senioridadeCrescente(funcionarios);
// senioridadeDecrescente(funcionarios);

console.log(funcionarios);
