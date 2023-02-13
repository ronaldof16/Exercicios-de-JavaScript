let validarIp = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;

console.log(validarIp.test("127.0.0.2"));
console.log(validarIp.test("12.0.0.2"));
console.log(validarIp.test("127.012.0546.2"));
console.log(validarIp.test("12345.222.555.1")); // Era pra dar false.