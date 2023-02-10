let regex = /\d+ID\b/;

console.log(regex.test("123ID"));
console.log(regex.test("123"));
console.log(regex.test("ID123"));
console.log(regex.test("57182726719ID"));