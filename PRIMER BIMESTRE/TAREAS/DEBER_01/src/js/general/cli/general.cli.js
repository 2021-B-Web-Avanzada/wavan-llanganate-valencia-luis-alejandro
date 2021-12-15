"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.processOption = exports.askForOperation = exports.askForModule = void 0;
const inquirer = __importStar(require("inquirer"));
const create_book_1 = require("../../books/cli/create.book");
const delete_book_1 = require("../../books/cli/delete.book");
const read_book_1 = require("../../books/cli/read.book");
const update_book_1 = require("../../books/cli/update.book");
const create_library_1 = require("../../libraries/cli/create.library");
const delete_library_1 = require("../../libraries/cli/delete.library");
const read_library_1 = require("../../libraries/cli/read.library");
const update_library_1 = require("../../libraries/cli/update.library");
const askForModule = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'module',
            message: 'Bievenido. Selecciona el módulo en el que vas a trabajar.',
            choices: [
                'Bibliotecas',
                'Libros',
                new inquirer.Separator(),
                'Salir del programa',
            ],
        }
    ]);
};
exports.askForModule = askForModule;
const askForOperation = (moduleName) => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'crudOperation',
            message: '¿Qué deseas hacer?',
            choices: [
                `Crear ${moduleName.slice(-1) === 'a' ? 'una' : 'un'} ${moduleName.toLowerCase()}`,
                `Consultar ${moduleName.slice(-1) === 'a' ? 'todas las' : 'todos los'} ${moduleName.toLowerCase()}s`,
                `Consultar ${moduleName.slice(-1) === 'a' ? 'una' : 'un'} ${moduleName.toLowerCase()} por su ID`,
                `Actualizar ${moduleName.slice(-1) === 'a' ? 'una' : 'un'} ${moduleName.toLowerCase()}`,
                `Eliminar ${moduleName.slice(-1) === 'a' ? 'una' : 'un'} ${moduleName.toLowerCase()}`,
                new inquirer.Separator(),
                'Volver',
            ],
        }
    ]);
};
exports.askForOperation = askForOperation;
const bookOptions = {
    create: 'Crear un libro',
    read: ['Consultar todos los libros',
        'Consultar un libro por su ID'],
    update: 'Actualizar un libro',
    delete: 'Eliminar un libro',
};
const libraryOptions = {
    create: 'Crear una biblioteca',
    read: ['Consultar todas las bibliotecas',
        'Consultar una biblioteca por su ID'],
    update: 'Actualizar una bibliteca',
    delete: 'Eliminar un libro',
};
const processOption = (option, callback) => __awaiter(void 0, void 0, void 0, function* () {
    switch (option) {
        // Library
        case libraryOptions.create:
            yield (0, create_library_1.askInformationToCreateALibrary)();
            callback();
            break;
        case libraryOptions.read[0]:
            yield (0, read_library_1.showLibraries)();
            callback();
            break;
        case libraryOptions.read[1]: // by id
            const library = yield (0, read_library_1.showALibraryById)();
            console.log(library);
            callback();
            break;
        case libraryOptions.update:
            yield (0, update_library_1.askInformationToUpdateALibrary)();
            callback();
            break;
        case libraryOptions.delete:
            yield (0, delete_library_1.askToDeleteALibrary)();
            callback();
            break;
        // Book
        case bookOptions.create:
            yield (0, create_book_1.askInformationToCreateABook)();
            callback();
            break;
        case bookOptions.read[0]:
            break;
        case bookOptions.read[1]: // by id
            const book = yield (0, read_book_1.askToGetABookByISBN)();
            console.log(book);
            callback();
            break;
        case bookOptions.update:
            yield (0, update_book_1.askToUpdateABook)();
            callback();
            break;
        case bookOptions.delete:
            yield (0, delete_book_1.askToDeleteABook)();
            callback();
            break;
        default:
            break;
    }
});
exports.processOption = processOption;
