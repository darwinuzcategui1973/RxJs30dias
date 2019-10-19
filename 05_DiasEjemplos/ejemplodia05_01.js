var observable = Rx.Observable.create(function subscribe(observador) {
    var id = setInterval(() => {
      observador.next('Hola')
    },8000);
  });
  // subcricion de observable
  observable.subscribe(x => console.log(x));