// importaciones
const { Observable, from, merge, interval } = rxjs;

Observable.prototype.multiplyByTen = function multiplyByTen() {
  var input = this;
  var darwin = this;
  return new Observable(function subscribe(observer) {
    input.subscribe({
      next: v => observer.next(10 * v),
      error: err => observer.error(err),
      complete: () => observer.complete()
    });
  });
  darwin = 'AAAAAAA';
};

var observable = from([1, 2, 3, 4]).multiplyByTen();
var observableOtraIntancia = from([6, 7, 8, 9]).multiplyByTen();
observable.subscribe(x => console.log(x));
observableOtraIntancia.subscribe(x => console.log(x));

console.log('el otro ejecicio operadores estaticos');
var observableEstatico1 = interval(5000 /* number of milliseconds */);
var observableEstatico2 = interval(500 /* number of milliseconds */);

const observeUnidos = merge(observableEstatico1, observableEstatico2);
observeUnidos.subscribe(x => console.log(x));
