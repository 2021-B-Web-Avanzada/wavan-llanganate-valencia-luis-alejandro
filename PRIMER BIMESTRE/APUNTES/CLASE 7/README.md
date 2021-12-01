# Clase 7 - Callbacks

### Objetivos

- Introducir al estudiante a la programación asíncrona con JavaScript.
- Entender el modelo basado en eventos de JavaScript y cómo los callbacks cumplen un papel importante en los mismos.
- Entender qué es el callback hell y cómo está relacionado con los callbacks anidados.

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


<p align="center">
  <img width="500px;" src="https://user-images.githubusercontent.com/20259832/144188044-f6bbd458-7c27-4d94-9351-76c07b09aa59.png">
</p>

- `blowing the stack`: El `call stack` tiene un tamaño límite y una función por ejemplo:
```javascript
function foo(){
  return foo()
}

foo();
```
Podría interrumpir la ejecución del programa por exceder el tamaño permitido.

<p align="center">
  <img width="500px;" src="https://user-images.githubusercontent.com/20259832/144188676-21e82aec-b0e2-4066-9bdf-efc31d7e52c5.png">
</p>



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

**Callbacks**

- Un `callback` es una función que se pasa como argumento a otra función, y que se espera que sea invocada inmediatamente o en algún momento en el futuro.
- Son funciones no bloqueantes.
- Los callbacks son una parte fundamental del `event-driven model` de JavaScript.

<p align="center">
  <img width="500px;" src="https://user-images.githubusercontent.com/20259832/144191691-f6796bfb-15df-45f8-b58b-d062c283f574.png">
</p>


> `Event Loop`: es el proceso que espera a que el `call stack` este limpio antes de colocar los `callbacks` de la cola de tareas o `task queue` al `call stack.`

[Enlace para entender el event loop](http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)

**Ejercicio**

Cree los siguientes ficheros en su carpeta:

```
|--- 06-ejemplo.txt
|--- 06-callbacks.js
```

- `require`: Node.js sigue el `CommonJS module system` y la función `require()` es la forma más conocida de incluir modules o librerías. El función principal de `require` es que lee un fichero JavaScript, lo ejecuta y luego lo procesa para exportar un objeto. 
- `fs`: el módulo Node.js file system permite trabajar con archivos del sistema. Es decir, permite hacer lectura, escritura, actualización eliminación de archivos y renombrarlos.
- Para utilizar el file system utilizamos `require` de la siguiente forma:
```javascript
const fs = require('fs')
```
- Luego se hará una lectura del archivo `06-ejemplo.txt` utilizando la función `readFile` la cual es asíncrona y por lo tanto recibe un callback.

```javascript
console.log("Primero");

fs.readFile(
    '06-ejemplo.txt', // path
    'utf-8', // encoding
    (error, content) => { // callback
        if (error) {
            throw error
        }
        console.log("Segundo", content)
    }
)

console.log("Tercero");
```

Salida: 

```
Primero
Tercero
Segundo Hola
```

**Callbacks Hell**

Consiste en múltiples Callbacks anidados que provocan que el código se vuelva difícil de leer y ‘debuggear’; ésta es la principal razón por la cual se debe evitar.

- Ejemplo de un callback anidado:

```javascript
fs.readFile(
    "06-ejemplo.txt",
    "utf-8",
    (errorVariable,contenidoVariable) => { // Primer callback
        if(errorVariable){
            console.error("mensaje leyendo contenido", errorVariable);
        }else{
            fs.readFile(
                "06-ejemplo2.txt",
                "utf-8",
                (errortxt,contenidotxt) => { // Callback anidado
                  if(errortxt){
                      console.error("mensaje leyendo contenido 2", errortxt);
                  } else{
                      console.log(contenidoVariable, contenidotxt);
                  }
                })
        }
    }
);
```

### Conclusiones
- El motor V8 de JavaScript tene un modelo basado en eventos lo que le permite a JavaScript emplear asincronismo pese a ser `single-thread`. Así también, el uso de callbacks son una primera aproximación a la programación asíncrona en este lenguaje, y el event loop se encarga de ponerlos en el  `call stack` luego de que ésta haya sido vaciada por las funciones síncronas.
- Emplear una gran cantidad de callbacks anidados es una mala práctica de programación puesto que afecta a la legibilidad del código y al proceso de depuración del mismo. Por lo tanto, se recomienda sustituirlos por una nueva características de JavaScript que son las promesas.


### Referencias

<a id="1">[1]</a> https://dev.to/bbarbour/if-javascript-is-single-threaded-how-is-it-asynchronous-56gd#:~:text=Javascript%20is%20a%20single%20threaded,times%20that%20can%20be%20harmful.

<a id="2">[2]</a> https://books-library.net/files/download-pdf-ebooks.org-1506362349Sf7I0.pdf
 
<a id="3">[3]</a> https://nodejs.org/en/knowledge/getting-started/what-is-require/  


