// Testar se um array possui um valor específico

const valores = [1, 3, -12, 33, -1, 9, 110, -1168, 252, -15253, 2127];
const teste = 9;

if (valores.includes(teste)) {
  console.log("O valor foi encontrado no Array.");
} else {
  console.log("O valor não foi encontrado no Array.");
}
