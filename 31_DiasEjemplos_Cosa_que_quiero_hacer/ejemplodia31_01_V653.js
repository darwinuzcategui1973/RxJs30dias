// Importaciones
const { of, fromEvent } = rxjs;
const { fromFetch } = rxjs.fetch;
const { switchMap, catchError, debounceTime } = rxjs.operators;
//http://localhost:3900/api/v0/productos
//const data$ = fromFetch('https://api.github.com/users?
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
//const clicks = fromEvent(data$, 'keyup');
//const result = data$.pipe(debounceTime(125));
//result.subscribe(x => console.log(x));

var infinitoObserve =fromEvent(data$, 'keyup').pipe(
   debounceTime(500),
   switchMap(()

//);

data$.subscribe({
  next: result => console.log(result)
  //complete: () => console.log('listo')
});
/*
infinitoObserve.subscribe({
  next: result => console.log(result),
 complete: () => console.log('listo')
 })
 */
/*
import { timer } from 'rxjs/observable/timer';
const TIME=5000; //milisegundos
export class UserService {

  ...

  get():Observable<User[]>{
    return this.httpClient.get<User[]>(this.API_ENDPOINT+'/users_location');
  }

  pollUsers(): Observable<User[]> {
        return timer(0,TIME).switchMap(() => this.get());
    }
}
*/