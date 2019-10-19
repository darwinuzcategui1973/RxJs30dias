// aqui generamos un evento
var button = document.querySelector('button');
button.addEventListener('click', () => console.log('Clicked!'));

// aqui un posible evento 
var button = document.querySelector('button');
Rx.Observable.fromEvent(button, 'click')
    .subscribe(() => console.log('Clicked RxJS!'));