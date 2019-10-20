// Creamo el contador
var contadorJs = 0;
var tiempoMilesegundo = 2000;
var ultimoClickPulsado = Date.now() - tiempoMilesegundo;
// Obtener el Boton Referenciarlos con id
var boton = document.getElementById('JsBtn');
// poner a encutar
boton.addEventListener('click', () => {
  // condicionar para limitar el numero de click a 2 seg   
  if (Date.now() - ultimoClickPulsado >= tiempoMilesegundo) {
    console.log(`Js Click ${++contadorJs} vece(s) `);
    ultimoClickPulsado = Date.now();
  }
});


// ahora hay que exportar lo que se va utilizar y colocarlo en const
// import { interval } from 'rxjs';
// import { throttleTime } from 'rxjs/operators';

const { fromEvent } = rxjs;
const { scan, throttleTime } = rxjs.operators;


var botonRxjs = document.getElementById("RxJsBtn");

fromEvent(botonRxjs, "click")
// con esta version los operadores se pasan por pipe 
  .pipe(
    throttleTime(2000),
    scan(contadorRxjs => contadorRxjs + 1, 0)
  )
  .subscribe(contadorRxjs => console.log(`RxJs Click ${contadorRxjs} vece(s)`));

