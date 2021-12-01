function promesaEsPar(numero){
    return miPrimeraPromesa = new Promise( //Definición de la promesa asíncrona
        (
            resolve, // return --> then
            reject // throw --> catch
        ) => {
            if(numero % 2 === 0 ){
                resolve(numero); // Si dejamos vacio --> Undefined
            } else {
                reject("No es par =(");
            }
        }
    );
}

function promesaElevarAlCuadrado(numero){
    return miSegundaPromesa = new Promise(
        (resolve, reject) => { // callback
            const numeroElevado = Math.pow(numero, 2);
            resolve(numeroElevado);
        }
    );
}


promesaEsPar(6)
    .then(
        (datosPromesa) => { // resolve
            console.log(datosPromesa)
            return promesaElevarAlCuadrado(datosPromesa)
        }
    )
    .then( // resolve promesaElevarAlCuadrado
        (datosElevados) =>{
            console.log(datosElevados)
        }
    )
    .catch( // throw
        (error) =>{
            console.log(error)
        }
    )
    .finally()