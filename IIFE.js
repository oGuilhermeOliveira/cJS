// IIFE -> Immediately invoked function expression

(function(idade, peso, altura) {
    const sobrenome = 'Harris'
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Steve'))
    }

    falaNome();

    console.log(idade, peso, altura);
    
})(21, 72, 1.80);

