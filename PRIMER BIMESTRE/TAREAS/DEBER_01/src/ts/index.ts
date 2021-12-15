import * as inquirer from 'inquirer'
import { askInformationToCreateABook } from './books/cli/create.book';
import { askForModule, askForOperation } from './general/cli/general.cli';
import { askInformationToCreateALibrary } from './libraries/cli/create.library';


async function runApp() {
    try {
        const menuSelection = await askForModule()
        switch (menuSelection.module) {
            case 'Salir del programa':
                console.log('Hasta la próxima vaquero.')
                break;
            case 'Bibliotecas':
                const libraryOperationSelection = await askForOperation('biblioteca');
                await askInformationToCreateALibrary();
                console.log(libraryOperationSelection);
                break;
            case 'Libros':
                const bookOperationSelection = await askForOperation('libro');
                process(bookOperationSelection.crudOperation);
                break;
            default:
                break;
        }
    } catch (error) {
        console.log(error)
    }
}

const process = async (operation : string) => {
    console.log(operation)
    if (operation === 'Crear un libro'){
        const newBook = await askInformationToCreateABook();
        console.log(newBook)
    }
}

runApp()
