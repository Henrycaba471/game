//Elementos de l DOM

const gameStart = document.querySelector('.game-start');
const instructions = document.querySelector('.instructions');
const start = document.getElementById('start');
const instructionsBtn = document.getElementById('instructions');
const help = document.querySelector('.help');
const helpBtn = document.getElementById('help');
const exit = document.getElementById('exit');
const exitInstructions = document.getElementById('exit-instructions');
const exitHelp = document.getElementById('exit-help');


//Programacion del boton salir
exit.addEventListener('click', () => alert('Para salir simplemente cierra la pestaña actual 😁'));

//Programacion iniciar juego
start.addEventListener('click', () =>{
    window.open('levels/level1.html', '_self');
});

//Programacion botones intrucciones
instructionsBtn.addEventListener('click', () =>{
    gameStart.style.display = 'none';
    instructions.style.display = 'block';
});

exitInstructions.addEventListener('click', () =>{
    gameStart.style.display = 'flex';
    instructions.style.display = 'none';
});

//Programacion botones ayuda
helpBtn.addEventListener('click', () =>{
    gameStart.style.display = 'none';
    help.style.display = 'block';
    ayudaInit();
});

exitHelp.addEventListener('click', () =>{
    gameStart.style.display = 'flex';
    help.style.display = 'none';
});

//Programacion caja de ayuda
const tdHelp1 = document.getElementById('1');
const tdHelp2 = document.getElementById('2');
const tdHelp3 = document.getElementById('3');
const tdHelp4 = document.getElementById('4');

function ayudaInit (){
    setTimeout(() => {
        tdHelp1.innerHTML = `<img src="assets/images/hacker.png" alt="help" />`
    }, 1000);
    setTimeout(() => {
        tdHelp4.innerHTML = `<img src="assets/images/hacker.png" alt="help" />`
    }, 2000);
    setTimeout(() => {
        tdHelp2.innerHTML = `<img src="assets/images/base.png" alt="help" />`
    }, 3000);
    setTimeout(() => {
        tdHelp3.innerHTML = `<img src="assets/images/base.png" alt="help" />`
    }, 4000);
}

//img src="assets/images/instrucciones.png" alt="icon play"
