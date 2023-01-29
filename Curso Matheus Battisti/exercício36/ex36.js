let Conta = {
    saldo: 100,
    deposito: function(valor) {
        return valor;
    },
    saque: function(valor) {
        return valor;
    }
}

console.log(Conta.saldo);
console.log(Conta.deposito(20));
console.log(Conta.saque(50));


