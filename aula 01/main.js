let pais = 'Brasil';
console.log(pais);

// transformando para maiuscúla
console.log(pais.toUpperCase())
console.log(pais.toLowerCase())

let frase = 'um país continental';

// console.log(pais + ' ' + frase);
// concatenando string utilizando o template string, forma atualizado de cocaatenação 
// console.log(`${pais} ${frase}`);
let fraseCompleta = `O ${pais} um país continental`;
console.log(fraseCompleta.replace('continental','tropical'));
console.log(fraseCompleta.length);


