// Creamo el contador
var contadorJs = 0;
// Obtener el Boton Referenciarlos con id
var boton = document.getElementById('JsBtn');
// poner a encutar
boton.addEventListener('click', () => console.log(`Js Click ${++contadorJs} vece(s) `));
// Rxjs Versión Nueva 6.5.3
const { fromEvent } = rxjs;
const { scan } = rxjs.operators;


// Obtener el Boton Referenciarlos con id
var botonRxjsV6 = document.getElementById('RxJsBtn');

    fromEvent(botonRxjsV6, 'click')
    .pipe(
    
    scan(contadorRxjs => contadorRxjs + 1, 0)
    )
    // por Utimos los suscribimos al 
    // subcribe(recibimos el contador y lo imprimimos)
    .subscribe(contadorRxjs => console.log(`RxJs V6 Click ${contadorRxjs} vece(s)`));
