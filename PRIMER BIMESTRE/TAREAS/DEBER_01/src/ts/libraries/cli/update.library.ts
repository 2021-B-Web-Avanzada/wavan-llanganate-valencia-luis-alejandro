import inquirer from 'inquirer';
import LibraryController from '../controllers/library.controller';
import Library from '../entities/library.entity';

inquirer.registerPrompt("date", require("inquirer-date-prompt"));


export const setFormatLibrary = (library: Library) => {
    return `ID: ${library.id} - Lugar: ${library.location} - Responsable: ${library.responsable}`
}

export const getQuestionsForSelectLibrary = (libraries: Array<Library>) => {
    const formatLibraries = libraries.map(library => setFormatLibrary(library));
    return [
        {
            type: 'list',
            name: 'library',
            message: "Seleccione una biblioteca:",
            choices: formatLibraries,
        },
    ];
}

const getQuestionsUpdateLibrary = (library: Library) => {
    return [
        {
            type: 'list',
            name: 'location',
            message: "¿Seleccione la ubicación de la biblioteca?",
            choices: [
                'SISTEMAS', 'GEOLOGÍA', 'QUÍMICA', 'FORMACIÓN BÁSICA', 'ADMINISTRACIÓN CENTRAL',
                'CEC', 'MECANICA', 'CIENCIAS'
            ],
            default() {
                return library.location;
            },
        },
        {
            type: 'input',
            name: 'responsable',
            message: "¿Ingrese el nombre del responsable?",
            default() {
                return library.responsable;
            },
        },
        {
            type: 'date',
            name: 'openingHour',
            message: "¿Cuál es la hora de atención?",
            format: { month: undefined, year: undefined, day: undefined, hour: "numeric", minute: "numeric" },
            clearable: true,
            default() {
                return new Date(library.openingHour);
            },
        }
    ];
}

export const getLibraryByFormat = (libraries: Array<Library>, librarySelected: string): Library => {
    return libraries.filter(library => setFormatLibrary(library) === librarySelected)[0]
}

export const askInformationToUpdateALibrary = async () => {
    const libraries = await LibraryController.getAllLibraries();
    const selection = await inquirer.prompt(getQuestionsForSelectLibrary(libraries))
    const library = getLibraryByFormat(libraries, selection.library);
    const userInput = await inquirer.prompt(getQuestionsUpdateLibrary(library))
    const libraryModified: Library = {
        id: library.id,
        books: library.books,
        ...userInput,
    }
    return LibraryController.updateLibrary(libraryModified);
}