"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.askToUpdateABook = exports.getBookByFormat = exports.getQuestionsForSelectABook = exports.setFormatBook = void 0;
const inquirer_1 = __importDefault(require("inquirer"));
const update_library_1 = require("../../libraries/cli/update.library");
const library_controller_1 = __importDefault(require("../../libraries/controllers/library.controller"));
const book_controller_1 = __importDefault(require("../controllers/book.controller"));
const setFormatBook = (book) => {
    return `ISBN: ${book.ISBN} - NOMBRE: ${book.title} - AUTOR: ${book.author} [${book.available ? "DISPONIBLE" : "NO DISPONIBLE"}]`;
};
exports.setFormatBook = setFormatBook;
const getQuestionsForSelectABook = (books) => {
    const formatBooks = books.map(book => (0, exports.setFormatBook)(book));
    return [
        {
            type: 'list',
            name: 'book',
            message: "Seleccione un libro:",
            choices: formatBooks,
        },
    ];
};
exports.getQuestionsForSelectABook = getQuestionsForSelectABook;
const getQuestionsForModifyABook = (bookSelected) => {
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
            filter(val) {
                return val === 'Sí' ? true : false;
            },
            default() {
                return bookSelected.available;
            },
        },
    ];
};
const getBookByFormat = (books, bookSelected) => {
    return books.filter(book => (0, exports.setFormatBook)(book) === bookSelected)[0];
};
exports.getBookByFormat = getBookByFormat;
const askToUpdateABook = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const libraries = yield library_controller_1.default.getAllLibraries();
        const selection = yield inquirer_1.default.prompt((0, update_library_1.getQuestionsForSelectLibrary)(libraries));
        const library = (0, update_library_1.getLibraryByFormat)(libraries, selection.library);
        const books = yield book_controller_1.default.getAllBooks(library.id);
        if (books.length !== 0) {
            const bookSelected = yield inquirer_1.default.prompt((0, exports.getQuestionsForSelectABook)(books));
            const book = (0, exports.getBookByFormat)(books, bookSelected.book);
            const userInput = yield inquirer_1.default.prompt(getQuestionsForModifyABook(book));
            const bookModified = Object.assign({ ISBN: book.ISBN }, userInput);
            yield book_controller_1.default.updateBook(bookModified, library.id);
            console.log('Libro actualizado correctamente');
        }
        else {
            console.log('Esta biblioteca no tiene libros');
        }
    }
    catch (error) {
        return 'No se pudo actualizar porque el libro no existe';
    }
});
exports.askToUpdateABook = askToUpdateABook;
