import inquirer from 'inquirer';
import LibraryController from '../controllers/library.controller';
import { getLibraryByFormat, getQuestionsForSelectLibrary, setFormatLibrary } from './update.library';

export const showLibraries = async () => {
    const libraries = await LibraryController.getAllLibraries();
    libraries.map(library => {
        console.log(setFormatLibrary(library))
    })
}

export const showALibraryById = async () => {
    const libraries = await LibraryController.getAllLibraries();
    const selection = await inquirer.prompt(getQuestionsForSelectLibrary(libraries))
    const library = getLibraryByFormat(libraries, selection.library);
    return setFormatLibrary(library);
}