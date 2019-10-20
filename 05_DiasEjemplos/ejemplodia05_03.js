
var observable = Rx.Observable.create(function subscribe(observador) {
  var intervalID = setInterval(() => {
    // codigo "A"
    observador.next("Hola uno ");
  }, 8000);
  // Proporcionar una forma de cancelar y eliminar el recurso de intervalo.
  return function unsubscribe() {
    clearInterval(intervalID);
  };
});
// subcricion de observable cada subcricion ejecuta este codigo "A" Independientemente
observable.subscribe(x => console.log(x));
/*
Este ejemplo lo colocamos como una funcion pura de Javascrip
*/
function subscribe(observer) {
    var intervalID = setInterval(() => {
      observer.next('hola');
    }, 1000);
  
    return function unsubscribe() {
        clearInterval(intervalID);
    };
  }
  
  var unsubscribe = subscribe({next: (x) => console.log(x)});
  
  // Más tarde::
  unsubscribe(); // disponer de los recursos

