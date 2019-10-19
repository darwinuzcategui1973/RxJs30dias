# Este es el día 5 de ReactiveX

 y vamos a ver mas sobre los **“Observables”**
 
 *Ya entendi Bien o eso lo que creo la idea de estos* **Tutoriales** *por eso entiendo hoy al 5 día* **RxJS**, *las diferencias entre pull y push, los observables como generalizaciones de funciones, es el momento de:*

## Anatomía de un observable

Los observables se crean utilizando: 
```javascript
Rx.Observable.create
```
 o un operador de creación, se suscriben con un Observer, se ejecutan para entregar “next”/ “error”/ “complete” al Observer, y su ejecución puede eliminarse. Estos cuatro aspectos están codificados en una instancia Observable, pero algunos de estos aspectos están relacionados con otros tipos, como Observer y Subscription.
 ## Conceptos Centrales de ReactiveX (Core Concepts:):
 
 1. **Creación** Observables.
 2. **Subscripción** al los Observables.
 3. **Ejecución** del Observable.
 4. **Cancelación** Observables.
 
 ## Creación Observables
```Rx.Observable.create``` es un alias para el constructor **Observable** , y toma un argumento:a la función subscribe.

*El siguiente ejemplo crea un Observable para emitir la cadena ‘hola’ cada segundo a un observador.*
```javascript
var observable = Rx.Observable.create(function subscribe(observer) {
  var id = setInterval(() => {
    observer.next('Hola')
  }, 1000);
});
```


*Observables se pueden crear con **create**, pero usualmente usamos los llamados operadores de creación:* **like of, from, interval, etc.**

****
En el ejemplo anterior, la función de suscripción es la pieza más importante para describir el Observable.

### ¿Qué significa subscribirse?

El observable “observable” en el ejemplo se puede suscribir, como esto:

```js
observable.subscribe(x => console.log(x));
```
No es una coincidencia que observable.subscribe y subscribe en Observable.create(function subscribe (observer) {…}) tienen el mismo nombre.
 En la biblioteca, son diferentes, pero para fines prácticos se pueden considerar conceptualmente iguales.

 Esto muestra cómo las llamadas de suscripción no se comparten entre múltiples Observers del mismo Observable. Al llamar observable.subscribe con un Observer, la función se suscribe en Observable.create (la función subscribe (Observers) {…}) se ejecuta para ese Observer dado. Cada llamada a observable.subscribe desencadena su propia configuración independiente para el Observers dado.

 **Suscribirse a un Observable es como llamar a una función, proporcionando devoluciones de llamada donde se entregarán los datos.**

 *Esto es muy diferente a las API de event handler como addEventListener / removeEventListener. Con observable.subscribe, el Observer dado no está registrado como un listener en el Observable. El Observable ni siquiera mantiene una lista de observadores adjuntos.*
 
 Una llamada al subscribe es simplemente una forma de iniciar una “ejecución observable” y entregar valores o eventos a un observer de esa ejecución.

 ## Ejecución observable

 El código dentro de ```
 Observable.create (function subscribe (observer) {…}) ```  representa una “ejecución observable”, un cálculo lazy que sólo ocurre para cada observer que se suscribe. La ejecución produce múltiples valores a lo largo del tiempo, ya sea de forma síncrona o asíncrona.
 
 Hay tres tipos de valores que una ejecución observable puede ofrecer:
 ***

 **“next”:** envía un valor como un número, una cadena, un objeto, etc.

**“error”:** envía un error o excepción de JavaScript.

**“complete”:** no envía un valor.

Estas limitaciones se expresan mejor en la llamada Gramática Observable o Contrato, escrita como una expresión regular:
```regx
next*(error|complete)?
```
****
En una ejecución observable, son de cero a infinito Las notificaciones “next” que pueden ser entregadas. Si se entrega una notificación de error o complete, no se puede entregar nada más.

*veamos en un ejemplo:*

```js
var observable = Rx.Observable.create(function subscribe(observer) {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  observer.complete();
});
```
*En este caso nos va a entregar los 3 valores y luego terminar.*

```js
var observable = Rx.Observable.create(function subscribe(observer) {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  observer.complete();
  observer.next(4); // No se entrega porque complete termina el subscribe
});
```
*Pero en este caso, el cuarto valor no va a ser entregado nunca, ya que paso por “complete”.*

Como siempre es una buena idea utilizar try / catch que entregará una notificación de error si detecta una excepción:

```js
var observable = Rx.Observable.create(function subscribe(observer) {
  try {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.complete();
  } catch (err) {
    observer.error(err); // entrega un error si detecta uno
  }
});
```
## Cancelar la ejecución de un Observable

Debido a que las ejecuciones observables pueden ser infinitas, y es común que un observer quiera cancelar la ejecución en tiempo finito, necesitamos una API para cancelar una ejecución. Puesto que cada ejecución es exclusiva de un observer solamente, una vez que el observer ha terminado de recibir valores, tiene que tener una manera de detener la ejecución, para evitar perder el poder de cálculo o recursos de memoria.

Cuando se llama a *observable.subscribe*, el observer se une a la ejecución recién creada del observable, pero también esta llamada devuelve un objeto,a la suscripción:

```js
var subscription = observable.subscribe(x => console.log(x));
```
La suscripción representa la ejecución en curso y tiene una API mínima que le permite cancelar esa ejecución. Con ```suscripcion.unsubscribe()```
 puede cancelar la ejecución en curso:

```js
 var observable = Rx.Observable.from([10, 20, 30]);
var suscripcion = observable.subscribe(x => console.log(x));
suscripcion.unsubscribe();
```
**Al suscribirse, obtiene una suscripción, que representa la ejecución en curso. Simplemente con llamar ```unsubscribe()``` podremos cancelar la ejecución.**

Cada Observable debe definir cómo cancelar los recursos de esa ejecución cuando creamos el Observable usando ```create()```. Puede hacerlo devolviendo una función de anulación de suscripción personalizada dentro de la función ```subscribe()```.

Por ejemplo, esto es como se borra un conjunto de ejecución de intervalos con setInterval:

```js
var observable = Rx.Observable.create(function subscribe(observador) {
  // 
Realizar un seguimiento del recurso de intervalo
  var intervalID = setInterval(() => {
    observador.next('hola');
  }, 1000);

  // Proporcionar una forma de cancelar y eliminar el recurso de intervalo.
  return function unsubscribe() {
    limpiarInterval(intervalID);
  };
});

```

Al igual que observable.subscribe se asemeja a ```Observable.create (function subscribe () {…})```, el unsubscribe que devuelve de subscribe es conceptualmente igual a ```subscripcion.unsubscribe.``` De hecho, si eliminamos los tipos ReactiveX que rodean estos conceptos, nos quedamos con JavaScript bastante “puro”.
***

```
function subscribe(observer) {
  var intervalID = setInterval(() => {
    observer.next('hola');
  }, 1000);

  return function unsubscribe() {
    limpiarIntervalo(intervalID);
  };
}

var unsubscribe = subscribe({next: (x) => console.log(x)});

// Más tarde::
unsubscribe(); // disponer de los recursos

```

