// importaciones rxjs
const { Observable, fromEvent } = rxjs;
// importar los operadopres
const { map, filter } = rxjs.operators;

const input = document.getElementById('input');
let entradaTotal = '';
input.focus();
var receptor = fromEvent(input, 'keydown').pipe(
  map(e => e.key),
  filter(key => key !== ' ')
);
receptor.subscribe({
  next: v => insert(v),
  error: err => console.log(error),
  complete: () => console.log('complete')
});
function insert(v) {
  entradaTotal += v;
  console.log(entradaTotal);
}
