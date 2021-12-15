import * as inquirer from 'inquirer'
import { askInformationToCreateABook } from '../../books/cli/create.book';
import { askToDeleteABook } from '../../books/cli/delete.book';
import { askToGetABookByISBN } from '../../books/cli/read.book';
import { askToUpdateABook } from '../../books/cli/update.book';
import { askInformationToCreateALibrary } from '../../libraries/cli/create.library';
import { askToDeleteALibrary } from '../../libraries/cli/delete.library';
import { showALibraryById, showLibraries } from '../../libraries/cli/read.library';
import { askInformationToUpdateALibrary } from '../../libraries/cli/update.library';

export const askForModule = (): Promise<any> => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'module',
            message: 'Bievenido. Selecciona el módulo en el que vas a trabajar.',
            choices: [
                'Bibliotecas',
                'Libros',
                new inquirer.Separator(),
                'Salir del programa',
            ],
        }
    ]);
}

export const askForOperation = (moduleName: string): Promise<any> => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'crudOperation',
            message: '¿Qué deseas hacer?',
            choices: [
                `Crear ${moduleName.slice(-1) === 'a' ? 'una' : 'un'} ${moduleName.toLowerCase()}`,
                `Consultar ${moduleName.slice(-1) === 'a' ? 'todas las' : 'todos los'} ${moduleName.toLowerCase()}s`,
                `Consultar ${moduleName.slice(-1) === 'a' ? 'una' : 'un'} ${moduleName.toLowerCase()} por su ID`,
                `Actualizar ${moduleName.slice(-1) === 'a' ? 'una' : 'un'} ${moduleName.toLowerCase()}`,
                `Eliminar ${moduleName.slice(-1) === 'a' ? 'una' : 'un'} ${moduleName.toLowerCase()}`,
                new inquirer.Separator(),
                'Volver',
            ],
        }
    ]);
}

const bookOptions =
{
    create: 'Crear un libro',
    read: ['Consultar todos los libros',
        'Consultar un libro por su ID'],
    update: 'Actualizar un libro',
    delete: 'Eliminar un libro',
}

const libraryOptions = {
    create: 'Crear una biblioteca',
    read: ['Consultar todas las bibliotecas',
        'Consultar una biblioteca por su ID'],
    update: 'Actualizar una bibliteca',
    delete: 'Eliminar un libro',
};

export const processOption = async (option: string, callback : Function) => {
    switch (option) {
        // Library
        case libraryOptions.create:
            await askInformationToCreateALibrary();
            callback();
            break;
        case libraryOptions.read[0]:
            await showLibraries();
            callback();
            break;
        case libraryOptions.read[1]: // by id
            const library = await showALibraryById()
            console.log(library);
            callback();
            break;
        case libraryOptions.update:
            await askInformationToUpdateALibrary();
            callback();
            break;
        case libraryOptions.delete:
            await askToDeleteALibrary();
            callback();
            break;
        // Book
        case bookOptions.create:
            await askInformationToCreateABook();
            callback();
            break;
        case bookOptions.read[0]:
            
            break;
        case bookOptions.read[1]: // by id
            const book = await askToGetABookByISBN();
            console.log(book);
            callback();
            break;
        case bookOptions.update:
            await askToUpdateABook();
            callback();
            break;
        case bookOptions.delete:
            await askToDeleteABook();
            callback();
            break;
        default:
        
            break;
    }
}
