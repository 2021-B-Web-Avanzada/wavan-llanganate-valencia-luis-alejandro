# Clase 8 - Promises

### Objetivos

### Desarrollo

**Ejercicio:**

Hacer una función que acepte como parámetro una variable con el path del archivo y el contenido a agregar al contenido del archivo. La función debe tomar estos dos parámetros y leer el archivo y añadir el texto al final del archivo 

```javascript
const fs = require('fs')

const getContentFromAFile = path => {
    return fs.readFileSync(
        path,
        "utf-8",
        'r'
    )
}

const writeContentOnAFile = (path, content) => {
    const data = `${getContentFromAFile(path)}\n${content}`
    fs.writeFile(
        path,
        data,
        error => {
            if (error) throw error;
        }
    )
}

writeContentOnAFile("file.txt", 'Llanganate')

```

**Promesas**

- Una promesa representa la eventual finalización (o falla) de una operación asincrónica y su valor resultante.
- Las promesas son:
  - Una abstracción útil en la programación asíncrona.
  - Una API asociada que nos permite utilizar esta abstracción en nuestros programas.
- Una promesa representa un valor futuro de algún tipo y tiene los siguientes estados:
<p align="center">
    <img src="https://user-images.githubusercontent.com/20259832/144215680-6bc196b1-837f-463d-8067-d42e8edcb156.png">
</p>

> `fulfilled`: Acción relacionada con la promesa cumplida
> 
> `rejected`: Acción relacionada con la promesa fallida.
> 
> `pending`: la promesa aún está pendiente, es decir, aún no cumplida o rechazada
> 
> `settled`: la promesa se ha cumplido o rechazado

**Ejemplos**

- Es posible crear una promesa con el `Promise constructor`

```javascript
function promesaEsPar(numero){
    return miPrimeraPromesa = new Promise( //Definición de la promesa asíncrona
        (
            resolve, // return --> then
            reject // throw --> catch
        ) => {
            if(numero % 2 === 0 ){
                resolve(numero); // Si dejamos vacio --> Undefined
            } else {
                reject("No es par =(");
            }
        }
    );
}

function promesaElevarAlCuadrado(numero){
    return miSegundaPromesa = new Promise(
        (resolve, reject) => { // callback
            const numeroElevado = Math.pow(numero, 2);
            resolve(numeroElevado);
        }
    );
}
```

- Las promesas se pueden consumir registrando funciones utilizando los métodos `.then` y `.catch`.

> `then(functionResolve, functionRejected)`: se invoca cuando una promesa se resuelve o se rechaza.
> 
> `catch`: se invoca cuando se rechaza una promesa o se ha producido algún error en la ejecución.
>
> `finally`: Devuelve una Promesa. Cuando se establece la promesa, es decir, se cumple o se rechaza, se ejecuta el `callback` especificado.
- Un ejemplo de ello:

```javascript
//bloques de codigo para usar
promesaEsPar(6)
    .then(
        (datosPromesa) => { // resolve
            console.log(datosPromesa)
            return promesaElevarAlCuadrado(datosPromesa)
        }
    )
    .then( // resolve promesaElevarAlCuadrado
        (datosElevados) =>{
            console.log(datosElevados)
        }
    )
    .catch( // throw
        (error) =>{
            console.log(error)
        }
    )
    .finally()
```

### Conclusiones
- Las promesas se utilizan para el manejo asincrónico de eventos y para manejar solicitudes http asincrónicas.
- Las promesas ayudan a evitar la duplicación de código en los handlers del `then()` y `catch()`.
- 
### Referencias
https://home.cs.colorado.edu/~kena/classes/5828/f15/lectures/30-asyncjavascriptpromises.pdf

https://www.geeksforgeeks.org/node-js-fs-readfilesync-method/

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally
