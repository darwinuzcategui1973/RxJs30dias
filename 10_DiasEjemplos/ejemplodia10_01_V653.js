// importaciones

const { interval, Subject } = rxjs;
const { multicast } = rxjs.operators;

var fuente = interval(500);
var subject = new Subject();
// el operador multicast
var multicasted = fuente.pipe(multicast(subject));
let subcripcion1, subcripcion2, subcripcionConectar;
//const multicasted = source.pipe(multicast(subject));
// ahora no sucribimos a multicaste
subcripcion1 = multicasted.subscribe({
  next: valor => console.log('Observador A ' + valor)
});
// conectamos a la subcripcion
subcripcionConectar = multicasted.connect();


setTimeout(() => {
  subcripcion2 = multicasted.subscribe({
    next: v => console.log(`observerB: ${v}`)
  });
}, 600);

setTimeout(() => {
  subcripcion1.unsubscribe();
}, 1200);

setTimeout(() => {
  subcripcion2.unsubscribe();
  subcripcionConectar.unsubscribe(); // for the shared Observable execution
}, 2000);
