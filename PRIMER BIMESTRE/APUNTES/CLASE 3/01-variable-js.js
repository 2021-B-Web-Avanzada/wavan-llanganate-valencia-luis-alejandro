/*/*
 * __      __        _       _     _
 * \ \    / /       (_)     | |   | |
 *  \ \  / /_ _ _ __ _  __ _| |__ | | ___  ___
 *   \ \/ / _` | '__| |/ _` | '_ \| |/ _ \/ __|
 *    \  / (_| | |  | | (_| | |_) | |  __/\__ \
 *     \/ \__,_|_|  |_|\__,_|_.__/|_|\___||___/
 *  Author: Alejandro Llanganate
 */

// ----------------------------------------------
// Variables mutables e Inmutables
// ----------------------------------------------

// Mutables
var numeroUno = 1;
let numeroDos = 2;
numeroUno = 5; // puede ser reasignado
numeroDos = 8;
numeroUno = false; // puede ser reasignado a cualquier cosa
numeroUno = true;

// Inmutables
const configuracionArchivos = "PDF"
// configuracionArchivos = "XML"; // Attempt to assign to const or readonly variable

const numero = 1; //number
const sueldo = 1.2; //number
const texto = "Alejandro"; //String
const apellido = "Llanganate"; //String
const booleano = false; //boolean
const hijos = null; //object
const zapatos = undefined; //undefined

// Operador typeof
console.log(typeof numero); // number
console.log(typeof sueldo); // number
console.log(typeof texto); // string
console.log(typeof booleano); // boolean
console.log(typeof hijos); // object
console.log(typeof zapatos); // undefined
console.log(typeof apellido); // string
console.log(typeof Number("asd")); // number
console.log(Number("asd")); // NaN

// ----------------------------------------------
// Truthy Falsy
// ----------------------------------------------

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

// ----------------------------------------------
// Objects
// ----------------------------------------------

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