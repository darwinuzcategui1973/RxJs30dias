// ahora hay que exportar lo que se va utilizar y colocarlo en const
const { fromEvent } = rxjs;

let button = document.querySelector('button'); 
fromEvent(document, 'click').subscribe(() => console.log('Clicked Rjx 6.5.3!'));