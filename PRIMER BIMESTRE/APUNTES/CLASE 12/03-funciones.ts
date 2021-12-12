
function sumarNumeros(
        numeroInicial: number,
        ...numerosInfinitos: number[]
): number{
    return numeroInicial;
}

// sumarNumeros('asd', 'asd'); // Tipos de datos no permitidos
sumarNumeros(1,1,2,3,4,5); // Tipos de datos permitidos

function imprimir(mensaje:string):void{
    console.log('Hola '+mensaje);
}

// Arreglos
const  arregloNumeros:number[] = [1,2]; // solos números
const arregloNumeroDos: Array<number> = [1,2];
  
const arregloNumeroTres: (number|string|boolean)[]= [1,'dos',true]; // arreglo que puede contener números, cadenas de texto o booleanos
const arregloNumeroCuatro: (Array<number>|string|boolean)[] = [[4],'dos',true];

let arregloNumerosCinco: number[]|string[] = [1,2]; // arreglo sólo de números o sólo de booleanos
arregloNumerosCinco = ['uno','dos'];
