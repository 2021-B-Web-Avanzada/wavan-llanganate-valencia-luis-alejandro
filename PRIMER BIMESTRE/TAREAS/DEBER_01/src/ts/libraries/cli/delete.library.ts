import inquirer from 'inquirer';
import LibraryController from '../controllers/library.controller';
import { getLibraryByFormat, getQuestionsForSelectLibrary } from './update.library';

export const askLibraryToDelete = async () => {
    const libraries = await LibraryController.getAllLibraries();
    const selection = await inquirer.prompt(getQuestionsForSelectLibrary(libraries))
    const library = getLibraryByFormat(libraries, selection.library);
    LibraryController.deleteLibraryById(library.id);
}