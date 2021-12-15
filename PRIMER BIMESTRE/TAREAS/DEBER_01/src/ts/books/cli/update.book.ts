import inquirer from 'inquirer'
import { getLibraryByFormat, getQuestionsForSelectLibrary } from '../../libraries/cli/update.library';
import LibraryController from '../../libraries/controllers/library.controller';
import BookController from '../controllers/book.controller';
import Book from '../entities/book.entity';
import { showBooks } from './read.book';



export const setFormatBook = (book: Book) => {
    return `ISBN: ${book.ISBN} - NOMBRE: ${book.title} - AUTOR: ${book.author} [${book.available ? "DISPONIBLE" : "NO DISPONIBLE"}]`
}

export const getQuestionsForSelectABook = (books: Array<Book>) => {
    const formatBooks = books.map(book => setFormatBook(book));
    return [
        {
            type: 'list',
            name: 'book',
            message: "Seleccione un libro:",
            choices: formatBooks,
        },
    ];
}

const getQuestionsForModifyABook = (bookSelected: Book) => {
    return [
        {
            type: 'input',
            name: 'title',
            message: "¿Cuál es el título del libro?",
            default() {
                return bookSelected.title;
            },
        }, {
            type: 'input',
            name: 'author',
            message: "¿Quien es el autor del libro?",
            default() {
                return bookSelected.author;
            },
        },
        {
            type: 'date',
            name: 'datePublished',
            message: "¿Cuál es la fecha de publicación del libro?",
            format: { month: "short", hour: undefined, minute: undefined },
            clearable: true,
            default() {
                return new Date(bookSelected.datePublished);
            },
        },
        {
            type: 'list',
            name: 'available',
            message: "¿Está disponible el libro?",
            choices: ['Sí', 'No'],
            filter(val: string) {
                return val === 'Sí' ? true : false;
            },
            default() {
                return bookSelected.available;
            },
        },
    ];
}

export const getBookByFormat = (books: Array<Book>, bookSelected: string): Book => {
    return books.filter(book => setFormatBook(book) === bookSelected)[0]
}

export const askToUpdateABook = async () => {
    const libraries = await LibraryController.getAllLibraries();
    const selection = await inquirer.prompt(getQuestionsForSelectLibrary(libraries));
    const library = getLibraryByFormat(libraries, selection.library);
    const books = await BookController.getAllBooks(library.id);
    const bookSelected = await inquirer.prompt(getQuestionsForSelectABook(books));
    const book = getBookByFormat(books, bookSelected.book);
    const userInput = await inquirer.prompt(getQuestionsForModifyABook(book));

    const bookModified: Book = {
        ISBN: book.ISBN,
        ...userInput
    }

    return BookController.updateBook(bookModified, library.id);
}