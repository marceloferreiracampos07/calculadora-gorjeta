document.addEventListener('DOMContentLoaded', () => {

    const valor_conta = document.getElementById('valorconta');
    const porcento_gorjeta = document.getElementById('opçao');
    const botao = document.getElementById('calculate');
    const total_gorjeta = document.getElementById('total_gorjeta');
    const total_conta = document.getElementById('total_conta');

    // Dar ação ao botão
    const botao_cal = document.getElementById('calculate');

    botao_cal.addEventListener('click', () => {
        const valorDaConta = parseFloat(valor_conta.value);
        const porcentagem = parseFloat(porcento_gorjeta.value);

        /// Lógica do valor para ver se o número é válido
        if (isNaN(valorDaConta) || valorDaConta <= 0) {
            alert('Digite o valor de uma conta válido');
            return;
        }

        //  o cálculo
        const gorjeta_calculada = valorDaConta * porcentagem;
        const total_calculado = valorDaConta + gorjeta_calculada;

        // Exibindo os resultados na tela
        total_conta.textContent = `R$ ${total_calculado.toFixed(2)}`;
        total_gorjeta.textContent = `R$ ${gorjeta_calculada.toFixed(2)}`;
    });
});