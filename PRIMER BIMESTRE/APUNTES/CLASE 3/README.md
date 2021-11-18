# Clase 3 - JavaScript Variables

### Objetivos
- Instalar Node.js y el IDE de desarrollo profesional para JavaScript, WebStorm.
- Conocer las diferentes maneras de declarar una variable en JavaScript, y comprender los tipos de datos primitivos y de objetos existentes.
- Analizar casos Truthy Falsy para comprender el comportamiento de condicionales con diferentes tipos de datos.
- Introducir el uso de objetos en JavaScript y su naturaleza.
### Desarrollo
#### Node.js
- Es un JavaScript Runtime basado en el motor de JavaScript C8 desarrollado por Google. Actualmente Soporta ECMAScript 2015 (ES6).
- Node.js utiliza el concepto de módulo en su desarrollo, un módulo contiene funciones, objetos y variables JavaScript. Además, es importante indicar qué será exportado para ser utilizado por otros programas si así se lo desea  [[1]](#1).

**Arquitectura de Node.js**

<p align="center">
  <img width="700px;" src="https://user-images.githubusercontent.com/20259832/142352857-b46f70df-69e1-4e3c-929a-15605a4698c4.png">
</p>

#### WebStorm
- WebStorm es un entorno de desarrollo integrado para JavaScript y las tecnologías relacionadas. Al igual que otros IDE de JetBrains, hace que su experiencia de desarrollo sea más agradable, automatiza las tareas repetitivas y le ayuda a gestionar las tareas complejas con facilidad [[2]](#2).

<p align="center">
  <a href="https://www.jetbrains.com/es-es/webstorm/download/download-thanks.html" taget="_blank">
  <img width="100px;" src="https://user-images.githubusercontent.com/20259832/142354630-fffb21a3-c82f-4461-b0dc-6ccb4663940d.png">
  <br> Haz clic aquí para descargar WebStorm</a>
</p>

Una vez instalado, al abrirlo podemos instalar plugins. Por ejemplo, instalaremos a continuación uno para dar una mejor estética a nuestro IDE a través de temas. Este plugin se llama `Material Theme UI`

<p align="center">
  <img width="700px;" src="https://user-images.githubusercontent.com/20259832/142354949-d2f71f34-0262-4894-b7bc-91cb7a40222b.png">
</p>


### Variables en JavaScript

- En JavaScript podemos tener variables mutables e inmutables. 
- Las variables mutables pueden ser reasignadas por cualquier otro valor, como se muestra a continuación:
```javascript
// Mutables
var numeroUno = 1;
let numeroDos = 2;
numeroUno = 5; // puede ser reasignado
numeroDos = 8;
numeroUno = false; // puede ser reasignado a cualquier cosa
numeroUno = true;
```
- Por otro lado, las variables inmutables no permiten dar una reasignación a su valor inicial, y estas son recomendables.
```javascript
// Inmutables
const configuracionArchivos = "PDF"
// configuracionArchivos = "XML"; // Attempt to assign to const or readonly variable
```
>  Por lo tanto vamos a preferir utilizar `const`, luego `let` y nunca `var` por sus problemas de scope.

- En JavaScript tenemos dos tipos de datos: primitivos y objetos [[3]](#3). Los cuales se muestran a continuación:
``` javascript
const numero = 1; //number
const sueldo = 1.2; //number
const texto = "Alejandro"; //String
const apellido = "Llanganate"; //String
const booleano = false; //boolean
const hijos = null; //object
const zapatos = undefined; //undefined
```
- Así también podemos hacer uso del operador `typeof` para devolver el tipo de una variable cuando es llamada. 

```javascript
console.log(typeof numero); // number
console.log(typeof sueldo); // number
console.log(typeof texto); // string
console.log(typeof booleano); // boolean
console.log(typeof hijos); // object
console.log(typeof zapatos); // undefined
console.log(typeof apellido); // string
console.log(typeof Number("asd")); // number
console.log(Number("asd")); // NaN
```

> No es posible usar typeof para determinar si un objeto JavaScript es una matriz (o una fecha).


*Truthy Falsy*

- En JavaScript, un valor truthy es un valor que se considera verdadero cuando se encuentra en un contexto booleano. Todos los valores son verdaderos a menos que se definan como falsos (es decir, excepto falso, 0, -0, 0n, "", nulo, indefinido y NaN). JavaScript utiliza la coerción de tipos en contextos booleanos.

```javascript
if(""){
    console.log("String vacio es verdadero");
}else {
    console.log("String vacio Es Falsy");
}
if("Alejandroly"){
    console.log("String con datos Es Truty");
}else {
    console.log("String con datos Falso");
}
```

- Esto podemos aplicarlo también con números como condición:
```javascript
// Ejercicio en números
if(-1){
    console.log("Negativos Es truthy"); // truthy
}else {
    console.log("Negativos Es Falso");
}
if(0){
    console.log("Cero Es Truthy");
}else {
    console.log("Cero Es Falso"); // falsy
}
if(1){
    console.log("Positivos Es Truthy"); // truthy
}else {
    console.log("Positivos Es Falso");
}
```
- `Null` y `Undefined`, ambos sirven para algo muy parecido, que es indicar la ausencia de valor. Lo que ocurre es que `undefined` es un valor que denota que no hay valor porque no se ha definido todavía, mientras que `null` se usa para indicar que no hay valor porque así lo hemos querido indicar expresamente [[4]](#4).

```javascript
//Null y undefined
if(null){
    console.log("Null Es Truty");
}else {
    console.log("Null Es Falso"); // falsy
}
if(undefined){
    console.log("Undefined Es Truty");
}else {
    console.log("Undefined Es Falso"); // falsy
}
```

*Objects*

- El objeto JavaScript es una entidad independiente que contiene varios valores en términos de propiedades y métodos.
``` javascript
const alejandro = {
    nombre: "Alejandro", // llave: valor
    false : 'Llanganate',
    edad : 23,
    hijos : null,
    zapatos : undefined,
    casado : false,
    ropa: {
        color: 'rojo',
        talla: '34',
    },
    mascotas: ['mily','shapy','fiore'],
};
```

### Conclusiones
En conclusión JavaScript es un lenguaje débilmente tipado, dinámico, asíncrono y basado en prototypes, popular en el ámbito de desarrollo web. Para ejecutarlo en un ordenador sin la necesidad de un navegador, es necesario utilizar Node.js, el cual es un JavaScript runtime con múltiples características. Así también, el uso de variables en JavaScript tiene diferentes formas, sin embargo el más recomendado es el uso de variables inmutables y evitar el uso de la palabra reservada var que antes de ES6 era comunmente utilizada pero que mostró con el tiempo varios defectos por su scope global. Finalmente, el lenguaje JavaScript mantiene un comportamiento inesperado en algunos casos de Truthy Falsy y con el manejo de NaNs que lo engloba como numbers, lo cual se podría ver como una desventaja de este lenguaje.

### Bibliografía
<a id="1">[1]</a> https://www.um.es/docencia/barzana/DAWEB/2017-18/daweb-NodeJS.pdf

<a id="2">[2]</a> https://www.jetbrains.com/es-es/webstorm/

<a id="3">[3]</a> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures

<a id="4">[4]</a> https://www.jasoft.org/Blog/post/que-diferencias-existen-entre-null-y-undefined-en-javascript#:~:text=Ambos%20sirven%20para%20algo%20muy,lo%20hemos%20querido%20indicar%20expresamente.
