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
exports.askInformationToCreateABook = void 0;
const inquirer_1 = __importDefault(require("inquirer"));
const update_library_1 = require("../../libraries/cli/update.library");
const library_controller_1 = __importDefault(require("../../libraries/controllers/library.controller"));
const book_controller_1 = __importDefault(require("../controllers/book.controller"));
inquirer_1.default.registerPrompt("date", require("inquirer-date-prompt"));
const questions = [
    {
        type: 'input',
        name: 'ISBN',
        message: "¿Cuál es el ISBN del libro?",
        validate(value) {
            const pass = value.match(/^(?:ISBN(?:-13)?:?\ )?(?=[0-9]{13}$|(?=(?:[0-9]+[-\ ]){4})[-\ 0-9]{17}$)97[89][-\ ]?[0-9]{1,5}[-\ ]?[0-9]+[-\ ]?[0-9]+[-\ ]?[0-9]$/i);
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
        filter(val) {
            return val === 'Sí' ? true : false;
        },
    },
];
const askInformationToCreateABook = () => __awaiter(void 0, void 0, void 0, function* () {
    const libraries = yield library_controller_1.default.getAllLibraries();
    const selection = yield inquirer_1.default.prompt((0, update_library_1.getQuestionsForSelectLibrary)(libraries));
    const newBook = yield inquirer_1.default.prompt(questions);
    const library = (0, update_library_1.getLibraryByFormat)(libraries, selection.library);
    return book_controller_1.default.createBook(newBook, library.id);
});
exports.askInformationToCreateABook = askInformationToCreateABook;
