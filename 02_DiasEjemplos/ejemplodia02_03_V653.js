var contadorJs = 0;
var tiempoMilesegundo = 2000;
var ultimoClickPulsado = Date.now() - tiempoMilesegundo;
var boton = document.getElementById('JsBtn');
boton.addEventListener('click', () => {
    if (Date.now() - ultimoClickPulsado >= tiempoMilesegundo) {
        contadorJs += event.clientX;// contador le sumamas envento ubicacion cordenada x
        console.log(++contadorJs);
        ultimoClickPulsado = Date.now();
    }
});

// RxJS Versión 6

const { fromEvent } = rxjs;
const { map, scan, throttleTime } = rxjs.operators; 

var botonRxjs = document.getElementById('RxJsBtn');
fromEvent(botonRxjs, 'click')
    .pipe
    (
      throttleTime(2000),
      map(evento => evento.clientX), // modifica el valor con map
      scan((contadorRxjs, clientX) => contadorRxjs + clientX, 0)
    )
    .subscribe(contadorRxjs => console.log(contadorRxjs));

/*
Con RxJS podemos transformar los valores pasados a través de sus observables.  Para ello vamos a usar Operador -> map

_________________________________________________________________
Vamos a ver como sumar la posición actual del mouse en cada click
Scan: Aplica una función de “accumulator” sobre una secuencia observable y devuelve cada resultado intermedio. El valor de ‘seed’ opcional se utiliza como valor del accumulator inicial.
_________________________________________________________________
Rx.Observable.prototype.scan(accumulator, [seed])
*/