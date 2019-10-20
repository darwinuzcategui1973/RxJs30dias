# ReactiveX Dia 07 SUBSCRIPTION

---

`cdn v6.5.3`

## ¿Qué es un Subscription?

_Una suscripción es un objeto que representa un recurso desechable, generalmente la ejecución de un observable. Una suscripción tiene un método importante unsubscribe, que no requiere argumentos y solo elimina el recurso que posee la suscripción. En versiones anteriores de RxJS, la Suscripción se llamaba "Desechable"._

```JS

const { interval } = rxjs;

const observable = interval(1000);
const subscription = observable.subscribe(x => console.log(x));
// Despues:

// Esto  cancela el Obervable en curso.
// se inició llamando al suscribirse con un observador..

subscription.unsubscribe();
```

**Una suscripción solo tiene una función** _unsubscribe()_ **para liberar recursos o cancelar ejecuciones de observables.**

---

Las suscripciones también pueden ser agrupadas, de modo que una llamada a un `subscription()` de una suscripción puede anular la suscripción de varias suscripciones. Puede hacerlo agregando un subscription a otro:

```js
const { interval } = rxjs;

const observable1 = interval(400);
const observable2 = interval(300);

const subscription = observable1.subscribe(x => console.log("Primer: " + x));
const childSubscription = observable2.subscribe(x =>
  console.log("Segunda: " + x)
);

subscription.add(childSubscription);

setTimeout(() => {
  // Unsubscribes Cancela la suscripción de AMBAS y de suscripciones hija o secundarias
  subscription.unsubscribe();
}, 1000);
```

_Cuando se ejecuta, vemos en la consola:_

```
Segundo: 0
Primero: 0
Segundo: 1
Primero: 1
Segundo: 2
```

_Los Subscriptions también tienen un método remove_ **(otherSubscription)**, con el fin de deshacer la adición de una suscripción hijo.*
