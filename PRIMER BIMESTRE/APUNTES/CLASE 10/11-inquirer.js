const inquirer = require('inquirer');

async function main() {
    try {
        const response = await inquirer
            .prompt(
                [
                    {
                        type: 'input',
                        name: 'apellido',
                        message: 'Ingresa Tu Nombre'
                    },
                    {
                        type: 'input',
                        name: 'edad',
                        message: 'Ingresa tu Edad'
                    }
                ]
            )
        console.log('Respuesta', response)
    } catch (e) {
        console.error(e)
    }
}


main().then(r => "")
