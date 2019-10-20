// importaciones

const { Observable } = rxjs;


function cualquierFuncion() {
    console.log("Hola");
    return 42;
}

var x = cualquierFuncion.call();
console.log(x);
var y = cualquierFuncion.call();
console.log(y);

// reactivaX

//const foo = new Observable(subscriber => {
console.log("****** Con RxJs ******");

var cualquierObservable = new Observable(observer => {
  console.log("Hola");
  observer.next(42);
});

cualquierObservable.subscribe(x => {
  console.log(x);
});
cualquierObservable.subscribe(y => {
  console.log(y);
});
