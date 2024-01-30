let display = document.getElementById('display');
let expression = '';

function adicionarCaractere(caractere) {
    expression += caractere;
    atualizarDisplay();
}

function limparDisplay() {
    expression = '';
    atualizarDisplay();
}

function apagar() {
    expression = expression.slice(0, -1);
    atualizarDisplay();
}

function calcularResultado() {
    try{
        expression = eval(expression).toString();
        atualizarDisplay();
    } catch (error) {
        display.value = 'Erro';
    }
}

function atualizarDisplay() {
    display.value = expression;
}