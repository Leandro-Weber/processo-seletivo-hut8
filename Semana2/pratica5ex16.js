const user = { name: "Maria", age: "26", job: "Dev" };
// console.log(`O valor da propriedade ${Object.keys(user)[0]} é ${user.name}.`);
// console.log(`O valor da propriedade ${Object.keys(user)[1]} é ${user.age}.`);
// console.log(`O valor da propriedade ${Object.keys(user)[2]} é ${user.job}.`);

for (let x in user) {
  console.log(`O valor da propriedade ${x} é ${user[x]}.`);
}
