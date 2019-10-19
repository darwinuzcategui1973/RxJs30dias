function cualquirFuncion() {
  console.log("Hola");
  return 42;
}

var x = cualquirFuncion.call();
console.log(x);
var y = cualquirFuncion.call();
console.log(y);

// reactivaX
console.log("****** Con RxJs ******");
var cualquierObservable = Rx.Observable.create(function(observer) {
  console.log("Hola");
  observer.next(42);
});

cualquierObservable.subscribe(function(x) {
  console.log(x);
});
cualquierObservable.subscribe(function(y) {
  console.log(y);
});
