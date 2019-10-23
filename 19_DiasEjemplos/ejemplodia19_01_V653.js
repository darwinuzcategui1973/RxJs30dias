// ahora hay que exportar lo que se va utilizar y colocarlo en const
const { range } = rxjs;
const { map, filter } = rxjs.operators;

range(1, 10)
  .pipe(
    filter(x => x % 2 == 1),
    map(x => x + x)
  )
  .subscribe(x => console.log(x));
