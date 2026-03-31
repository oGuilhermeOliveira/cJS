const numeros = [1, 2, 3, 4 ,5, 6, 7, 8, 9]

let i = 0;
while ( i < numeros.length) {
    let numero = numeros[i];

    if ((numero % 2) === 0) {
        console.log('Pulei os números pares')
        i++;
        continue;
    }
    console.log(numero)
    i++;
}