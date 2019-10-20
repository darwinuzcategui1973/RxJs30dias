// importaciones
const { Observable } = rxjs;

var observable = new Observable(observador => {
    var id = setInterval(() => { // codigo "A"
      observador.next("Hola");
    }, 1000);
  });
  // subcricion de observable cada subcricion ejecuta este codigo "A" Independientemente
  observable.subscribe(x => console.log(x));
  observable.subscribe(x => console.log(x));
  observable.subscribe(x => console.log(x));
  observable.subscribe(x => console.log(x));