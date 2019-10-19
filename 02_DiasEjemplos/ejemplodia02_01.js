// Creamo el contador
var contadorJs = 0;
// Obtener el Boton Referenciarlos con id
var boton = document.getElementById('JsBtn');
// poner a encutar
boton.addEventListener('click', () => console.log(`Js Click ${++contadorJs} vece(s) `));

// Obtener el Boton Referenciarlos con id
var botonRxjs = document.getElementById('RxJsBtn');
Rx.Observable.fromEvent(botonRxjs, 'click')
    //Rx.Observable.fromEvent(button, 'click')
    // Utilizando la funcion ReactiveX 
    // scan() (sumar 1 al contador)
    // el operador scan() devuelver el valor de la funcion
     .scan(contadorRxjs => contadorRxjs + 1, 0)
    // por Utimos los suscribimos al Observable que hacemos
    // subcribe(recibimos el contador y lo imprimimos)
    .subscribe(contadorRxjs => console.log(`RxJs Click ${contadorRxjs} vece(s)`));
