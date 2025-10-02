// LÓGICA DE VERIFICAÇÃO DE IDADE

const idadeInput = document.getElementById('idadeInput');
const verifyButton = document.getElementById('verifyButton');
const result = document.getElementById('resultado'); 

function verificarIdade(){
    resultado.classList.remove('visivel');
    const idade = parseInt(idadeInput.value);
    let menssagem = '';

    if(isNaN(idade) || idade < 0){
        menssagem = 'Por favor, insira uma idade válida.';
    }else if(idade < 18){
        menssagem = 'VOcê é menor de idade.';
    }else if(idade < 60){
        menssagem = 'Você é adulto.';
    }else{
        menssagem = 'Você é idoso.';
    }

    setTimeout(() => {
        result.innerText = menssagem;
        result.classList.add('visivel');
    }, 100);
}

verifyButton.addEventListener('click', verificarIdade);
idadeInput.addEventListener('keyup', (event) => {
    if(event.key === 'Enter') verificarIdade();
});



const canvas = document.getElementById('backgorund-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;



let mouse = {
    x: null,
    y: null,
    radius: 150
};

window.addEventListener('mousemove', (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
});


let particulasArray = [];
const numeroDeParticulas = 100;


class Particula{
    constructor(x, y, size, color, weight){
        this.x = x;
        this.y = y;
        this.direcaoX = direcaoX;
        this.direcaoY = direcaoY;
        this.tamanho = tamanho;
        this.cor = cor;
    }

desenhar(){
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.tamanho, 0, math.PI * 2, false);
    ctx.fillStyle = '#007bff';
    ctx.fill();
    }

    
}