const nome = 'Steve';

function falaNome() {
    
    console.log(nome);
}

function usaFalaNome() {
    const nome = 'Bruce';
    falaNome();
}

usaFalaNome();