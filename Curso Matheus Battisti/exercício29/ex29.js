let onibus = {
    rodas: 8,
    LimiteDePassageiros: 40,
    portas: 2
}

console.log(onibus);
onibus.janelas = 20;
console.log(onibus);
delete onibus.rodas;
console.log(onibus);
console.log(onibus.janelas);