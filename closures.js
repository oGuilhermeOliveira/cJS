function retornaFuncao(nome) {
    return function() {
        return nome;
    };
}

const funcao = retornaFuncao('Ada');
const funcao2 = retornaFuncao('Leon ');
console.dir(funcao);
console.dir(funcao2);

console.log(funcao(), funcao2());
