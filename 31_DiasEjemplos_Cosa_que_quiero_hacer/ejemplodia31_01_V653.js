// Importaciones
const { of } = rxjs;
const { fromFetch } = rxjs.fetch;
const { switchMap, catchError } = rxjs.operators;

const data$ = fromFetch('https://api.github.com/users?per_page=5').pipe(
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
   return of({ error: true, message: err.message })
 })
);

data$.subscribe({
 next: result => console.log(result),
 complete: () => console.log('listo')
})