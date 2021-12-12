

### Objetivos

- Aprender como declarar y utilizar funciones con las caraterísticas de tipado de TypeScript.
- Aplicar los conocimientos de clases de POO en TypeScript.
- Instalar Angular CLI y crear nuestro primer Workspace con el uso de un comando.

### Desarrollo

**Funciones**

- En TypeScript podemos tener parámetros tipados y funciones que retornan un valor. Por ejemplo en la siguiente función indicamos a cada parámetro el tipo de dato que puede recibir y también el tipo de dato que retorna la función, que son enteros.

```typescript
function sumarNumeros(
        numeroInicial: number,
        ...numerosInfinitos: number[]
): number{
    return numeroInicial;
}

// sumarNumeros('asd', 'asd'); // Tipos de datos no permitidos
sumarNumeros(1,1,2,3,4,5); // Tipos de datos permitidos
```

- `void`: Es lo contrario de tener cualquier tipo de datos. Es muy utilizado en las funciones para indicar que estas no deben retornar ningún valor.

```typescript
function imprimir(mensaje:string): void{
    console.log('Hola '+mensaje);
}
```

> Según [[1]](#1) declarar variables del tipo `void` no es tan utilizado puesto que solo permitiría asignar el valor de null `null` (en el caso de que strictNullChecks no este especificado), o el valor de `undefined`.


**Arreglos**

- Así también podemos declarar los siguientes arreglos con su tipo de valor tipado de diferente forma.

```typescript
// Arreglos
const  arregloNumeros:number[] = [1,2]; // solos números
const arregloNumeroDos: Array<number> = [1,2];
  
const arregloNumeroTres: (number|string|boolean)[]= [1,'dos',true]; // arreglo que puede contener números, cadenas de texto o booleanos
const arregloNumeroCuatro: (Array<number>|string|boolean)[] = [[4],'dos',true];

let arregloNumerosCinco: number[]|string[] = [1,2]; // arreglo sólo de números o sólo de booleanos
arregloNumerosCinco = ['uno','dos'];
```

**Clases**

En Typescript también podemos hacer uso de clases para crear relaciones y enfocar nuestro código a la programación orientada a objetos.

- Tenemos la siguiente visibilidad de los miembros:
  - `public`: Es la visibilidad predeterminada de los miembros de una clase. Se puede acceder a un miembro público desde cualquier lugar.
  - `static`: Estos miembors no están asociados con una instancia en particular de la clase. Se puede acceder a ellos a través del propio objeto constructor de la clase.
    - Los miembros `static` pueden usar los mismos modificadores de visibilidad `public`, `protected` y `private`.
    Por ejemplo: `private static x = 0;`

  - `protected`: Solo son visibles para las subclases de la clase en la que están declarados ([ejemplo](https://www.typescriptlang.org/play?#code/PTAEAEFMCdoe2gZwFygEwBYMFYCwAoAYwBsBDRRUAcWkkgBcZQBvA0UABwFcAjYgS0KgA5rQYAKAJQs27UITgA7RHGKQAdMTjDxAIgASkYloA0oXaADUoegAt+idcIYA5UgFtIUyQG5ZAX1kOeEZCRgATEVcPL2lWfDlQWnouaEVze10-BNBA-DyCEnJKAGUOSEJ+UmIaOkZoUEgAD0ZFcMpahiZ49m4+QVBbOAB3cIBPKRkc9hBQAHkAaRs4UFJCQkgKThCKiNBPdx4mWxhIWXYFZVUNLR0DEfGzC2s7Bydoz29sxNnEv-+AXIAHog0FgsEBAh5S6IegiUAAXlAikgw1AZQqVRqYnqUmywicOLxoFmiwIBOc9Dcn18QA)).
  - `private`: Es parecido a `protected` pero no permite el acceso a miembros incluso desde una subclase ([ejemplo](https://www.typescriptlang.org/play#code/PTAEAEFMCdoe2gZwFygEwGYAsBGAsAFADGANgIaKKgBCFkoA3oaKAA7QCWAbmQC70APUAF5QABgDchAL6EicAHaJeoAEYjQCyAHcadABQBKKQRCgAwmQUByFWSJFIlUADN4AW1BwArr0QcAE3peAAt6UgpEOUVEOBJIADoSOABzfVUEgWMgA)).

- Esto podemos aplicarlo en el siguiente ejemplo:

```typescript
class Persona{
    public nombre:string;
    public apellido:string
    static nombreReferencia:string = "Humano";
    protected nombreYApellido = ''; //Duck typing -> string
}
```

- También podemos hacer uso de un constructor para esta clase con parametros tipados.

```typescript
class Persona{
    public nombre:string;
    public apellido:string
    static nombreReferencia:string = "Humano";
    protected nombreYApellido = ''; //Duck typing -> string
    constructor(
        nombreParametro:string,
        apellidoParametro:string
    ) {
        this.nombre=nombreParametro;
        this.apellido=apellidoParametro;
        this.nombreYApellido = nombreParametro + ' '+ apellidoParametro;
    }
    private mostrarNombreApellido():string{
        return this.nombreYApellido;
    }
}
```

> En el caso de la variable `nombreYApellido` se podría utilizar `readonly` el cual es un modificador que puede ser utilizado como un prefijo para evitar asignaciones fuera del constructor.


- Las clases pueden extenderse desde una clase base con `extend`. Una clase derivada tiene todas las propiedades y métodos de su clase base y también define miembros adicionales.
- Cuando utilizamos modificadores de acceso en el constructor se convierte en propiedades de la clase.

```typescript
class Usuario extends Persona{
    constructor(
      nombreParametro : string,
      apellidoParametro : string,
      public cedula : string,
      public estadoCivil : string
      ) 
      {
        super(nombreParametro,apellidoParametro);
      }
}

const alejandro = new Usuario(
    'Alejandro',
    'Llanganate',
    '0101010101',
    'Soltero'
);
alejandro.nombre;
alejandro.apellido;
alejandro.cedula;
alejandro.estadoCivil;
```

**Instalación de Angular CLI**

- Como requisitos previos se debe tener instalado Node y NPM.
- Para instalar Angular CLI de forma global, debemos abrir el terminal y ejecutar el comando: 

```
npm install -g @angular/cli
```

- Para ver la versión más estable instalada en nuestro ordenador aplicamos el siguiente comando:

```
ng v
```

En donde se desplegará la siguiente información:
<p align='center'>
        <img width="500px;" src="https://user-images.githubusercontent.com/20259832/145724376-cb187e0d-649e-413b-81f0-0f65217fd2c8.png" alt="Command ng v">
</p>

**Creación de un Angular Workspace**

Un `workspace` en Angular es una colección de proyectos Angular impulsados por el Angular CLI que se ubican generalmente en un solo repositorio.

**`ng new app-name`**
- Este comando crea un directorio del sistema de archivos (workspace root). En el workspace root, también crea el archivo de configuración del espacio de trabajo (angular.json) y, de forma predeterminada, un proyecto de aplicación inicial con el mismo nombre.


Algunas consideraciones antes de aplicar el comando:
- Angular routing: permite la navegación a diferentes vistas de nuestra aplicación. Es la forma principal de llevar a los usuarios a diferentes destinos de la aplicación web a través de un manejador de rutas.
- SCSS: o Sassy CSS es una sinstaxis CSS agrega mucha funcionalidad adicional a CSS como variables, anidamiento y más, lo que puede hacer que escribir CSS sea más fácil y rápido.
- Sass: proviene de la palabra "Syntactically Awesome Style Sheets" y es un preprocesador CSS que puede utilizar la sintaxis SCSS.

Ahora bien luego de aplicar el comando se nos pedirá seleccionar unas configuraciones iniciales:

<p align='center'>
        <img width="800px;" src="https://user-images.githubusercontent.com/20259832/145724940-7f11c19b-bf3a-4aa3-a5d5-33b1559905e4.png" alt="ng new">
</p>


### Conclusiones
- En TypeScript podemos delimitar los miembros de una clase a través del uso de modificadores de acceso que se recomiendan que sean utilizados para tener una mejor legibilidad y encapsulamiento del código.
- Dentro de TypeScript tenemos nuevas funcionalidades que prevee errores de programación en POO, por ejemplo el uso de `readonly` que permite tener atributos que puedan ser modificados únicamente desde el constructor. O a su vez podemos crear propiedades de la clase desde el constructor, estableciéndolos como parámetros en el mismo y usando modificadores de acceso.
- La instalación de Angular se la aplica a través de lo que se conoce como el Angular CLI que dispone de varios comandos importantes para la creación de workspaces y manejo de proyectos y sus caraterísticas en Angular.


### Bibliografía

<a id="1">[1]</a> https://www.typescriptlang.org/docs/handbook/basic-types.html

<a id="2">[2]</a> https://www.typescriptlang.org/docs/handbook/basic-types.html

<a id="3">[3]</a> https://www.pluralsight.com/guides/use-sass-less-or-css-within-your-angular-component-template

