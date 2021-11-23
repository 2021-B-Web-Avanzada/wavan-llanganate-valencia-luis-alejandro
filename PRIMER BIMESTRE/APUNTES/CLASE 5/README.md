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

### Conclusiones
- Entre los métodos revisados en clase, uno de los más utilizados por su doble funcionalidad es el de `splice` que permite tanto eliminar elementos y agregar nuevos en su lugar. 

### Bibliografía
<a id="1">[1]</a> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
