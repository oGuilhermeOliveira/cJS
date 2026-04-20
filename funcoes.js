// declaração de função (function hoisting)
function falaOi() {
    console.log('oi');
};
falaOi();

//First class objects (objetos de primeira classe)
//Function expression
const souUmDado = function() {
    console.log('Sou um dado');
};

function executaFuncao(funcao) {
    funcao();
};
executaFuncao(souUmDado);

// Arrow function

const arrowFunction = () => {
    console.log('Sou uma arrow function')
};
arrowFunction();

const obj = {
    falar() {
        console.log('Estou falando...')
    }
};

obj.falar();