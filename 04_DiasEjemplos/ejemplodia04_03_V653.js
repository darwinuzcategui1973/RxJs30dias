// importaciones
const { Observable } = rxjs;

function cualquierFuncionJavaScripts() {
    console.log("Hola Darwin");
    return 42;
    return 100; // el codigo Mueren en primer Return. Nunca se Ejecutar esto
  }
  console.log(cualquierFuncionJavaScripts());
  console.log("**** Con OBSERVABLE*** Rxjs*****")
  
  // Con RxJs ****************************
  var cualQuier_Observable = new Observable  (observer=> {
      console.log('Hola Darwin');
      observer.next(42);
      observer.next(100); // "return" otros valores
      observer.next(200); // "return" siii otros valores
      // ASICRONICO
      setTimeout(()=>{
          observer.next(300);
  
      },500)    
    });
    
    console.log('ante');
    cualQuier_Observable.subscribe(function (x) {
      console.log(x);
    });
    console.log('despues');
  