let strings = [
  "  h3ll0 w0rld",
  "  w3b d3v3l0p3r  ",
  "0tterw1s3",
  "j4v4scr1pt ",
];

for (const key in strings) {
  strings[key] = strings[key].trim();
  strings[key] = strings[key].replaceAll("1", "i");
  strings[key] = strings[key].replaceAll("3", "e");
  strings[key] = strings[key].replaceAll("4", "a");
  strings[key] = strings[key].replaceAll("5", "s");
  strings[key] = strings[key].replaceAll("0", "o");
}
console.log(strings);
