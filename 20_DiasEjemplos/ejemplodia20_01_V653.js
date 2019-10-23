/*
npm install rxjs

//  npm  esto con webpack
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

//commonjs con node desde servidor
const { Observable } = require('rxjs');

// cdn y como cdn como estamos trabajando en  este curso
const { Observable, from} = rxjs;
const { map, filter } = rxjs.operators;

*/

// ahora hay que exportar  lo que se va utilizar y colocarlo en const
const { Observable, from } = rxjs;
const { map, filter } = rxjs.operators;

from([1, 2, 3, 4, 5, 6])
  // Todos los operadores se pasan ahora por pipeOperators
  .pipe(
    filter(x => x % 2 == 0),
    map(x => x + ' Es par')
  )
  .subscribe(x => console.log(x));
