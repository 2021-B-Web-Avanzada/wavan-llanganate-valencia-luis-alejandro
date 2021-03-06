# Clase 5 - Métodos de arreglos y operadores

### Objetivos
- Aprender los métodos más usados de los arreglos para luego aplicarlos en el desarrollo del frontend del curso.
- Conocer los operadores que se basan en programación funcional que permiten iterar elementos de un arreglos de tal forma que se puedan realizar operaciones sobre ellos.
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
Para entender operadores vamos a utilizar el siguiente arreglo: 
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

- `filter`: crea un nuevo arreglo con todos los elementos que pasan la prueba implementada por la función proporcionada [[5]](#5).

```javascript
const respuestaFilter = arreglo
  .filter(
    valorActual => valor actual.nota >= 14;
  )
  
console.log('respuestaFilter', respuestaFilter);
console.log('arreglo', arreglo);
```

- `some`: ejecuta la función `callbackFn` una vez para cada elemento presente en la matriz hasta que encuentra aquel en el que callbackFn devuelve un valor verdadero (un valor que se convierte en verdadero cuando se convierte a booleano). 
  - Si se encuentra tal elemento, `some()` inmediatamente devuelve verdadero. 
  - De lo contrario, `some()` devuelve falso.

```javascript
const respuestaSome = arreglo
  .some(
    valorActual => valorActual.nota < 9;
  )
  
console.log('respuestaSome', respuestaSome);
```

- `every`: ejecuta una función para cada elemento del arreglo. El método `every()` devuelve verdadero si la función devuelve verdadero para todos los elementos [[6]](#6).

```
const respuestaEvery = arreglo
  .every(
    valorActual => valorActual.nota < 14;
  )

console.log('respuestaEvery', respuestaEvery);
```

### Conclusiones
En conclusión, entre los métodos revisados en clase, uno de los más utilizados por su doble funcionalidad es el de `splice` que permite tanto eliminar elementos y agregar nuevos en su lugar. Así también, los operadores estudiados permiten iterar de una manera más simple un arreglo para realizar operaciones sobre ellos, y esto es comunmente usado para trabajar con datos que por ejemplo podrían ser traidos desde una API. 

### Bibliografía
<a id="1">[1]</a> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

<a id="2">[2]</a> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex

<a id="3">[3]</a> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

<a id="4">[4]</a> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

<a id="5">[5]</a> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

<a id="6">[6]</a> https://www.w3schools.com/jsref/jsref_every.asp
