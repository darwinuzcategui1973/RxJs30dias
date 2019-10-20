const { interval } = rxjs;

const observable = interval(1000);
const subscription = observable.subscribe(x => console.log(x));
// Despues:

// Esto  cancela el Obervable en curso.
// se inició llamando al suscribirse con un observador..

subscription.unsubscribe();