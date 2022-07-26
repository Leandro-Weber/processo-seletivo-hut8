// Exercício 1
function par(x) {
  if (x % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(par(10));
console.log(par(9));

// Exercício 2
console.log(`--------------------------------\n`);

function verificaCategoria(idade) {
  if (idade < 5) {
    console.log("Idade insuficiente.");
  } else if (idade >= 5 && idade <= 7) {
    console.log("Infantil A.");
  } else if (idade >= 8 && idade <= 10) {
    console.log("Infantil B.");
  } else if (idade >= 11 && idade <= 13) {
    console.log("Juvenil A.");
  } else if (idade >= 14 && idade <= 17) {
    console.log("Juvenil B.");
  } else {
    console.log("Adulto.");
  }
}
verificaCategoria(18);
