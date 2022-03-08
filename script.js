
let notaEscolhida = 0
let notaCorreta = 0
let nota = 0

let notas = ['dó','ré','mi','fa','sol','la','sí']
let posicaoNotas = [-78, -73, -67, -56, -46, -38, -28]

let posicaoX
let posicaoY

let mensagemAcerto
let mensagemErro

function geraNota (){
    posicaoX = Math.round(Math.random() * 500)
    posicaoY = posicaoNotas[Math.round(Math.random(1,2) *6)]
    nota = document.createElement('img')

    nota.src= 'img/colcheia.png'
    nota.style.marginBottom = posicaoY +'px'
    nota.style.marginLeft = posicaoX + 'px'
    nota.className = 'nota-aleatoria'
    nota.position = 'absolute'

    let areaNotas = document.getElementById('area-notas')
    areaNotas.appendChild(nota)

    if (posicaoY === -78){
        notaCorreta = 'dó'
    }else if(posicaoY === -73){
        notaCorreta = 'ré'
    }else if(posicaoY === -67){
        notaCorreta = 'mi'
    }else if(posicaoY === -56){
        notaCorreta = 'fa'
    }else if(posicaoY === -46){
        notaCorreta = 'sol'
    }else if(posicaoY === -38){
        notaCorreta = 'la'
    }else if(posicaoY === -28){
        notaCorreta = 'sí'
    }

    mensagemAcerto.remove()
    mensagemErro.remove()
}

function escolheNota(nota) {
   notaEscolhida = notas[document.getElementById(nota).value]
}

function verificaNota (){
    mensagem()

    nota.remove()

}

function mensagem() {
    if (notaEscolhida == notaCorreta) {
        mensagemAcerto = document.createElement('p')
        mensagemAcerto.style.color = 'green'
        mensagemAcerto.textContent = 'Você acertou!'
        mensagemAcerto.style.position = 'absolute'
        mensagemAcerto.style.fontSize = 32 + 'px'
        mensagemAcerto.style.fontWeight = 'bold'

        let areaBtn = document.getElementById('area-btn')
        areaBtn.appendChild(mensagemAcerto)

    }else {
        mensagemErro = document.createElement('p')
        mensagemErro.style.color = 'red'
        mensagemErro.textContent = 'Você errou! A nota correta era ' + notaCorreta
        mensagemErro.style.position = 'absolute'
        mensagemErro.style.fontSize = 32 + 'px'
        mensagemErro.style.fontWeight = 'bold'

        let areaBtn = document.getElementById('area-btn')
        areaBtn.appendChild(mensagemErro)
    }
}
geraNota()






