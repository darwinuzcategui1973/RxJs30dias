# Observables
Los observables son *“lazy Push collections”* de valores múltiples.
Es el punto que nos faltaba para rellenar el }}punto faltante en la siguiente tabla:

| protocol.| Sigles   | Multiples  |
| :------- | :------: | :-----:    |
| Pull     | Function | Iterador   |
| Push     | Promise  | Observable |

Lo siguiente es un Observable que hace push de los valores 1, 2, 3 inmediatamente (sincrónicamente) cuando se suscribe, y el valor 4 después de un segundo ha pasado desde la llamada de suscripción, y luego se completa:
 
```javascript
var observable = Rx.Observable.create(function (observer) {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  setTimeout(() => {
    observer.next(4);
    observer.complete();
  }, 1000);
});
```
#### Para invocar el Observable y ver estos valores, debemos subscribirnos:

```javascript
 var observable = Rx.Observable.create(function (observer) {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  setTimeout(() => {
    observer.next(4);
    observer.complete();
  }, 1000);
});

console.log('just before subscribe');  //linea 29
observable.subscribe({
  next: x => console.log('got value ' + x),
  error: err => console.error('something wrong occurred: ' + err),
  complete: () => console.log('done'),
});
console.log('just after subscribe');
```

  
*Por lo tanto ahora podemos ejecutar funciones sincrónicas y asincrónicas en el mismo algoritmo.*
 
 ## Pull vs Push

 Pull and Push son dos protocolos diferentes cómo un productor de datos puede comunicarse con un consumidor de datos.
 
 *¿Qué es Pull? En los sistemas Pull, el consumidor determina cuándo recibe los datos del productor de datos. El propio productor no tiene conocimiento de cuándo los datos serán entregados al consumidor.*

*Cada función JavaScript es un sistema Pull. La función es un Productor de datos, y el código que llama a la función es consumirla “tirando/puleando” (pulling) un solo valor de retorno de su llamada.*

*ES2015 introdujo funciones de generador e iteradores (función *), otro tipo de sistema Pull. El código que llama iterator.next () es el consumidor, “tirando/puleando” (pulling) múltiples valores del iterador (el productor).*

### Producer/Productor:

**Pull => Pasivo:** produce datos cuando se solicita.

**Push =>Active:** produce datos a su propio ritmo.

### Consumer/Consumidor:

**Pull =>Activo:** decide cuándo se solicitan los datos.

**Push => Pasivo:** reacciona a los datos recibidos.

**¿Qué es Push?** En los sistemas Push, el productor determina cuándo enviar los datos al consumidor. El consumidor no sabe cuándo recibirá esos datos.

Las promesas son el tipo más común de sistema Push en JavaScript en la actualidad. Una Promesa (el Productor) entrega un valor resuelto a las devoluciones de llamada registradas (los Consumidores), pero a diferencia de las funciones, es la Promesa la que se encarga de determinar con precisión cuándo ese valor es “empujado” a las devoluciones de llamada.

RxJS introduce Observables, un nuevo sistema Push para JavaScript. Un Observable es un Productor de valores múltiples, “empujándolos” a Observadores (Consumidores).

*Una función es un cálculo evaluado “lazy” que devuelve de forma síncrona un único valor en la invocación.*

*Un generador es un cálculo evaluado “lazy” que devuelve de forma sincrónica cero a (potencialmente) valores infinitos en la iteración.*

*Una Promesa es un cálculo que puede (o no) devolver un solo valor.*

*Un Observable es un cálculo evaluado lentamente o perezosamente que puede regresar cero de forma síncrona o asíncrona a valores (potencialmente) infinitos desde el momento en que se invoca en adelante.*



