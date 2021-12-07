# Clase 11 - TypeScript

### Objetivos

### Desarrollo

TypeScript es un lenguaje desarrollado y mantenido por Microsoft.

**Características:**

- TypeScript es un *superset* de JavaScript, es decir, tiene todas las funcionalidades de JavaScript y además incorpora una capa de funcionalidades adicionales.
  - Los programas de JavaScript son programas válidos de TypeScript, a pesar de que TypeScript sea otro lenguaje de programación.

- Tiene tipado estático, es decir, nos permite definir el tipo de las variables que vamos a usar. Además:
  - Las variables tienen un tipo de dato.
  - Los valores sólo se pueden asignar a variables del tipo correspondiente.

**Variables**

- Es posible declarar una variable de la siguiente forma. Notar que de la primera forma el tipo con minúscula `string` se refiere al tipo de dato primitivo, mientras que en el segundo caso con mayúsucula `String`, el tipo de dato se refiere a la clase.

```typescript
let nombre: string = 'Adrian'; // primitivo
let nombre2: String = 'Adrian2'; // Clase String

// nombre = 1; // error
nombre = 'Vicente'; // correct
```

- Así también en TypeScript tenemos los siguientes tipos de datos:

```typescript
let edad: number = 32;
let casado: boolean = false;
let fecha: Date = new Date();
let sueldo: number;
sueldo = 12.4;
```

- Este lenguaje también emplea `Duck typing`:

> If it walks like a duck and it quacks like a duck, then it must be a duck

Que permite al lenguaje hacer la coerción respectiva para entender que tipo de variable es.

```typescript
let apellido = 'Eguez'; // string -->
apellido = 'Adrian'; // igual a otros string
apellido.toUpperCase(); // metodos string
```

**Any**
- El tipo any nos permite asignar literalmente "cualquier" valor particular a esa variable, simulando lo que conocemos como JavaScript simple, donde los tipos pueden asignarse dinámicamente desde diferentes tipos [1].
- Se puede decir que any es un `tipo comodín`, el cual permite ser reemplazado con cualquier otro tipo (exceptuando never) con el fin de asignar tipos diferentes entre si [1].

```typescript
let marihuana: any = 2;
marihuana = '2';
marihuana = () => '2';
```

**Union Type**

Describe un valor que puede ser de diferentes tipos. Usamos la barra vertical `|` para separar cada tipo. Por lo tanto si decimos, `number | string | boolean` como especificación de un tipo de datos, entonces esta variable puede ser tanto un número un string o un booleano.
```typescript
let edadMultiple: number | string | Date;
edadMultiple = '2';
edadMultiple = 2222;
edadMultiple = 'dos';
edadMultiple = new Date();
// edadMultiple = true; // error
```

**Transpiler vs Compiler**

Los transpilers, o source-to-source compilers, son herramientas que leen el código fuente escrito en un lenguaje de programación y producen el código equivalente en otro lenguaje de programación con un nivel similar de abstracción [3].

Para hacer aquello hacemos uso del comando `tsc` que permitirá darnos un `.js` con el código equivalente a javascript.

```
tsc 01-variable.ts
```

Como se puede observar a continuación este archivo a sido generado y puede ser ejecutado utilizando `node 01-variable.ts`:






[1] https://cutt.ly/EYcuufN

[2] https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html

[3] https://howtodoinjava.com/typescript/transpiler-vs-compiler/
