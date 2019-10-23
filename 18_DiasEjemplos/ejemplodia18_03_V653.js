// importaciones rxjs
const { Observable, fromEvent, timer, empty } = rxjs;
// importar los operadopres
const {
  map,
  filter,
  throttleTime,
  merge,
  mapTo,
  scan,
  startWith,
  switchMap
} = rxjs.operators;

const input = document.getElementById('input');
let entradaTotal = '';
input.focus();
let mover = true;

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
  if (mover) {
    const y = v.clientY + 10 + 'px';
    const x = v.clientX + 10 + 'px';
    texto.style.top = y;
    texto.style.left = x;
    texto.style.position = 'absolute';
  }
}
// FIXME: PENDIENTE REVISAR EL BOTON DE PAUSE 

const pauseResume = fromEvent(button, 'click').pipe(
  scan(acc => !acc, true),
  startWith(true),
  switchMap(resume => (resume ? timer(0, 1000) : empty()))
);

// const counter = timer(0, 1000);
// const emptyO = empty();
//pauseResume.switchMap(resume => (resume ? counter : emptyO));

pauseResume.subscribe({
  next: v => {
    mover = v;
    mover ? (button.innerText = 'Pause') : (button.innerText = 'Start');
  }
});
