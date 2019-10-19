# Dia 0 ![Reactivo](http://reactivex.io/assets/Rx_Logo_S.png) [ReactiveX](http://reactivex.io/ "Pagina Oficial")

## ReactiveX se definen a si mismos como:

Una API para la programación asíncrona con flujos observables.

> La vida es muy corta dedemos aprender REactiveX. _- Darwin Uzcategui_.

RxJS es una librería para crear programas asincrónicos y basados en eventos mediante el uso de secuencias observables. Proporciona un tipo de núcleo (core type), el “Observable”, tipos de satélites (satellite types) “Observer, Schedulers, Subjects” y operadores inspirados en Array#extras “map, filter, reduce, every, etc” para permitir el manejo de eventos asíncronos como colecciones.

### Hay Un grupo de librerías Rx\* para 17 lenguajes y 3 frameworks.

## Lenguajes

### 1. Java: [RxJava](https://github.com/ReactiveX/RxJava)

### 2. JavaScrip: [RxJs](https://rxjs-dev.firebaseapp.com/)

### 3. C#: [RxNet](https://github.com/Reactive-Extensions/Rx.NET) C#Unity: [UniRx](https://github.com/neuecc/UniRx)

### 4. Scala: [RxScala](http://reactivex.io/rxscala/)

### 5. Clojure: [RxClojure](https://github.com/ReactiveX/RxClojure)

### 6. C++: [RxCpp](https://github.com/ReactiveX/RxCpp)

### 7. Lua: [RxLua](https://github.com/bjornbytes/RxLua)

### 8. Ruby: [Rx.rb](https://github.com/ReactiveX/RxRuby)

### 9. Python: [RxPY](https://github.com/ReactiveX/RxPY)

### 10.Go: [RxGo](https://github.com/ReactiveX/RxGo)

### 11. Groovy: [RxGroovy](https://github.com/ReactiveX/RxGroovy)

### 12. JRuby: [RxJRuby](https://github.com/ReactiveX/RxJRuby)

### 13. Kotlin: [RxKotlin](https://github.com/ReactiveX/RxJKotlin)

### 14. Swift: [RxSwift](https://github.com/ReactiveX/RxSwift)

### 15. PHP: [RxPHP](https://github.com/ReactiveX/RxPHP)

### 16. Elixir: [reaxive](https://github.com/alfert/reaxive)

### 17. Dart: [Rxdart](https://github.com/ReactiveX/rxdart)

## ReactiveX para plataformas y frameworks.

## Frameworks

### 1.1 Netty: [RxNetty](RxNetty)

### 1.2 Cocoa IOS: [RxCocoa](https://github.com/ReactiveX/RxSwift/tree/master/RxCocoa)

## Plataforma

### 1.3 Plataforma Android [RxAndroid](https://github.com/ReactiveX/RxAndroid)

*********************
# Para Consultar Seguir Nuestro Ejemplo.
 API Doc: [Documentación](https://rxjs-dev.firebaseapp.com/) 

 github del proyecto [RxJs](https://github.com/ReactiveX/rxjs)

 gitHub de Ejemplos del curso:[RxJs 30 Dias](https://github.com/darwinuzcategui1973/RxJs30dias)

# Conceptos para Uso de Observables.

### Observable: 
 *Representa la idea de una colección invocable de valores o eventos futuros.*

### Observer:
*Es una colección de callbacks que “sabe” escuchar los valores entregados por el Observable.*

### Subscription:
*Representa la ejecución de un Observable, es principalmente útil para cancelar la ejecución.*

### Operators:
*Son funciones puras que permiten un estilo de “programación funcional” de tratar con colecciones con operaciones como mapa, filtro, concat, flatMap, etc.*

### Subjects:
*Es el equivalente a un EventEmitter, y la única forma de multi-difundir un valor o evento a varios observers.*

### Schedulers:
*Son “despachadores centralizados” para controlar la concurrencia, lo que nos permite coordinar cuando el cálculo ocurre por ejemplo SetTimeout o requestAnimationFrame u otros.*
