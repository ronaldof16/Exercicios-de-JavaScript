let primeiro = [1, 2, 3, 4];
let segundo = [15, 25, 35, 45, 55,65, 75];

function verificaNumeroDeElementos(arr) {
    if(arr.length < 5) {
        console.log("Poucos Elementos");
    } else {
        console.log("Muitos Elementos");
    }
}

verificaNumeroDeElementos(primeiro);
verificaNumeroDeElementos(segundo);