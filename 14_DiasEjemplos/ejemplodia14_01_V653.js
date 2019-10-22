// importaciones
const { Observable, from } = rxjs;
const { map } = rxjs.operators;

//const observable = new Observable(observer => {
function multiplyX10(input) {
  var output = new Observable(function subscribe(observer) {
    input.subscribe({
      next: v => observer.next(10 * v),
      error: err => observer.error(err),
      complete: () => observer.complete()
    });
  });
  return output;
}

var input = from([1, 2, 3, 4]);
var output = multiplyX10(input);
console.log('Aqui va el Observable Input');

input.subscribe(x => console.log(x));

console.log(
  'Aqui va el Observable Salida que llamo la funcion multiplicar x 10 Input'
);

output.subscribe(x => console.log(x));
