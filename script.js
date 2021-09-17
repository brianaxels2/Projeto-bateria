document.body.addEventListener('keyup', (evento) => {
    playSound(evento.code.toLowerCase())
})
document.querySelector('.composer button').addEventListener('click', () => {
    var som = document.querySelector('#input').value

    if(som !== ''){
        var somArray = som.split('')

        playComposicao(somArray)
    }
})

function playSound(sound){
    var audio = document.querySelector(`#s_${sound}`)
    var elementokey  = document.querySelector(`div[data-key="${sound}"]`)

    if(audio) {
        audio.currentTime = 0
        audio.play()
    }
    if(elementokey) {
        elementokey.classList.add('active')

        setTimeout(() => {
            elementokey.classList.remove('active')
        }, 300)
    }
}

function playComposicao(somArray){
    var wait = 0

    for(let somItem of somArray){
        setTimeout(()=>{
            playSound(`key${somItem}`)
        }, wait)

        wait += 200
    }
}