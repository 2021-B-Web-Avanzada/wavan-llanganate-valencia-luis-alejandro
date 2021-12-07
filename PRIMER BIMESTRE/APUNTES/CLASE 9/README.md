# Clase 9 - Ejercicio utilizando Promesas
### Objetivos
- Aplicar los conocimientos en promesas y asincronismo para resolver un ejercicio planteado.
- Explicar la solución del ejercicio y exponerlo en clase.

### Desarrollo
**Ejercicio:**
Hacer una función que me acepte como parámetro una variable con el path del archivo y el contenido a agregar al contenido del archivo. La función debe tomar estos dos parámetros y leer el archivo y añadir el texto al final del archivo. Al final vamos a leer el archivo nuevamente e imprimirlo en consola.
Todo esto debe ser realizado con promesas.
- Promesa de lectura
- Promesa de escritura

**Solución:**

```javascript
const fs = require('fs')

const readFile = path => {
    return new Promise(
        (resolve, reject) => {
            fs.readFile(
                path,
                'utf-8',
                (error, data) => {
                    (error) ? reject(error) : resolve(data);
                }
            )
        }
    );
 }

 const writeFile = (path, contenidoActual, nuevoContenido) => {
    return new Promise(
        (resolve, reject) => {
            const data = `${contenidoActual}\n${nuevoContenido}`
            fs.writeFile(
                path,
                data,
                error => {
                    (error) ? reject(error) : resolve(data);
                }
            )
        }
    );
 }


 const test = (path, nuevoContenido) => {
     readFile(path)
     .then(
         data => {
             return writeFile(path, data, nuevoContenido);
         }
        )
    .then(
        _ => {
            return readFile(path)
        }
    )
    .then(
        allContent => {
            console.log(allContent)
        }
    )
    .catch(
        (error) =>{
            throw error
        }
    )
 }

 test('06-ejemplo.txt', 'Morning')
```
### Conclusiones
- Una promesa es un objeto que representa un valor que puede que esté disponible «ahora», en un «futuro» o que «nunca» lo esté. Como no se sabe cuándo va a estar disponible, todas las operaciones dependientes de ese valor, tendrán que posponerse en el tiempo.
- Utilizar promesas facilita, en buena medida, el control de flujos de datos asíncronos enUuna aplicación.
