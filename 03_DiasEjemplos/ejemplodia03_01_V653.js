
// Importaciones
const { Observable } = rxjs;

const observable = new Observable(observer => {
    observer.next(1); // aqui hacemos push sicronico
    observer.next(2);
    observer.next("aqui sabemos cuando se va ejecutar la funcion hola  despues de 2 "+hola());
    observer.next(3);
    observer.next(3.4);
    
    
    // con SetTimeot pasamos un datos restardado o lento o Lazy
    setTimeout(() => {
      observer.next(4);
    //  Despues le damos el metodto completado  
      observer.complete();
    }, 2000);
    setTimeout(() => {
      observer.next(5);
    //  sabemos que se ejecuta despues 1 seg  
      }, 1000);
  });
  
  console.log("justamente antes de subscribirnos");
  observable.subscribe({
    next: x => console.log("x vale", x),
    error: err => console.log("algo salio mal", err),
    complete: () => console.log("Completado")
  });
  console.log("justamente despues de subscribirnos");
  
  function hola(){
   return "hola";
  }
  console.log(" aqui no sabemos en que tiempo se va ejecuta esta funcion ",hola());
  