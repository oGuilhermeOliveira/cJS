/* try {
    console.log(naoExisto)
} catch(err) {
    console.log("Variavel não existe");
    
} */

/* function soma(x,y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x e y precisam ser números')
    } 

    return x + y;
}

try {
    console.log(soma('a','a'))
} catch(err) {
    console.log('erro na soma')
} */

/* try {
    console.log('Abri um arquivo');
    console.log('Manipulei o arquivo e gerou erro')
    console.log('Fechei o arquivo')
} catch(err) {
    console.log('Tratando o erro')
} finally {
    console.log('Eu sempre sou executado')
}  */

function retornaHora(data) {
    if (!(data instanceof Date)) {
        console.log('Não é')
    }
}

retornaHora(new Date());