var observable = Rx.Observable.create(function subscribe(observador) {
    try{
        observador.next(1);
        observador.next(2);
        observador.next(3);

    }
    catch(err){
        observador.error(err);

    }
     
 
  });
 
  var observable1 = Rx.Observable.from([10, 20, 30,34,"hola"]); // otra forma de crear un Observable
  observable.subscribe(x => console.log(x));

  var subcripcionEnCurso = observable.subscribe(x=>console.log(x));
  // para terminacion una supcripcion en unsubcribe();
  var subcripcionEnCurso1 = observable1.subscribe(x=>console.log(x));
 subcripcionEnCurso1.unsubscribe();


 