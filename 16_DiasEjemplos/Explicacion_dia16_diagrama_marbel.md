# Dia 16 ![Reactivo](http://reactivex.io/assets/Rx_Logo_S.png) [ReactiveX](https://reactivex.io/ "Pagina Oficial")

```V6.5.3```


#  Diagramas de [**Marble**](https://rxmarbles.com/ "Pagina Oficial")

*Para explicar cómo funcionan los operadores, las descripciones textuales a menudo no son suficientes. Muchos operadores están relacionados con el tiempo, pueden, por ejemplo, demorar, acelerar o rebajar las emisiones de valor de diferentes maneras. Diagramas son a menudo una mejor herramienta para eso.* 

**Los Diagramas de Marble** *son representaciones visuales de cómo funcionan los operadores e incluyen la entrada Observable (s), el operador y sus parámetros, y la salida Observable.*

![Diagrama](https://github.com/darwinuzcategui1973/RxJs30dias/blob/master/16_DiasEjemplos/diagramaMarbel.png)

****
1. Este es el tiempo que fluye de izquierda a derecha para representar la ejecución del input observable.
2. Estos son valores emitidos por el observable.
3. Esta línea vertical representa la notificación “complete” e indica que el observable ha terminado satisfactoriamente.
4. Esta observable es la salida de la llamada del operador.
5. Esta X representa un error emitido por la salida Observable, indicando una terminación anormal. A partir de entonces, ni los valores ni la vertical se entregarán.
6. Esta caja indica el operador que toma la entrada observable (arriba) para producir la salida Observable (abajo). El texto dentro de la caja muestra la naturaleza de la transformación.
****
*Estos diagramas son muy utilizados dentro de RxJS esta muy bueno entender bien como funcionan para verlos en un futuro*





****




##### final día V6.5.3

![Reactivo](http://reactivex.io/assets/Rx_Logo_S.png)


![Dibujo](https://pbs.twimg.com/profile_banners/956636711399936000/1521477605/1500x500)