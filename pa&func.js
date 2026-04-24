// function funcao() {
//     let total = 0;
//     for (let argumento of arguments) {
//         total += argumento
//     }
//     console.log(total);
// }
// funcao(1,2,3,4,5,6,7,8,9,10);

// function funcao([valor1, valor2, valor3]) {
//     console.log(valor1, valor2, valor3);
    
// }
// funcao(['Guilherme', 'Oliveira', 21]);

const conta = function(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === '+')acumulador += numero;
        if (operador === '-')acumulador -= numero;
        if (operador === '/')acumulador /= numero;
        if (operador === '*')acumulador *= numero;
    }
    console.log(acumulador)
};
conta('+', 2, 20,30,40,50);