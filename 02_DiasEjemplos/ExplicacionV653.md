# Actualizacón de La version 6.5.3
## Para Actulizar  Los ejemplos de Día 2.

### Pasos 

1. Se cocoloca en *const* los eventos y  operadores que se utilizan 
```js

const { fromEvent } = rxjs;
const { scan, throttleTime } = rxjs.operators;


```
2. Ya no se Utliza el llamado del *Rx.Observable.* para los eventos se pasa directamente el evento *fromEvent(botonRxjs, 'click')* Ejem con Code. 
```js
// codigo Versión 5
Rx.Observable.fromEvent(botonRxjs, 'click')
// Ahora con la Versión 6
fromEvent(botonRxjs, 'click')

```
3. Ahora todos los operadores se Pasan por el  operadores  *PIPE*.

```js
.pipe(
    throttleTime(2000),
    scan(contadorRxjs => contadorRxjs + 1, 0)
  )
```
*Cod Completo queda asi:*
```js
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


```

