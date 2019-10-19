function cualquierFuncion() {
  console.log("Hola");
  return 42;
}

console.log("Ante");
console.log(cualquierFuncion.call());
console.log("Despues");

// ******************************

// reactivaX
console.log("****** Con RxJs ******");
var cualquierObservable = Rx.Observable.create(function(observer) {
  console.log("Hola");
  observer.next(42);
});

// aqui llamamos
console.log("Ante");
cualquierObservable.subscribe(function(x){
    console.log(x);
});
console.log("Despues");