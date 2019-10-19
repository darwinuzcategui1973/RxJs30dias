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

// Obtener el Boton Referenciarlos con id
var botonRxjs = document.getElementById('RxJsBtn');
Rx.Observable.fromEvent(botonRxjs, 'click')
// con este operador limitamos el tiempo de evento lo que hacemos alla con if throttleTime(tiempoMlg)
.throttleTime(2000)
    //Rx.Observable.fromEvent(button, 'click')
    // Utilizando la funcion ReactiveX 
    // scan() (sumar 1 al contador)
    // el operador scan() devuelver el valor de la funcion
     .scan(contadorRxjs => contadorRxjs + 1, 0)
    // por Utimos los suscribimos al Observable que hacemos
    // subcribe(recibimos el contador y lo imprimimos)
    .subscribe(contadorRxjs => console.log(`RxJs Click ${contadorRxjs} vece(s)`));

    /*
    throttleTime, lo que hace es darle un tiempo para la ejecución, de esa forma vamos a ver que no nos va a dejar hacer mas de 1 click por 2 segundo. en este ejemplo
   
    Para ser un poco mas “técnico” throttleTime Emite un valor en la llamada del Observable, luego ignora la llamada subsiguiente ( si no cumple con los milisegundos).
   
    */