const stop = document.getElementById('stop');
const start = document.getElementById('start');
const reiniciar = document.getElementById('reiniciar');
const section= document.getElementById('section')

let marcas  = document.getElementById('marcas');
let puntos = document.getElementById('puntos');

let hr = min = seg = ms = "0" + 0, startTimer;
let MARCAS=[]
let i=1

start.addEventListener('click',event=>{
    stop.classList.remove('btn-stop');
    reiniciar.classList.remove('btn-stop');
    marcas.classList.remove('btn-stop');
    start.classList.add('disable');
    //puntos.classList.remove('disable');
    Start();
})

reiniciar.addEventListener('click',()=>{
    stop.classList.add('btn-stop');
    start.classList.remove('disable');
    reiniciar.classList.add('btn-stop');
    marcas.classList.add('btn-stop');
    puntos.classList.add('disable');
    Reiniciar();
    Borrar();
})

stop.addEventListener ('click',()=>{
    Stop();
});

marcas.addEventListener('click',() =>{
    mostrarMarcas();
    puntos.classList.remove('disable')
    i++
});


function Start() {
    startTimer = setInterval(()=>{
        seg++;
        seg = seg < 10 ? "0" + seg : seg; // esta linea es para colocar un 0 antes del numero cuando es menor a 10
       
        if (seg==60){
            min++
            min = min < 10 ? "0" + min : min;
            seg = "0" + 0;
        }
        if (min==60){
            hr++;
            hr = hr < 10 ? "0" + hr : hr;
            min = "0" + 0
        }

        putValue();
    },1000);
}

function Stop(){
    clearInterval(startTimer);
}

function Reiniciar(){
    clearInterval(startTimer);
    hr = min = seg = ms = "0" + 0;
    i = 1
    putValue();
    Borrar();
}

function putValue() {
    document.querySelector('.seg').innerHTML = seg;
    document.querySelector('.min').innerHTML = min;
    document.querySelector('.hr').innerHTML = hr;
}

function mostrarMarcas () {
    MARCAS = [hr,min,seg];
    let cadena = MARCAS.toString();
    let p = document.createElement("p");
        p.textContent= "marca:" + i + "    " + cadena;
        puntos.appendChild(p);
 }

function Borrar(){
    puntos.innerHTML = ''
 }