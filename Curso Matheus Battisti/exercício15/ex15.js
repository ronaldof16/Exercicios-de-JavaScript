let x = 73;
let divisoes = 0;

for(let i = 1; i <= x; i++) {
    if(x % i == 0) {
        divisoes++;
    }
}

if(divisoes == 2) {
    console.log(`${x} é um número primo!`);
} else {
    console.log(`${x} não é um número primo!`); 
}
