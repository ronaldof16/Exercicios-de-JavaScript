class Endereco {
    constructor(rua, bairro, cidade, estado) {
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }

    set novaRua(novaRua) {
        this.rua = novaRua;
    }
    set novoBairro(novoBairro) {
        this.bairro = novoBairro;
    }
    set novaCidade(novaCidade) {
        this.cidade = novaCidade;
    }
    set novoEstado(novoEstado) {
        this.estado = novoEstado;
    }
    

}

let endereco = new Endereco("Rua José Bonifácio", "São José", "Carpina", "PE");
console.log(endereco);
endereco.novaRua = "Rua da guia";
console.log(endereco);
endereco.novoBairro = "Centro";
endereco.novaCidade = "Niterói";
endereco.novoEstado = "Rio de Janeiro";
console.log(endereco);
