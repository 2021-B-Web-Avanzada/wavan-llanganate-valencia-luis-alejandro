# Clase 5

### Objetivos
- Aprender los métodos más usados de los arreglos para luego aplicarlos en el desarrollo del frontend del curso.

### Desarrollo

**Métodos**

- `push`: añadir un elemento al final del arreglo
```javascript
arreglo.push(11)
// [6,7,8,9,10,11]
```
- `pop`: eliminar el último elemento de un arreglo
```javascript
arreglo.pop()
// [6,7,8,9,10]
```
- `unshift`: añadir un elemento al principio del arreglo
```javascript
arreglo.unshift(5)
// [7,8,9,10]
```
- `splice`: cambia el contenido de un arreglo eliminando o reemplazando elementos existentes y / o agregando nuevos elementos en su lugar [[1]](#1).
```javascript
// splice(indice, numero de elementos eliminados, ...items a agregar)
arreglo.splice(0,0,4);
// [4,7,8,9,10]

const indiceNueve = arreglo.indexOf(9); // Encuentra el primer elemento y devuelve el índice
arreglo.splice(indiceNueve, 2)

console.log(arreglo); // [4, 7, 8]
```
**Operadores**

```javascript
const arreglo = [
{
  id: 1,
  nombre: 'Adrian',
  nota: 5
},
{
  id: 2,
  nombre: 'Vicente',
  nota: 8
},
{
  id: 3,
  nombre: 'Carolina',
  nota: 14
},
{
  id: 4,
  nombre: 'Wendy',
  nota: 16
},
{
  id: 5,
  nombre: 'Andrea',
  nota: 19
},
{
  id: 6,
  nombre: 'Pamela',
  nota: 19
},
{
  id: 7,
  nombre: 'Cristian',
  nota: 20
},
{
  id: 8,
  nombre: 'Daniel',
  nota: 19
},
{
  id: 9,
  nombre: 'Lilly',
  nota: 14
},
{
  id: 10,
  nombre: 'Ramiro',
  nota: 12
}
];
```
- Para la primera función `find` enviamos una expresión (Trutht, falsy) delvueve el primer elemento que cumpla esa condición.
```javascript
const respuestaFind = arreglo
  .find(
    function(valorActual, indiceActual, arregloComplemento){
      console.log('valorActual', valorActual);
      console.log('indiceActual', indiceActual);
      console.log('arregloComplemento', arregloComplemento);
      return valorActual.nombre === "Cristian";
    }
  );
  
console.log('respuestaFind', respuestaFind); // Cristian // Si no encuentra devuelve undefined
```
- `findIndex`: el método devuelve el índice del primer elemento del arreglo que satisface la función de prueba proporcionada [[2]](#2).

```javascript
const respuestaIndex = arreglo
  .findIndex(
    function(valorActual, indiceActual, arregloComplemento){
      return valorActual.nombre === "Cristian";
    }
  );
  
console.log('respuestaIndex', respuestaIndex); // Cristian // Si no encuentra devuelve undefined
```
- `forEach`: El método llama a una función para cada elemento de una matriz. El método `forEach()` no se ejecuta para elementos vacíos. Invoca una función `callbackFn` proporcionada una vez para cada elemento de una matriz en orden de índice ascendente. No se invoca para propiedades de índice que se han eliminado o no se han inicializado.
  - `forEach()` ejecuta la función callbackFn una vez para cada elemento de la matriz; a diferencia de `map()` o `reduce()`, siempre devuelve el valor indefinido y no es encadenable.
```javascript
const respuestaForEach = arreglo
  .forEach(
    function(valorActual){
      console.log('valorActual', valorActual);
    }
  )
  
console.log('respuestaForEach', respuestaForEach); // undefined
```
- `map`: crea un nuevo arreglo poblado con los resultados de llamar a una función proporcionada en cada elemento de la matriz de llamada [[4]](#4).

```javascript
const respuestaMap = arreglo
  .map(
    valorActual => {
      const nuevoElemento = {
        id: valorActual.id,
        nombre: valorActual.nombre,
        nota: valorActual.nota + 1,
      };
      return nuevoElemento;
    }
  );

console.log('respuestaMap', respuestaMap);
```


### Conclusiones
- Entre los métodos revisados en clase, uno de los más utilizados por su doble funcionalidad es el de `splice` que permite tanto eliminar elementos y agregar nuevos en su lugar. 

### Bibliografía
<a id="1">[1]</a> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

<a id="2">[2]</a> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex

<a id="3">[3]</a> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

<a id="4">[4]</a> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
