let conta1 = {
    saldo: 100,
    deposito: function(x) {
        return this.saldo + x;
    },
    saque: function(y) {
        return this.saldo - y;
    }
}

console.log(conta1.saldo);
console.log(conta1.deposito(50));
console.log(conta1.saque(30));


// Utilizando o ES6

class Conta {
    constructor(saldo) {
        this.saldo = saldo;
    }

    deposito(valor) {
        this.saldo += valor;
    }

    saque(valor) {
        this.saldo -= valor;
    }
}

let conta = new Conta(200);
console.log(conta.saldo);
conta.deposito(30)
console.log(conta.saldo);
conta.saque(80);
console.log(conta.saldo);
