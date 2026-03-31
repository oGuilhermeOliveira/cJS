const pessoa = {
    nome: 'Steve',
    sobrenome: 'Harris',
    idade: 70
};

// const chave = 'nome';
// console.log(pessoa[chave]);


for (let chave in pessoa) {
    console.log(chave,':',pessoa[chave])
}