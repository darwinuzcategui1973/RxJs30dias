# Para actulizar a la nueva version de 6.5.3 Rxjs

*Si vas Utilizar desde node webpack*

 *hay que instalar*

```
npm install rxjs

```
Esto es Via npm

```js
//  npm 
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

```
*Ahora modo commonjs*

```js
//commonjs
const { Observable } = require('rxjs');

```

## Y Como los estamos Utilizando NOSOSTROS en estos ejercicios es via  *CDN*
****
*Realizamos los siguientes pasos:*
****


### El código Con la Ultima Vérsion 6.5.3 estable queda Asi--> 

Colocamos en const lo que vamos requerir


```js
// cdn
const { fromEvent } = rxjs;
```


Actulizamos el HTML solo la en la siguiente bloque. Realmente lo  que hay que colocar el ultima libreria.
```HTML
<body>

  <button>
    Click Con Observable boton 6.5.3
  </button>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/rxjs/6.5.3/rxjs.umd.js"></script>
   <script src="ejemplodia01_rxjs6_5_3.js">
   </script>
   
</body>
```
*En codigo para el archivo* **JS** *queda asi:* 

```js

const { fromEvent } = rxjs;

let button = document.querySelector('button'); 
fromEvent(document, 'click').subscribe(() => console.log('Clicked Rjx 6.5.3!'));

```