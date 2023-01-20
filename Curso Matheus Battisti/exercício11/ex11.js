let idade = 18;
let cnh = true;

if(idade >= 18 && cnh == false) {
    console.log('Tem idade para poder dirigir mas não tem habilitação!');
} else if(idade >= 18 && cnh == true) {
    console.log('Parabéns, você pode dirigir!');
} else {
    console.log('Você não pode dirigir!');
}