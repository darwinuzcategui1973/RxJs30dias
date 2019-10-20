# Dias 3 Cambio RxJS V6.
### CDN 6.5.3

### Observable
*Los observables son colecciones Push diferidas de múltiples valores.*


| protocol.| Sigles   | Multiples  |
| :------- | :------: | :-----:    |
| Pull     | Function | Iterador   |
| Push     | Promise  | Observable |



**Paso para actulizar el code utilizando** *CDN* *Utilizando  la Ultima Estable V6.5.3*
1. Colocar la version de la lib de CDN en HTML
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/rxjs/6.5.3/rxjs.umd.js">
</script>
  
  <script src="ejemplodia03_01_V653.js">
  </script>

```
2. Importar  lo Objetos y operdores que va Utilizar

```
const { Observable } = rxjs;

```
3. Intaciar el Objeto Observable.
*const observable = new Observable()*
*Anterirmente se Utilizada Rx.Observable.create*

```js
// code V5 RxJs
var observable = Rx.Observable.create(function(observer)
// Code V6 RxJs
const observable = new Observable(subscriber => {} )
```
### Aqui en Codigo Completo Actulizado RxJS V6
```js
/*
+----------------------------------+
| protocol.| Sigles   | Multiples  |
| :------- | :------: | :-----:    |
| Pull     | Function | Iterador   |
| Push     | Promise  | Observable |
+----------------------------------+
*/
// Importaciones
const { Observable } = rxjs;

const observable = new Observable(observer => {
    observer.next(1); // aqui hacemos push sicronico
    observer.next(2);
    observer.next("aqui sabemos cuando se va ejecutar la funcion hola  despues de 2 "+hola());
    observer.next(3);
    observer.next(3.4);
    
    
    // con SetTimeot pasamos un datos restardado o lento o Lazy
    setTimeout(() => {
      observer.next(4);
    //  Despues le damos el metodto completado  
      observer.complete();
    }, 2000);
    setTimeout(() => {
      observer.next(5);
    //  sabemos que se ejecuta despues 1 seg  
      }, 1000);
  });
  
  console.log("justamente antes de subscribirnos");
  observable.subscribe({
    next: x => console.log("x vale", x),
    error: err => console.log("algo salio mal", err),
    complete: () => console.log("Completado")
  });
  console.log("justamente despues de subscribirnos");
  
  function hola(){
   return "hola";
  }
  console.log(" aqui no sabemos en que tiempo se va ejecuta esta funcion ",hola());
  

```


 


