// importaciones rxjs
const { Observable, fromEvent } = rxjs;
// importar los operadopres
const { map, filter, throttleTime, merge, mapTo } = rxjs.operators;

const input = document.getElementById('input');
let entradaTotal = '';
input.focus();

// Obervable
var receptor = fromEvent(input, 'keydown').pipe(
  map(e => e.key),
  filter(key => key !== ' ')
);
receptor.subscribe({
  next: v => insert(v),
  error: err => console.log(error),
  complete: () => console.log('complete')
});
// fin del observable

function insert(v) {
  entradaTotal += v;
  console.log(entradaTotal);
}

var mouseReceptor = fromEvent(document, 'mousemove').pipe(
  map(event => event),
  throttleTime(250)
);
mouseReceptor.subscribe({
  next: v => mouseInsert(v),
  error: err => console.log(error),
  complete: () => console.log('complete')
});

function mouseInsert(v) {
  console.log(v.clientY, v.clientX);
}
