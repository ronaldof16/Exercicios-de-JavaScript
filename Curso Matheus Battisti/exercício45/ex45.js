let validaUsuario = /^(?=.{3,16}$)[A-Za-z]/;

console.log(validaUsuario.test("23"));
console.log(validaUsuario.test("abc23_-1"));
console.log(validaUsuario.test("abc_-23"));
console.log(validaUsuario.test("abc_-238594898984"));