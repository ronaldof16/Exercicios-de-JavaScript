class Conta {
    constructor(saldoContaCorrente, saldoContaPoupanca, jurosContaPoupanca) {
        this.saldoContaCorrente = saldoContaCorrente;
        this.saldoContaPoupanca = saldoContaPoupanca;
        this.jurosContaPoupanca = jurosContaPoupanca;
    }

    depositoContaCorrente(valor) {
        this.saldoContaCorrente += valor;
    }

    saqueContaCorrente(valor) {
        this.saldoContaCorrente -= valor;
    }
    depositoContaPoupanca(valor) {
        this.saldoContaPoupanca += valor;
    }

    saqueContaPoupanca(valor) {
        this.saldoContaPoupanca -= valor;
    }

    transferirParaPoupanca(valor) {
        this.saldoContaCorrente -= valor;
        this.saldoContaPoupanca += valor;
    }
}

let conta = new Conta(100, 200, 0.1);
console.log(conta);

conta.depositoContaCorrente(20);
conta.saqueContaPoupanca(50);
console.log(conta);

conta.transferirParaPoupanca(30);
console.log(conta);

class ContaEspecial extends Conta {
    constructor(saldoContaCorrente, saldoContaPoupanca, jurosContaPoupanca) {
        super(saldoContaCorrente, saldoContaPoupanca, jurosContaPoupanca * 2);
    }
}

let contaEspecial = new ContaEspecial(300, 400, 0.2);
console.log(contaEspecial);

contaEspecial.depositoContaCorrente(1000);
console.log(contaEspecial);

