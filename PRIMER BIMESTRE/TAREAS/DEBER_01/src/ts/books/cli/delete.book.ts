import inquirer from 'inquirer'
import { getLibraryByFormat, getQuestionsForSelectLibrary } from '../../libraries/cli/update.library';
import LibraryController from '../../libraries/controllers/library.controller';
import BookController from '../controllers/book.controller';
import { getBookByFormat, getQuestionsForSelectABook } from './update.book';

export const askToDeleteABook = async () => {
    const libraries = await LibraryController.getAllLibraries();
    const selection = await inquirer.prompt(getQuestionsForSelectLibrary(libraries));
    const library = getLibraryByFormat(libraries, selection.library);
    const books = await BookController.getAllBooks(library.id);
    const bookSelected = await inquirer.prompt(getQuestionsForSelectABook(books));
    const book = getBookByFormat(books, bookSelected.book);
    return BookController.deleteBookByISBN(book.ISBN, library.id);
}