let pessoas = [
  { name: "Marília", age: 26, job: "Dev" },
  { name: "Juca", age: 21, job: "RH" },
  { name: "Flávia", age: 30, job: "Financeiro" },
  { name: "Sérgio", age: 24, job: "Dev" },
];

let linha = "";
for (const key in pessoas) {
  if (pessoas[key].job === "Dev") {
    linha += pessoas[key].name + " é Dev. ";
  } else {
    linha += pessoas[key].name + " não é Dev. ";
  }
}
console.log(linha);
