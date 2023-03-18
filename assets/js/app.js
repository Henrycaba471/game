//import { levels } from './levels.js'

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

//Levels of game DOM
const level1 = document.getElementById('level-1');
const level2 = document.getElementById('level-2');
const level3 = document.getElementById('level-3');
const level4 = document.getElementById('level-4');
const level5 = document.getElementById('level-5');
const level6 = document.getElementById('level-6');
const level7 = document.getElementById('level-7');
const level8 = document.getElementById('level-8');
const level9 = document.getElementById('level-9');
const level10 = document.getElementById('level-10');

//DOM
const $retry = document.getElementById('try');
const score = document.getElementById('score');
const time = document.getElementById('time');
const btnRetry = document.getElementById('retry-btn');
const btnNextLvel = document.getElementById('next-level-btn');



let imgSources = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];


imgSources = imgSources.sort(() => {
    return Math.random() - 0.5;
});

function contarTiempo() {
    tiempoRegresivo = setInterval(() => {
        temporizador--;
        time.innerHTML = temporizador;
        if (temporizador == 0) {
            clearInterval(tiempoRegresivo);
            bloquearTarjetas();
        }
    }, 1000);
}

function bloquearTarjetas() {
    for (let i = 0; i <= 15; i++) {
        let tarjetaBloqueada = document.getElementById(i);
        tarjetaBloqueada.innerHTML = `<img src="../assets/images/${imgSources[i]}.png" />`;
        tarjetaBloqueada.disabled = true;
    }
    btnRetry.style.display = 'block';
}

function destapar(id) {

    if (timer == false) {
        contarTiempo();
        timer = true;
    }

    unlockCard++;
    //console.log(unlockCard);

    if (unlockCard == 1) {
        cardOne = document.getElementById(id);
        firstResult = `<img src="../assets/images/${imgSources[id]}.png" />`;
        cardOne.innerHTML = firstResult;
        cardOne.disabled = true;
    } else if (unlockCard == 2) {
        cardTwo = document.getElementById(id);
        secondResult = `<img src="../assets/images/${imgSources[id]}.png" />`;
        cardTwo.innerHTML = secondResult;
        cardTwo.disabled = true;

        retry++;
        $retry.innerText = retry;

        if (firstResult === secondResult) {
            unlockCard = 0;
            assert++;
            score.innerText = assert;
            if (assert == 8) {
                clearInterval(tiempoRegresivo);
                score.innerHTML = `Felicidades ya tienes ${assert} aciertos 😊👌`;
                $retry.innerHTML = `Tus intentos fueron ${retry} 🤞😁`
                btnNextLvel.style.display = 'block';
                level2.src = '../assets/images/unlocked.png';
                level2.addEventListener('click', () => {
                    window.open('level2.html', '_self');
                });
                btnNextLvel.addEventListener('click', () => {
                    window.open('level2.html', '_self');
                });
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

btnRetry.addEventListener('click', () => {
    location.reload();
});

btnNextLvel.addEventListener('click', () => {
    window.open('levels/level2.html', '_self');
});
level1.addEventListener('click', () => {
    window.open('level1.html', '_self');
});
level2.addEventListener('click', () => {
    alert("Nivel Bloqueado, completa el nivel 1 para desbloquear");
});
level3.addEventListener('click', () => {
    alert("Nivel Bloqueado, completa el nivel 2 para desbloquear");
});
level4.addEventListener('click', () => {
    alert("Nivel Bloqueado, completa el nivel 3 para desbloquear");
});
level5.addEventListener('click', () => {
    alert("Nivel Bloqueado, completa el nivel 4 para desbloquear");
});

