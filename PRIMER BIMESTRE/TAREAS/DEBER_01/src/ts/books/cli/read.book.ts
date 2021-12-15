import inquirer from 'inquirer'
import { getLibraryByFormat, getQuestionsForSelectLibrary } from '../../libraries/cli/update.library';
import LibraryController from '../../libraries/controllers/library.controller';
import Library from '../../libraries/entities/library.entity';
import BookController from '../controllers/book.controller';
import Book from '../entities/book.entity';
import { getBookByFormat, getQuestionsForSelectABook, setFormatBook } from './update.book';


export const showBooks = async () => {
    const libraries = await LibraryController.getAllLibraries();
    const selection = await inquirer.prompt(getQuestionsForSelectLibrary(libraries));
    const library = getLibraryByFormat(libraries, selection.library);
    const books = await BookController.getAllBooks(library.id);
    books.forEach(book => {
        console.log(setFormatBook(book));
    });
}


export const askToGetABookByISBN = async () => {
    const libraries = await LibraryController.getAllLibraries();
    const selection = await inquirer.prompt(getQuestionsForSelectLibrary(libraries));
    const library = getLibraryByFormat(libraries, selection.library);
    const books = await BookController.getAllBooks(library.id);
    return await inquirer.prompt(getQuestionsForSelectABook(books));
}