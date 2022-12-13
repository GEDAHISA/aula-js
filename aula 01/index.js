function calcularDesconto () {
    let valorProduto = document.getElementById('preco').value;
    console.log(valorProduto) 
    let resultado = valorProduto - (valorProduto * 0,2) 
    console.log(resultado) 

    // exibe o texto da variavel textoResultado em formato de reais
    document.getElementsByTagName('h3') [0].innerHTML = resultado
    // transforma para decimal com 2 casas decimais, ficando em formato moeda
    let resultadoFormatado = parseFloat(resultado).toFixed(2);


}