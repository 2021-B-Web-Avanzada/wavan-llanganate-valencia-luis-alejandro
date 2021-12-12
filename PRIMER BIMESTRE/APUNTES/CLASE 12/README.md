

### Objetivos

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

En donde se desplagará la siguiente información:



**Bibliografía**

<a id="1">[1]</a> https://www.typescriptlang.org/docs/handbook/basic-types.html

<a id="2">[2]</a> https://www.typescriptlang.org/docs/handbook/basic-types.html

