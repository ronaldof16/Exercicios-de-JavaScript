function autorizacao(idade) {
    if(idade >= 18) {
        console.log('Pode entrar na auto escola.');
    } else {
        console.log('Não pode entrar na auto escola.')
    }
}

autorizacao(15);
autorizacao(21);