let frase = "Ronaldo tem 32 anos!"

let arr = frase.split(" ");

//console.log(arr);

for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

let i = 0;
while(i < arr.length) {
    console.log(arr[i]);
    i++;
}

arr.forEach(ele => {
    console.log(ele);
})


