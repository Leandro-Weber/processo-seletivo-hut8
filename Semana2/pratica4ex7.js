let nLinhas = 7;
let n = 1;
let linha = "";

for (let index = 0; index < nLinhas; index++) {
  linha += n + " ";
  n++;
  linha += n + " ";
  n++;
  linha += n + " ";
  n++;
  linha += " PUM";
  n++;
  console.log(linha);
  linha = "";
}
