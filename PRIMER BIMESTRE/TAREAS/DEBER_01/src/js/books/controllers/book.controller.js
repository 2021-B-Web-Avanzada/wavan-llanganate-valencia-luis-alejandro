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
const fs_1 = require("fs");
const settings_1 = require("../../environment/settings");
const library_controller_1 = __importDefault(require("../../libraries/controllers/library.controller"));
const JSONFilePath = settings_1.DATA_FILE_PATH;
const { readFile, writeFile, appendFile } = fs_1.promises;
class BookController {
    static createBook(newBook, idLibrary) {
        return __awaiter(this, void 0, void 0, function* () {
            let libraries = yield library_controller_1.default.getAllLibraries();
            const library = libraries.find(library => library.id === idLibrary);
            if (library) {
                const bookExists = library.books.filter(book => book.ISBN === newBook.ISBN);
                if (bookExists.length !== 0) {
                    throw new Error('This book already exists');
                }
                library.books.push(newBook);
                libraries = libraries.map(lib => lib.id === library.id ? library : lib);
                writeFile(JSONFilePath, JSON.stringify(libraries, null, 4));
            }
        });
    }
    static getAllBooks(idLibrary) {
        return __awaiter(this, void 0, void 0, function* () {
            const libraries = yield library_controller_1.default.getAllLibraries();
            const library = libraries.find(library => library.id === idLibrary);
            if (library && library.books !== undefined) {
                return library.books;
            }
            throw new Error('Error in getAllBooks');
        });
    }
    static getBookByISBN(ISBNBook, idLibrary) {
        return __awaiter(this, void 0, void 0, function* () {
            const books = yield this.getAllBooks(idLibrary);
            const book = books.find(book => book.ISBN === ISBNBook);
            if (book) {
                return book;
            }
            else {
                throw new Error("This book doesn't exist");
            }
        });
    }
    static updateBook(bookModified, idLibrary) {
        return __awaiter(this, void 0, void 0, function* () {
            let libraries = yield library_controller_1.default.getAllLibraries();
            const library = libraries.find(library => library.id === idLibrary);
            if (library) {
                const bookExists = library.books.filter(book => book.ISBN === bookModified.ISBN);
                if (bookExists.length === 0) {
                    throw new Error('This book doesnt exist');
                }
                library.books = library.books.map(book => {
                    return book.ISBN === bookModified.ISBN ? bookModified : book;
                });
                yield library_controller_1.default.updateLibrary(library);
            }
            else {
                throw new Error('Imposible to update a book that is not stored in a library');
            }
        });
    }
    static deleteBookByISBN(ISBNBook, idLibrary) {
        return __awaiter(this, void 0, void 0, function* () {
            let libraries = yield library_controller_1.default.getAllLibraries();
            let library = libraries.find(library => library.id = idLibrary);
            if (library) {
                const bookExists = library.books.filter(book => book.ISBN === ISBNBook);
                if (bookExists.length !== 0) {
                    throw new Error('This book doesnt exist');
                }
                library.books = library.books.filter(book => book.ISBN !== ISBNBook);
                yield library_controller_1.default.updateLibrary(library);
            }
            else {
                throw new Error('Imposible to delete a book that is not stored in a library');
            }
        });
    }
}
exports.default = BookController;
