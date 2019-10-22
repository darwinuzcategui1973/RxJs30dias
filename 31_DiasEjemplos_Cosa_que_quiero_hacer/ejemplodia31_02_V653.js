// Importaciones

const { of, fromEvent, Observable, BehaviorSubject } = rxjs;
const { fromFetch } = rxjs.fetch;
const { map, switchMap, catchError, debounceTime } = rxjs.operators;

class PersonasService {
  personas = []; // Observable(); // <Person[]> //Variable que tendra las personas observadas
  _todas = []; // BehaviorSubject(); //<any[]>;//Es necesario crear un Sujeto que sera el encargado de inicializar el observable
  baseUrl = ''; //: string;//Variable para definir mi ruta al API
  //Creo un objeto que contendra todos los datos
  /*
  almacenDatos: {
    personas: []  // Person[] //Asigno los datos en base a mi model
  };
*/
  constructor(http) {
    this.baseUrl = 'http://localhost:3900/api/v0/productos'; //Ruta al API recuerda estoy utilizando json-server
    //Inicializo el objeto contenedor de datos
    this.almacenDatos = {
      personas: []
    };
    this._todas = []; //new BehaviorSubject([]); //Inicializo el sujeto
    this.personas = []; // this._todas.asObservable(); //Le digo a mi objeto de personas que el sujeto sera un observable
  }

  //Función para invocar los datos
  cargarTodas() {
    //llamo la primera vez al despliegue de datos (esto para que en cuanto cargue la aplicación se muestren los datos)
    this.todoslosDatos();

    /*Configuro el tiempo de llamada de actualización de datos
    Recuerdas que si hay un cambio en la base de datos 
    o si alguna otra persona con la aplicacion hace algun evento
    no nos enterariamos a menos que llamemos nuevamente al API?
    Bueno con esto conseguimos lograrlo sino hay otro evento como
    GET,POST,PUT,DELETE*/
    this.configurarTiempo();
  }

  //fromFetch(
  //Función para invocar los datos
  todoslosDatos() {
    const data$ = fromFetch(
      'http://localhost:3900/api/v0/productos?per_page=5'
    ).pipe(
      switchMap(response => {
        if (response.ok) {
          // OK return datos
          return response.json();
        } else {
          // El servidor está devolviendo un estado que requiere que el cliente intente otra cosa.
          return of({ error: true, message: `Error ${response.status}` });
        }
      }),
      catchError(err => {
        // Error de red u otro, manejo inadecuadamente
        console.error(err);
        return of({ error: true, message: err.message });
      })
    );
    data$.subscribe({
      next: almacenDatos => personas,
     complete: () => console.log('listo')
     })
    
    /*
    //const data$ = fromFetch(
    //  'http://localhost:3900/api/v0/productos?per_page=5'
   // ).pipe(

      fromFetch('http://localhost:3900/api/v0/productos?per_page=5')
      .get(this.baseUrl) //Invoco el API
      .map(response => response.json()) //Mapeo los datos
      .subscribe(
        data => {
          //Realizo la suscripcion
          //Actualizo el contenedor de datos con los datos recibidos
          this.almacenDatos.personas = data;
          //Pido que se refleje los cambios basado en la nueva data
          this._todas.next(Object.assign({}, this.almacenDatos).personas);
        },
        error => console.log('No se pueden cargar los datos.')
      );
      */
  }

  //Función para configurar el tiempo
  configurarTiempo() {
    //Configuro que cada segundo invoque al API
    /*Esto definitivamente sobre cargara nuestra API
        pero para que veas incluso en dos navegadores al mismo 
        tiempo como se actualiza las vistas si es que hay un evento en una de ellas
        luego puedes subirla a unos 60000 que seria un minuto o la cantidad que consideres mejor
        */
    setInterval(() => {
      //Llamo a la funcion de solicitud de datos
      this.todoslosDatos();
    }, 1000);
  }

  //Función para actualizar le gusta de la persona
  marcarMeGusta(persona, estado) {
    //Modifico la propiedad megusta con el estado
    //antes de enviar la peticion
    persona.megusta = estado;
    //Invoco al API y envio los datos a cambiar
    this.http
      .put(this.baseUrl + '/' + persona.id, persona)
      .map(response => response.json()) //Mapeo la respuesta
      .subscribe(
        data => {
          //Recorro el objeto ya visualizado para poder actualizar
          //solo el item que nos interesa
          this.almacenDatos.personas.forEach((t, i) => {
            if (t.id === data.id) {
              this.almacenDatos.personas[i] = data;
            }
          });
          //Pido que se refleje los cambios basado en la nueva data
          this._todas.next(Object.assign({}, this.almacenDatos).personas);
        },
        error => console.log('No Puede Actualizar')
      );
  }
  //Función para invocar crear una persona
  agregarPersona() {
    //Configuro el objeto persona para crearse
    let nuevapersona = new Person(0, 'Persona Nueva', 'Programador', false);
    this.http
      .post(this.baseUrl, nuevapersona)
      .map(response => response.json())
      .subscribe(
        data => {
          this.almacenDatos.personas.push(data);
          this._todas.next(Object.assign({}, this.almacenDatos).personas);
        },
        error => console.log('No puede crearse.')
      );
  }

  //Función para invocar elminar a una persona
  eliminarPersona(id) {
    this.http.delete(this.baseUrl + '/' + id).subscribe(
      response => {
        this.almacenDatos.personas.forEach((t, i) => {
          if (t.id === id) {
            this.almacenDatos.personas.splice(i, 1);
          }
        });
        this._todas.next(Object.assign({}, this.almacenDatos).personas);
      },
      error => console.log('No se puede eliminar.')
    );
  }
}
//http://localhost:3900/api/v0/productos
//const data$ = fromFetch('https://api.github.com/users?

const persona1 = new PersonasService();
//pesona1.cargarTodas()
// const datos111 = pesona1.cargarTodas();
console.log(persona1);

