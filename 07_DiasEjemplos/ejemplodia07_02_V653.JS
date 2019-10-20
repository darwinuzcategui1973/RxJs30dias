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