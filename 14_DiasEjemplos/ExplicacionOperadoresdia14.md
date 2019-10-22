# Dia 14 ![Reactivo](http://reactivex.io/assets/Rx_Logo_S.png) [ReactiveX](https://reactivex.io/ "Pagina Oficial")

## Vamos Hablar de los Operadores

Este es el día y vamos a ver “Operators”!

## ¿Qué son los operadores?

RxJS es sobre todo útil para sus operators, aunque el Observable es la base. Los operadores son las piezas esenciales que permiten que el código asincrónico complejo se componga fácilmente de forma declarativa.

Los operadores son funciones . Hay dos tipos de operadores:
****

### Los operadores canalizables (Pipeable Operators)
***
Los operadores canalizable pipeOperators son métodos del tipo Observable, que  utiliza la siguinte sintaxis ```observableInstance.pipe(operator()) ```,  como ```map(…)```, ```filter(…)```,  ```mergeMap(...)```, etc. Cuando se les llama, no cambian la instancia de Observable existente. En cambio, devuelven un nuevo Observable, cuya lógica de suscripción se basa en el primer Observable.

>Un Pipe Operator es una función que crea un nuevo Observable basado en el Observable actual. Esta es una operación pura: el observable anterior permanece sin modificar.

Un Operador es esencialmente una función pura que toma un Observable como entrada y genera otro Observable como salida. La suscripción a la salida Observable también se suscribirá a la entrada Observable. 

## Los operadores de creación:
 son el otro tipo de operador, que se puede llamar como funciones independientes para crear un nuevo observable. Por ejemplo: ```of(1, 2, 3) ```crea un observable que emitirá 1, 2 y 3, uno tras otro. Los operadores de creación se discutirán con más detalle en una sección posterior.
 

![Reactivo](http://reactivex.io/assets/Rx_Logo_S.png)


![Dibujo](https://pbs.twimg.com/profile_banners/956636711399936000/1521477605/1500x500)
