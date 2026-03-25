const elementos = [
    {tag: 'h2', text: 'Cristiano Ronaldo'},
    {tag: 'div', text: 'Thiago Neves'},
    {tag: 'section', text: 'Léo Moura'},
    {tag: 'footer', text: 'Lucas Paquetá'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');



for (let i = 0; i < elementos.length; i++) {
    let {tag, text } = elementos[i];
    let tagCriada = document.createElement(tag);
    tagCriada.innerText = text;
    div.appendChild(tagCriada);
};

container.appendChild(div);