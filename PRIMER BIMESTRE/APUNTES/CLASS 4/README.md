# Clase 4 - Objectos
### Objetivos
- Comprender como asignar y acceder a las propiedades de un objeto en JavaScript, y métodos relacionados útiles a la hora de codificar.
- Entender la diferencia entre las variables por valor y las variables por referencia, y aplicar estos conocimientos en ejemplos prácticos.

### Desarrollo
*Objects*

- Podemos acceder a las propiedades de un objeto de diferentes maneras. Incluso podemos acceder a propiedades no declaradas en el objeto, pero estas tendrán el valor de `undefined`.
```javascript
// Acceder a las propiedades del objeto
alejandro.nombre; // Alejandro
alejandro.apellido; // Llanganate
alejandro["nombre"]; // Alejandro
console.log(alejandro); // todo el objeto

// Asignar valores
alejandro.nombre = "Luis";
console.log(alejandro); // cambio efectuado

alejandro["nombre"] = "Alejandro";
alejandro.sueldo; // propiedad previamente no declarada
console.log(alejandro.sueldo) // undefined

// Crear una nueva propiedad
alejandro.sueldo = 1.2;
alejandro["alejandro"] = 0.8
```

- `Object.keys` nos devuelve un arreglo de todas llaves.
```javascript
console.log(Object.keys(alejandro));
```

- `Objects.values` nos devuelve un arreglo de los valores.
```javascript
console.log(Object.values(alejandro));
```

- `delete` es una palabra reservada que permite eliminar propiedades de un objeto.
```javascript
// eliminar propiedades
delete alejandro.nombre
console.log(alejandro) // objecto sin la propiedad nombre
```

*Variables por valor*
- Cuando reasignamos el valor de una variable a otra variable, si se trata de primitivos, entonces estamos asignando el valor de esa variable más no su referencia.
```javascript
// Para primitivos: number, string, boolean
let edadAlejandro = 23;
let edadLuis = edadAlejandro;

console.log(edadAlejandro); // 23
console.log(edadLuis); // 23

edadAlejandro = edadAlejandro + 1;

console.log(edadAlejandro); // 24
console.log(edadLuis); // 23
```

*Variables por referencia*
- Se aplican sobre objetos.
- Al asignar un objeto a otro objeto, no se crea un nuevo objeto, sino se referencia al otro objeto lo cual hará que se modifiquen las propiedades del objeto inicial cuando en el segundo se desee cambiarlas.
```javascript
let rafael = {
    nombre: "Rafael"
};
let lenin = rafael;
console.log(rafael); // rafael
console.log(lenin); // rafael

lenin.nombre = "Lenin";

console.log(rafael); // lenin
console.log(lenin); // lenin
```
- En el caso de `delete` una propiedad, al haber asignado objetos la propiedad del objeto inicial también se verá afectada.
```javascript
delete alejandro.nombre;
console.log(rafael); // objeto sin propiedad nombre
console.log(lenin); // objeto sin propiedad nombre
```

*Clonar correctamente un objeto*

- `Object.assign` copia todas las propiedades propias enumerables de uno o más objetos de origen a un objeto de destino. Devuelve el objeto de destino modificado.
```javascript
// Forma correcta para clonar el objeto
let rafael = {
    nombre: "Rafael"
}
let lenin = Object.assign({}, rafael)
console.log(rafael); // Rafael
console.log(lenin); // Rafael

lenin.nombre = "Lenin";

console.log(rafael); // Rafael
console.log(lenin); // Lenin
```


### Conclusiones


### Biografía

