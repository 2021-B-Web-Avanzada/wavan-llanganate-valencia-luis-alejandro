import inquirer from 'inquirer'
import { getLibraryByFormat, getQuestionsForSelectLibrary } from '../../libraries/cli/update.library';
import LibraryController from '../../libraries/controllers/library.controller';
import BookController from '../controllers/book.controller';
import Book from '../entities/book.entity';

inquirer.registerPrompt("date", require("inquirer-date-prompt"));


const questions = [
    {
        type: 'input',
        name: 'ISBN',
        message: "¿Cuál es el ISBN del libro?",
        validate(value: string) {
            const pass = value.match(
                /^(?:ISBN(?:-13)?:?\ )?(?=[0-9]{13}$|(?=(?:[0-9]+[-\ ]){4})[-\ 0-9]{17}$)97[89][-\ ]?[0-9]{1,5}[-\ ]?[0-9]+[-\ ]?[0-9]+[-\ ]?[0-9]$/i
            );
            if (pass) {
                return true;
            }
            return 'Por favor ingrese un ISBN válido.';
        },
    },
    {
        type: 'input',
        name: 'title',
        message: "¿Cuál es el título del libro?",
    }, {
        type: 'input',
        name: 'author',
        message: "¿Quien es el autor del libro?",
    },
    {
        type: 'date',
        name: 'datePublished',
        message: "¿Cuál es la fecha de publicación del libro?",
        format: { month: "short", hour: undefined, minute: undefined },
        clearable: true,
    },
    {
        type: 'list',
        name: 'available',
        message: "¿Está disponible el libro?",
        choices: ['Sí', 'No'],
        filter(val: string) {
            return val === 'Sí' ? true : false;
        },
    },
];

export const askInformationToCreateABook = async () => {
    const libraries = await LibraryController.getAllLibraries();
    const selection = await inquirer.prompt(getQuestionsForSelectLibrary(libraries));
    const newBook : Book = await inquirer.prompt(questions);
    const library = getLibraryByFormat(libraries, selection.library);
    return BookController.createBook(newBook, library.id);
}