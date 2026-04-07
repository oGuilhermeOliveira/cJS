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
    if (data && !(data instanceof Date)) {
        throw new TypeError("Esperando instancia de Date.")
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    })
}

try {
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora();
    console.log(hora)
} catch(e) {
    console.log(e)
} finally {
    console.log('Tenha um bom dia')
}

