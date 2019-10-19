# Observables como generalizaciones de funciones
Contrariamente a las afirmaciones populares, Observables no son como EventEmitters ni son como Promesas para múltiples valores. Observables pueden actuar como EventEmitters en algunos casos, es decir, cuando se “multicastean” utilizando RxJS “Subjects”, pero por lo general no actúan como EventEmitters.

*Los observables son como funciones con argumentos cero, pero generalizan los que permiten valores múltiples.*

### Aqui la Funcion en Javascrip "puro":
```javascript
 function cualquirFuncion() {
  console.log('Hola');
  return 42;
}

var x = cualquirFuncion.call();
console.log(x);
var y = cualquirFuncion.call();
console.log(y);
```
### Y ahora lo mismo Cualquier funcion  en RxJS

```javascript
var cualquierFuncion = Rx.Observable.create(function (observer) {
  console.log('Hola');
  observer.next(42);
});

cualquierFuncion.subscribe(function (x) {
  console.log(x);
});
cualquierFuncion.subscribe(function (y) {
  console.log(y);
});

```
*Y si ejecutamos ambas funcionalidades vamos a ver que el resultado es:*

```
hola
42
Hola
42
```
Esto sucede porque tanto las funciones como los observables son cálculos “lazy” . Si no llama a la función, el console.log (‘Hello’) no sucederá. También con Observables, si no lo “llamas” (con subscribe), no se producirá el console.log (‘Hello’). Además, “llamar” o “suscribir” es una operación aislada: dos llamadas de función desencadenan dos efectos secundarios independientes y dos suscripciones observables disparan dos efectos secundarios independientes. A diferencia de EventEmitters que comparten los efectos secundarios y tienen ejecución ansiosa independientemente de la existencia de suscriptores, Observables no tienen ejecución compartida y son perezosos.

### Suscribirse a un Observable es análogo a llamar a una Función.

*“los Observables son asíncronos” Eso no es verdad. Si rodea una llamada de función con registros, como esto:*

```javascript
console.log('Ante');
console.log(cualquierFuncion.call());
console.log('Despues');
```
```
"Ante"
"hola"
42
"despues"
```
*Y ahora haremos lo “mismo” o mejor dicho obtendremos el mismo resultado con RxJS*

```javascript
console.log('antes');
cualquierFuncion.subscribe(function (x) {
  console.log(x);
});
console.log('despues');
```

*Y el resultado es:*

```
"Ante"
"hola"
42
"despues"
```
*Lo que demuestra que la suscripción de cualquierFuncion era totalmente sincrónica, al igual que una función.*

**Los observables pueden entregar valores de forma síncrona o asíncrona.**

*¿Cuál es la diferencia entre un observable y una función?*

**Los observables pueden “devolver” múltiples valores a lo largo del tiempo, algo que las funciones no pueden.**

```javascript
function cualquierFuncionJavaScripts() {
  console.log('Hola Darwin');
  return 42;
  return 100; // el codigo Mueren en primer Return. Nunca se Ejecutar esto
}
```

*al llmar la  resultado de la funcion es*
```
cualquierFuncionJavaScripts()
"Hola Darwin"
42
```

### Con Programación ReactivaX

```javascript
var cualQuier_Observable = Rx.Observable.create(function (observer) {
  console.log('Hola Darwin');
  observer.next(42);
  observer.next(100); // "return" otros valores
  observer.next(200); // "return" siii otros valores
});

console.log('ante');
cualQuier_Observable.subscribe(function (x) {
  console.log(x);
});
console.log('despues');
```
*El resultado Sicronico seria*

```
"antes"
"Hola Darwin"
42
100
200
"despues"
```
*Pero también puede “devolver” valores asincrónicamente:*

```javascript
var cualquierObservable = Rx.Observable.create(function (observer) {
  console.log('Hola Darwin');
  observer.next(42);
  observer.next(100);
  observer.next(200);
  setTimeout(() => {
    observer.next(300); // para hacerlo asincrono
  }, 1000);
});

console.log('antes');
cualquierObservable.subscribe(function (x) {
  console.log(x);
});
console.log('despues');
```
*El Resultado:*
```
"antes"
"Hola Darwin"
42
100
200
"despues"
300
```
**Conclusión:**
*func.call()* significa “darme un valor sincrónicamente”.

**observable.subscribe()** significa “darme cualquier cantidad de valores, de forma síncrona o asíncrona”





