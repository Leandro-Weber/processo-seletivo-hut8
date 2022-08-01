let dados = [
  {
    nome: "Analu dos santos baptista",
    cpf: "14776213931",
    telefone: "8328008258",
  },
  {
    nome: "Cláudio  da silva figueiredo ",
    cpf: "47187999887",
    telefone: "11988754092",
  },
];

function formatarCpf(cpf) {
  let temp = "",
    cpfFinal = "";
  cpf = cpf.trim();
  if (cpf.length != 11) {
    console.log("ERRO! CPF inválido.");
    return "00000000000";
  }
  temp = cpf.slice(0, 3);
  cpfFinal += temp;
  cpfFinal += ".";
  temp = cpf.slice(3, 6);
  cpfFinal += temp;
  cpfFinal += ".";
  temp = cpf.slice(6, 9);
  cpfFinal += temp;
  cpfFinal += "-";
  temp = cpf.slice(9, 11);
  cpfFinal += temp;
  return cpfFinal;
}

function formatarNome(nome) {
  let temp = "";
  nome = nome.trim();
  temp = nome.split(" ");
  nome = "";
  for (const key in temp) {
    for (let index = 0; index < temp[key].length; index++) {
      index == 0
        ? (nome += temp[key][index].toUpperCase())
        : (nome += temp[key][index]);
    }
    nome += " ";
  }
  return nome;
}

function formatarTelefone(telefone) {
  let temp = "(";
  for (let index = 0; index < telefone.length; index++) {
    if (index == 2) {
      temp += ") " + telefone[index];
    } else if (index == 7) {
      temp += "-" + telefone[index];
    } else {
      temp += telefone[index];
    }
  }
  return temp;
}

for (const key in dados) {
  console.log(formatarNome(dados[key].nome));
  console.log(formatarCpf(dados[key].cpf));
  console.log(formatarTelefone(dados[key].telefone));
  console.log("--------------------------");
}
