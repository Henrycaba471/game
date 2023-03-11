let unlockCard = 0;
let cardOne = null;
let cardTwo = null;
let firstResult = null;
let secondResult = null;
let retry = 0;
let assert = 0;
let timer = false;
let temporizador = 40;
let tiempoRegresivo = null;

const $retry = document.getElementById('try');
const score = document.getElementById('score');
const time = document.getElementById('time');


let imgSources = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];


imgSources = imgSources.sort(() => {
    return Math.random() - 0.5;
});

function contarTiempo(){
    tiempoRegresivo = setInterval(() => {
        temporizador--;
        time.innerHTML = temporizador;
        if (temporizador == 0) {
            clearInterval(tiempoRegresivo);
            bloquearTarjetas();
        }
    },1000);
}

function bloquearTarjetas(){
    for (let i = 0; i <= 15; i++) {
        let tarjetaBloqueada = document.getElementById(i);
        tarjetaBloqueada.innerHTML = `<img src="assets/images/${imgSources[i]}.png" />`;
        tarjetaBloqueada.disabled = true;
    }
}

function destapar(id) {

    if(timer == false){
        contarTiempo();
        timer = true;
    }

    unlockCard++;
    //console.log(unlockCard);

    if (unlockCard == 1) {
        cardOne = document.getElementById(id);
        firstResult = `<img src="assets/images/${imgSources[id]}.png" />`;
        cardOne.innerHTML = firstResult;
        cardOne.disabled = true;
    } else if (unlockCard == 2) {
        cardTwo = document.getElementById(id);
        secondResult = `<img src="assets/images/${imgSources[id]}.png" />`;
        cardTwo.innerHTML = secondResult;
        cardTwo.disabled = true;

        retry++;
        $retry.innerText = retry;

        if (firstResult === secondResult) {
            unlockCard = 0;
            assert++;
            score.innerText = assert;
            if(assert == 8){
                clearInterval(tiempoRegresivo);
                score.innerHTML = `Felicidades ya tienes ${assert} aciertos 😊👌`;
                $retry.innerHTML = `Tus intentos fueron ${retry} 🤞😁`
            }
        } else {
            setTimeout(() => {
                cardOne.innerHTML = ' ';
                cardTwo.innerHTML = ' ';
                cardOne.disabled = false;
                cardTwo.disabled = false;
                unlockCard = 0;
            }, 900);
        }
    }
}

