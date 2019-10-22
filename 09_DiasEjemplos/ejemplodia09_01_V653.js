// importaciones
const { Subject, from } = rxjs;
const { multicast } = rxjs.operators;

let fuente = from([1, 2, 3, 5,'darwin']);
let subject = new Subject();
// el operador multicast
let multicasted = fuente.pipe(multicast(subject));
//const multicasted = source.pipe(multicast(subject));
// ahora no sucribimos a multicaste
multicasted.subscribe({
  next: valor => console.log('Observador A ' + valor)
});
multicasted.subscribe({
  next: valor => console.log('Observador B ' + valor)
});
// para que se ejecute se realiza el conect
// This is, under the hood, `source.subscribe(subject)`:
multicasted.connect();

/*
const subject = new Subject();

subject.subscribe({
  next: v => console.log(`observerA: ${v}`)
});
subject.subscribe({
  next: v => console.log(`observerB: ${v}`)
});
subject.subscribe({
  next: v => console.log(`observerc: ${v}`)
});

subject.next(1);
subject.next(2);
subject.next('darwin');

// La salida por console:
// observerA: 1
// observerB: 1
// observerA: 2
// observerB: 2

*/
