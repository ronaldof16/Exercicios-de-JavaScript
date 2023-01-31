class Carrinho {
    constructor(itens, quantidadeTotal, valorTotal) {
        this.itens = itens;
        this.quantidadeTotal = quantidadeTotal;
        this.valorTotal = valorTotal;
    }

    adicionarItens(x) {
        this.itens += x;
    }

    removerItens(y) {
        this.itens -= y;
    }
}

let compra = new Carrinho(10, 15, 150);
console.log(compra);
compra.adicionarItens(3);
console.log(compra.itens);
compra.removerItens(5);
console.log(compra.itens);
