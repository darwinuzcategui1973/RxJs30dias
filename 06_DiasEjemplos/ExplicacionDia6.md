# Este es el día 6 de ReactiveX

###

_Este es el día y vamos a ver mas sobre los “Observers”!_

## ¿Qué es un observer?

Un Observer es un consumidor de valores entregados por un Observable.

Los Observers son simplemente un conjunto de callbacks, uno para cada tipo de notificación entregado por el **Observable: next, error, y complete.** El siguiente es un ejemplo de un objeto Observer típico:

```js
var observador = {
  next: x => console.log("Observador obtuve el siguiente valor: " + x),
  error: err => console.error("Observador tienes un errorr: " + err),
  complete: () => console.log("Observador completaste la Observacion")
};
```
Para poder usar el Observador, necesitamos obtenerlo del subscribe de un Observable:

```js 
observable.subscribe(observador);
```
****
*Los Observers son sólo objetos con tres callbacks, uno para cada tipo de notificación que un Observable puede entregar.*

Los Observers en RxJS también pueden ser parciales. Si no proporciona una de las devoluciones de llamada, la ejecución del Observable continuará normalmente, excepto que algunos tipos de notificaciones serán ignorados, ya que no tienen una devolución de llamada correspondiente en el Observer.

El siguiente ejemplo es un Observer sin la devolución de llamada completa:

```js
var observer = {
  next: x => console.log('Observer dame un proximo valor: ' + x),
  error: err => console.error('Observer dame el error: ' + err),
};

```
Al suscribirse a un Observable, también puede proporcionar las devoluciones de llamada como argumentos, sin estar conectado a un objeto Observer, por ejemplo, como esto:

```js

observable.subscribe(x => console.log("Observa el procimo valor: " + x));

```

Internamente en ```observable.subscribe``` , creará un objeto Observer utilizando el primer argumento de devolución de llamada como el siguiente controlador. Los tres tipos de devoluciones de llamada pueden proporcionarse como argumentos:

```js
observable.subscribe(
  x => console.log('Observer el proximo  valor: ' + x),
  err => console.error('Observer el error: ' + err),
  () => console.log('Observer completo la subcripcion')
);
```
