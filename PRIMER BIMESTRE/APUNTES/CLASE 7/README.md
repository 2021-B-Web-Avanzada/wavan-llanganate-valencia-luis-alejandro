# Clase 7 - Callbacks

### Objetivos


### Desarrollo

**JavaScript Síncrono**

- JavaScript por defecto ejecuta el código en orden y debe terminar de ejecutar una pieza de código antes de pasar a la siguiente.

> Un ejemplo de código síncrono en JavaScript es el uso de `alert` en el navegador.
```javascript
alert('Soy bloqueante')
```



- El que sea sincrónico no siempre es ventajoso puesto que puede existir una función que tarde tiempo en ejecutarse y que bloquee el resto del código.
- JavaScript es de un solo hilo, o `single-threaded` e inherentemente síncrono [[1]](#1).
  - Eso significa que tiene un solo `stack` y un solo `memory heap`. Y que solo puede hacer una cosa a la vez.

<p align="center">
  <img src="https://miro.medium.com/max/490/1*Ic9M1jRkULPLfAQ5hceguQ.png">
</p>

**Call Stack** 

Permite hacer una cosa a la vez. Si estamos dentro de una función ponemos algo en el `stack` y si retornamos de una función hacemos un `pop` del `stack`.




**JavaScript Asíncrono**
- JavaScript está basado en eventos o en inglés es `event-based`, lo que significa que tiene un gran potencial para la programación asíncrona [[2]](#2).
- `Event-based`: No se ejecuta código en JavaScript a menos que:
  - Un evento haya ocurrido.
  - Este evento tenga al menos un `event-handler` registrado.
  - Y este evento haya llegado al principio de la cola de eventos o `event queue`.
- Si todo lo anterior se cumple, entonces el motor de Javascript deberá:
  - Poner el evento fuera de la cola o `queue`.
  - Recuperar el `event-handler`.
  - Invocarlos en orden (lo que permite agregar más eventos a la cola).
  - Retroceder y procesar el próximo evento.

## Callbacks
A callback is a function that is passed as an argument
to another function, which is expected to invoke it either
immediately or at some point in the future.

## Referencias

<a id="1">[1]</a> https://dev.to/bbarbour/if-javascript-is-single-threaded-how-is-it-asynchronous-56gd#:~:text=Javascript%20is%20a%20single%20threaded,times%20that%20can%20be%20harmful.

<a id="2">[2]</a> https://books-library.net/files/download-pdf-ebooks.org-1506362349Sf7I0.pdf
 
  


