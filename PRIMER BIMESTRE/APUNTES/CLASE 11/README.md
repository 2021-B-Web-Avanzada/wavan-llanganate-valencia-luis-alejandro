# Clase 11 - TypeScript

### Objetivos

- Conocer las principales características de typescript como un superset de Javascript y su tipado estático.
- Entender la asignación de tipos de datos a variables empleando nuevas funcionalidades del propio lenguaje como por ejemplo `any` o el `union type`.
- Comprender la diferencia entre el proceso de compilación y transpilación característico de TypeScript.

### Desarrollo

TypeScript es un lenguaje desarrollado y mantenido por Microsoft.

<p align='center'>
  <img width='400px;' src="https://user-images.githubusercontent.com/20259832/145035100-2d3a401e-9324-460e-8500-211d7882985e.png">
</p>


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

<p align='center'>
  <img width='400px;' src="https://user-images.githubusercontent.com/20259832/145035265-6434ed9d-ff88-4c44-886a-df9a9b63a22f.png">
</p>

Los transpilers, o source-to-source compilers, son herramientas que leen el código fuente escrito en un lenguaje de programación y producen el código equivalente en otro lenguaje de programación con un nivel similar de abstracción [3].

Para hacer aquello hacemos uso del comando `tsc` que permitirá darnos un `.js` con el código equivalente a JavaScript.

```
tsc 01-variable.ts
```

Como se puede observar a continuación este archivo a sido generado y puede ser ejecutado utilizando `node 01-variable.ts`:

<p align='center'>
  <img src="https://user-images.githubusercontent.com/20259832/145033793-c01f67c2-7fbb-4e1d-b8b5-2c492cd221af.png">
</p>

**Interfaces**

En TypeScript, las interfaces cumplen la función de nombrar tipos específicos y son una forma poderosa de definir contratos dentro de su código, así como contratos con código fuera de su proyecto [4].

- Los atributos de la interfaz pueden ser requeridos o no. Es decir, `edad?` es un tipo no requerido o que es lo mismo en nuestro ejemplo: `number | undefined`.
- También podemos poner valores quemados `boolean | 0 | 1`.
- También en una interfaz podemos tipar funciones.

```typescript
interface Usuario{
    nombre: string;
    apellido: string;
    edad?: number; //Opcional
    sueldo?: number; //Opcional
    casado: boolean | 0 | 1;
    estado: "AC"  | "IN" | "BN";
    imprimirUsuario: (mensaje: string) => string | "BN";
    calcularImpuestos: (impuestos : number) => number;
    estadoActual: () => "AP" | "AF" | "AT";
    //calcularImpuestos paramentro numero impuestos, sueldo + sueldo * impuestos
    //estadoActual n orecibe parametros,  "AP"  "AF" "AT";
}
```

Ahora bien, haremos uso de nuestra interfaz:
```
let user: Usuario = {
  nombre: 'Adrian',
  apellido: 'Eguez',
  casado: 0
  sueldo: 11.2,
  estado: 'BN',
  imprimirUsuario: mensaje => {
    return 'El mensaje es:' + mensaje;
  },
  calcularImpuestos: impuesto => {
    return this.sueldo + this.sueldo * impuesto;
  },
  estadoActual: () => {
    switch(this.estado){
      case 'AC':
        return 'AP';
      case 'IN':
        return 'AF';
      case 'BN':
        return 'AT';
    }
  }
}  
```


### Conclusiones
- TypeScript implementa mejoras como el tipado estático y nuevos elementos para la programación orientada a objetos, que permiten programar con la lógica de JavaSciprt de una forma más segura a la hora de hacer el proceso de depuración de código o a su vez de encontrar errores o excepciones a la hora de programar. Por lo tanto, este lenguaje de programación mantenido por Microsoft es útil para proyectos grandes con muchas líneas de código en donde el proceso de debugging podría llegar a ser muy complejo.
- El uso de `any` no es recomendable en TypeScript y debe ser evitado ya que sacrifica el sistema de tipado fuerte que mantiene el lenguaje. No obstante, permite simular al tipado dinámico de javascript pero podría ser reemplazado por ejemplo por el uso de `Union Type` que permite englobar diferentes tipos de datos a una variable.
- Una interfaz es útil a la hora de aplicar `duck typing` en nuestro códgo. Así también, es una funcionalidad que agrega este lenguaje a JavaScrript en donde es importante tener claro que una interfaz no es un objeto sino un tipo de dato con nuestro contrato definido.

### Referencias

<a id="1">[1]</a> https://cutt.ly/EYcuufN.

<a id="2">[2]</a> https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html.

<a id="3">[3]</a> https://howtodoinjava.com/typescript/transpiler-vs-compiler/.

<a id="4">[4]</a> https://www.typescriptlang.org/docs/handbook/interfaces.html.
