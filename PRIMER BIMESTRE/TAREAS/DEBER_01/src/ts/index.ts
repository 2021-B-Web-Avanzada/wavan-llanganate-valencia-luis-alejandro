import * as inquirer from 'inquirer'
import { askForModule, askForOperation } from './cli/generalCLI';

async function runApp() {
    try {
        const menuSelection = await askForModule()
        switch (menuSelection.module) {
            case 'Salir del programa':
                console.log('Hasta la próxima vaquero.')
                break;
            case 'Bibliotecas':
                console.log('biblioteca'.slice(-1));
                const libraryOperationSelection = await askForOperation('biblioteca');
                break;
            case 'Libros':
                const bookOperationSelection = await askForOperation('libro');
                break;

            default:
                break;
        }
    } catch (error) {
        console.log(error)
    }
}

runApp()
