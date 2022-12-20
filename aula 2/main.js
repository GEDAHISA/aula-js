function liberarAcesso() {

    let idade = document.getElementById('idade').value;
    let nome = document.getElementById('nome').value;



    if (idade == '' && nome == '') {
        alert('Favor informar nome/idade')
    } else if (idade >= 60) {
        console.log(`Na melhor idade! entra free ${nome}`);
    } else if (idade > 18 && idade < 60) {
        console.log(`pode entrar ${nome}`);
    } else {
        console.log(`foi barrado no baile ${nome}`);

    }
}

// function liberarAcesso(idade, nome) {


//     if (idade > 18 && idade < 60) {
//         console.log(`pode entrar ${nome}`);
//     } else if (idade >= 60) {
//         console.log(`Na melhor idade! entra free ${nome}`);
//     } else {
//         console.log(`foi barrado no baile ${nome}`);

//     }
// }

liberarAcesso(75, 'liliane');
liberarAcesso(16);
liberarAcesso(21);