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

- Son:
  - Una abstracción útil en la programación asíncrona.
  - Una API asociada que nos permite utilizar esta abstracción en nuestros programas.
- Una promesa representa un valor futuro de algún tipo y tiene los siguientes estados:



### Conclusiones


### Referencias
