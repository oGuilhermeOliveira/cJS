const nomes = ['Steve Harris', 'Bruce Dickinson', 'Dave Murry'];

// for (let i = 0; i < nome.length; i++) {
//     console.log(nome[i]) 
// }

// for (let i in nome) {
//     console.log(nome[i])
// }

// for (let valor of nome) {
//     console.log(valor)
// }

// Arrow function
nomes.forEach((valor, indice) => {
    console.log(valor, indice)
});

nomes.forEach(function(valor, indice) {
    console.log(valor, indice)
});