function ePaisagem(largura, altura) {
    if (largura > altura) {
        return "Paisagem"
    } else 
        return "Retrato"
}

const foto = (largura, altura) => largura >= altura;


console.log(foto(500,200))