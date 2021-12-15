import inquirer from 'inquirer';
import LibraryController from '../controllers/library.controller';
import { getLibraryByFormat, getQuestionsForSelectLibrary, setFormat } from './update.library';

export const showLibraries = async () => {
    const libraries = await LibraryController.getAllLibraries();
    libraries.map(library => {
        console.log(setFormat(library))
    })
}

export const showALibraryById = async () => {
    const libraries = await LibraryController.getAllLibraries();
    const selection = await inquirer.prompt(getQuestionsForSelectLibrary(libraries))
    const library = getLibraryByFormat(libraries, selection.library);
    console.log(setFormat(library));
}