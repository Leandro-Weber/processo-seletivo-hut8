// Função para trocar os números de uma string por letras e retirar espaços indesejados.
const strings = [
  "  h3ll0 w0rld",
  "  w3b d3v3l0p3r  ",
  "0tterw1s3",
  "j4v4scr1pt ",
];

const arrumaArrayString = (string) => {
  string.forEach((element, index, string) => {
    element = element.replaceAll("1", "i");
    element = element.replaceAll("3", "e");
    element = element.replaceAll("4", "a");
    element = element.replaceAll("5", "s");
    element = element.replaceAll("0", "o");
    element = element.trim();
    string[index] = element;
  });
};
arrumaArrayString(strings);
console.log(strings);
