// const frutas = ['abacaxi','banana','caju','damasco']
// for (let i = 0; i<frutas.length;i++){
//     console.log(frutas[i])
// }

// let frutas = ['a','b','c','d']
// let i;
// for (i=0;i<frutas.length;i++){
//     console.log(frutas)
// }

// const pares = []
// for (let i = 0 ; i<=20 ; i = i+2) {
//     pares.push(i)
// } 
// console.log(pares)

// let i = 0
// while(i,2){
//     console.log("repetindo"); i++;
// }

// const frutas = ['abacaxi','banana','pera','uva']
// for (const item of frutas){
//     console.log(item)
// }


// const frutas = ['abacaxi','banana','pera','uva'];
// const frutasNovas = frutas.forEach((value)) => value
// console.log(frutasNovas)

// const frutas = ['abacaxi','banana','pera','uva']
// const frutasNovas = frutas.map(value => value.toUpperCase())
// console.log(frutasNovas)


// const frutas = ['abacaxi','banana','pera','uva'];
// const frutas2 = ['maça', 'acerola'];

// const frutasNovasConcatenadas = frutas.concat(frutas2);
// console.log(frutasNovasConcatenadas)

// const endereco =['rua soriiano','100', 'apt 6','Fortaleza','Ceara'];
// console.log(endereco.join(',' ))


// const numeros = [1,2,3,4,5];
// const numerosAoQuadrado = numeros.map((value) => value*value);
// console.log(numerosAoQuadrado)


// numeros = [1,2,10,4,5];
// let maior = 0

// for (let index = 0; index < numeros.length; index++) {
//     const element = numeros[index]
//     const numerosAoQuadrado = numeros.map((value) => value*value);
//     console.log(numerosAoQuadrado)
       
//     if(numeros[index]>maior){
//         maior = numeros[index]
// }
// console.log(maior)

// }

const numeros = [1,2,10,3,4,5];
numeros.sort((a,b) => a-b)

// como sortear datas