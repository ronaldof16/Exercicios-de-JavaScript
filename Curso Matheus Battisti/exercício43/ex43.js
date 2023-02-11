let regex = /Marca: (Nike|Adidas|Puma|Asics)/;

console.log(regex.test("Marca: Nike"));
console.log(regex.test("Marca: Nike ou Adidas"));
console.log(regex.test("Marca: Mizuno"));
console.log(regex.test("Marca: Asics"));
console.log(regex.test("Marca: Olympicus e Puma"));
console.log(regex.test("Marca:"));