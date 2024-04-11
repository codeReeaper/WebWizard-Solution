/*document.addEventListener("DOMContentLoaded", function() {
    var inputsValue = document.querySelectorAll('.input-value');
    inputsValue.forEach(function(input) {
        input.addEventListener('keyup', function() {
            // Remover todos os caracteres não numéricos do valor que for inserido
            let valor = this.value.replace(/\D/g, '');
            // Formatar o valor para adicionar a vírgula dos milhares e o ponto decimal
            valor = (parseFloat(valor) / 100).toLocaleString('pt-BR', {minimumFractionDigits: 2});
            // Define o valor formatado de volta no campo de entrada
            this.value = valor;
        });
    });
});*/