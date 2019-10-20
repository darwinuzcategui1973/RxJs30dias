# ReactiveX Dia 06 SUBJECT

---

`cdn v6.5.3`

## ¿Qué es un Subject?

_Un Subject de RxJS es un tipo especial de Observable que permite que los valores sean “multicasted”(multiplicadores) a muchos observadores. Mientras que los Observables simples son unicast (cada Subject es una ejecución independiente del Observable), los Subject son multicast._

**Un Subject es como un observable, pero puede multicastear a muchos Observers. Los Subjects son como EventEmitters: mantienen un registro de muchos listeners.**

---

Todo Subject es un Observable. Dado un Subject, puede suscribirse a él, proporcionando un Observer, el cual comenzará a recibir valores normalmente. Desde la perspectiva del Observer, no puede decir si la ejecución observable proviene de un unicast Observable o un Subject.

Internamente el Subject, “subscribe” no invoca una nueva ejecución que entrega valores. Simplemente registra el Observer dado en una lista de Observers, similarmente a cómo `addListener` normalmente funciona en otras bibliotecas e idiomas.

Cada Subject es un Observer. Es un objeto con los métodos `next(v)`, `error (e)`, y `complete()`. Para alimentar un nuevo valor del Subject, simplemente hay que llamar a `next(valor)`, y se enviará a los Observers registrados para escuchar el Subject.

_En el ejemplo a continuación, tenemos dos Observers adjuntos a un Subject, y alimentamos algunos valores del Subject:_

```js
const { Subject } = rxjs ;

const subject = new Subject<number>();

subject.subscribe({
  next: (v) => console.log(`observerA: ${v}`)
});
subject.subscribe({
  next: (v) => console.log(`observerB: ${v}`)
});

subject.next(1);
subject.next(2);

// La salida por console:
// observerA: 1
// observerB: 1
// observerA: 2
// observerB: 2

```

_Dado que un Subject es un Observer, esto también significa que puede proporcionar un Subject como argumento al subscribe de cualquier observable, como en el siguiente ejemplo:_

```js
const { Subject, from } = rxjs;

const subject = new Subject<number>();

subject.subscribe({
  next: (v) => console.log(`observerA: ${v}`)
});
subject.subscribe({
  next: (v) => console.log(`observerB: ${v}`)
});

const observable = from([1, 2, 3]);

observable.subscribe(subject); // You can subscribe providing a Subject

// Logs:
// observerA: 1
// observerB: 1
// observerA: 2
// observerB: 2
// observerA: 3
// observerB: 3

```

Esencialmente hemos convertido un “unicast” de ejecución observable a “multicast”, a través del Subject. Esto demuestra cómo los Subject son la única manera de hacer que cualquier ejecución observable sea compartida con múltiples Observers.

_También hay algunas especializaciones del tipo **Subject**: `BehaviorSubject`, `ReplaySubject` y `AsyncSubject`._
