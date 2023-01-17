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

// const numeros = [1,2,10,3,4,5];
// numeros.sort((a,b) => a-b)

// como sortear datas

// const array = [0, 1, 2+2 ==4,"ameixa",5,6,7,8,9,"bombom"]
// console.log(array[array.length -1]);

// const array= [0, 1, 2+2 ==4,"ameixa",5,6,7,8,9,"bombom"]
// for (let i = 0; i< array.length; i++) {
//     const element = array[array];
//     console.log(array[i]);
// }

// const nomes = ['ana',"maria","jurema","alba"];
// nomes.forEach((nome)=> console.log(nome.toUpperCase())) ;

const abacaxi = [0, 1, 2+2 ==4,"ameixa",5,6,7,8,9,"bombom"]
const abacaxiMaduro= abacaxi.map(_ =>2)
// console.log(abacaxiMaduro)

const numeros = abacaxiMaduro.map((value)=>value + Math.floor(Math.random()*10));
// console.log(numeros);

// for (let index = 0; index < numeros.length; index++) {
//     const element = numeros[index];
//     if (element %2 !== 0) {
//        console.log(element) 
//     }
    
// }

// numeros.forEach(element => { 
//     if (element > 4) {
//         console.log(element)  
//    
// })

const pares = numeros.filter(numero => numero %2 ===0)
console.log(pares)

const cores = ["verde","amarelo","laranja","vermelho","azul" ] 
cores.forEach(cor => console.log(cor.toUpperCase()))

cores.splice(cores.indexOf("amarelo"),1);
console.log(cores);

cores.forEach(cor =>console.log(cor[0].toUpperCase()+cor.substring(1)))