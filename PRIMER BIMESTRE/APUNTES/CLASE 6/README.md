# Clase 6 - Funciones y destructuración

### Objetivos
- Aprender a utilizar la función reduce y comprender su aplicabilidad en problemas reales.
- Entender la sintaxis básica de una función y la diferencia entre funciones nombradas y funciones anónimas.
- Comprender cómo crear una función flecha y cuales son sus principales características.
- Conocer como aplicar destructuración a objetos a través de sus propiedades y a arreglos.

### Desarrollo

- `reduce`: ejecuta una función de devolución de llamada "reduce" proporcionada por el usuario en cada elemento del arreglo, en orden, pasando el valor de retorno del cálculo en el elemento anterior [[1]](#1).

```javascript
const respuestaReduce = arreglo
  .reduce(
    function(valorAcumulado, valorActual, indice, arreglo){
      return (valorAcumulado + valorActual.nota)
    },
    100
  );

console.log('respuestaReduce', respuestaReduce); // 246
```
**Funciones**
- Para declarar una función no anónimca y no del tipo `array-function` utilizamos la palabra reservada `function` y definimos tanto su nombre, sus argumentos y su proceso.

```javascript
function soloNumeros(a,b,c){
  return a - b + c; // valor a devolver
}
```

- Una peculiaridad es que JavaScript permite el uso de funciones sin validaciones como se muestra a continuación.

```javascript
soloNumeros('v', true, [1,2,3]);
soloNumeros((a) => a, (a) => a,(a) => a,(a) => a);
soloNumeros(1,2,3,4,5,6,78,9);
soloNumeros();
```

**Named functions**
- Es una función que tiene un nombre.

```javascript
function funcionNombrada(){
}
```
**Funciones Anónimas**
- Son las funciones que se utilizan para igualarlas a una variable.
- Son utilizadas por ejemplo en operadores como `forEach`.

```javascript
const funcionSinNombre1 = function(){};
var funcionSinNombre2 = function(){};
let funcionSinNombre3 = function(){};
[].forEach(function(){});

funcionSinNombre1();
funcionSinNombre2();
funcionSinNombre3();
```

**Fat Arrow Function**
- Una función flecha es una alternativa compacta a una expresión de función tradicional, pero es limitada y no se puede usar en todas las situaciones.

*Diferencias y limitaciones: [[2]](#2)*

- No tiene sus propios bindings a this o super.
- No debe usarse como métodos.
- No tiene la palabra clave new.target.
- No es adecuado para los métodos de `call`, `apply` and `bind`, que generalmente se basan en el establecimiento de un alcance.
- No se pueden utilizar como constructores.
- No se puede utilizar `yield`, dentro de su cuerpo.

```javascript
const funcionFatArrow1 = () => {};
var funcionFatArrow2 = () => {};
let funcionFatArrow3 = () => {};
[].forEach(() => {});

funcionFatArrow1();
funcionFatArrow2();
funcionFatArrow3();
```
- En su forma más simple una función flecha tiene la siguiente estructura.

```javascript
const funcionFatArrow4 = () => {};
```

- La siguiente función flecha tiene una correcta sintaxis, sin embargo puede ser simplificada.

```javascript
const funcionFatArrow5 = (x) => {
  return x + 1;
};
```
- Cuando la función flecha solo pretende retornar algo, entonces la palabra `return` puede ser omitida.
```javascript
const funcionFatArrow6 = (x) => x + 1;
```
- Si la función flecha solo tiene un argumento, entonces los paréntesis del argumento pueden ser omitidos.
```javascript
const funcionFatArrow6 = x => x + 1;
```
- Generalmente utilizamos los paréntesis en los argumentos de la función flecha cuando son más de uno.
```javascript
const funcionFatArrow6 = (x,y,z) => x + y + x;
```

- Una función también puede tener parámetros infinots que llegan de un arreglo.

```javascript
function sumarNumeros(...otrosNumeros){
  let total = 0;
  otrosNumeros.forEach(
    valorActual => {
      total = total + valorActual;
    }
  );
  return total;
}

sumarNumberos(1,2,3,4,5,6,7,8,9,10,11,12,13);

```



**Destructuración**

La sintaxis de asignación de desestructuración es una expresión de JavaScript que permite descomprimir valores de arreglos o propiedades de objetos en distintas variables [[3]](#3).

*Destrucruación de objetos*
- `...` Permite pasar todos los pares clave: valor de un objeto
- Para `object literals` (nuevo en ECMAScript 2018).

```javascript
const adrian = {
  nombre: "Adrian"
};

const carolina = {
  nombre: "Carolina",
  apellido: "Eguez"
};

const adrianCarolina = {
  ...carolina, // 1 El orden es importante para propiedades que se repiten
  ...adrian, // 2 El último reemplaza a los anteriores
};

console.log('adrianCarolina', adrianCarolina);
```

*Desctructuración de arreglos*

- Nos permite acceder a cada uno de los elementos de un array para utilizarlos en otro o a su vez asignarlos a nuevas variables.

```javascript
const arregloUno = [1,2,3,4,5];
const arregloDos = [6,7,8,9,10];

const superArreglo = [
  ...arregloUno, // El orden importa
  ...arregloDos,
];

console.log('superArreglo', superArreglo); // [1,2,3,4,5,6,7,8,9,10]
```

*Destructuring en funciones*
- Por ejemplo, podemos hacer que el arreglo se separe y enviar los datos como argumentos de manera individual.

```
console.log(...superArreglo); // console.log(1,2,3,4,...,9,10);
```


### Conclusiones
- Debido a que las funciones en JavaScript no están sujetas a validaciones por el lenguaje, esta característica significa un proyecto para los proyectos grandes en dónde el proceso de debugging se vuelve complejo. TypeScript en un super de JavaScript que soluciona este inconveniente y por lo tanto es un lenguaje más apropiado para proyectos grandes.
- Las funciones flecha son adecuadas a utilizar para cualquier ámbito que esté vinculado al contexto, y no a la función en sí. Otra aplicabilidad de estas funciones pese a sus limitaciones es que son comunmente utilizados en métodos como `map`, `filter`, `reduce` y otros operadores.
- La desestructuración anima a los programadores a poner las propiedades del objeto en variables locales antes de usarlas, lo que puede mejorar el rendimiento de la aplicación.


### Bibliografía

<a id="1">[1]</a> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

<a id="2">[2]</a> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

<a id="3">[3]</a> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
