const fs = require('fs');

function promesaLeerArchivo(path) {
    return new Promise(
        (res,rej)=>{
            res('Contenido del archivo')
        }
    )
}

function promesaEscribirArchivo(path, contenidoActual, nuevoContenido) {
    return new Promise(
        (resolve, reject) => {
            resolve('Contenido de escribir archivo')
        }
    )
}

/*
El async se utiliza dentro de metodos de clases o funciones
al momento de usar async se convierte en promesa
 */
const ejemplo1= async ()=>{}
async function ejercicio(){
    console.log('1')
    try {
        console.log('2')
        const contenidoArchivoActual = await promesaLeerArchivo()
        console.log(contenidoArchivoActual)
        console.log('3')
        await promesaEscribirArchivo()
        console.log('4')
        nuevoContenido = await promesaLeerArchivo()
        console.log(nuevoContenido)
        console.log('5')
    }catch(err){
console.log(err)
    }
    console.log('6')
    console.log('7')
    return nuevoContenido
}

ejercicio().then(
    (data)=>{
        console.log("ESTA ES LA RESPUETA DEL ASYNC AWAIT", data)
    }
).catch().finally()
