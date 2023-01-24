function verificaDados(dado) {
    if(typeof dado == 'number') {
        console.log('Este dado é um número!');
    } else if(typeof dado == 'string') {
        console.log('Este dado é uma string!');
    } else if(typeof dado == 'boolean') {
        console.log('Este dado é um boolean!');
    }
}

verificaDados(6);
verificaDados('ronaldo');
verificaDados(1 > 2);