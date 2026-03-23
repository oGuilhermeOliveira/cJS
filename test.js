const pessoa = {
    nome: 'Gui',
    sobrenome: 'Oli',
    idade: 21,
    endereco: {
        rua: 'av br',
        numero: 12
    }
}

const {nome: n = ' ', 
    ...resto
}   = pessoa;
console.log(n, resto)