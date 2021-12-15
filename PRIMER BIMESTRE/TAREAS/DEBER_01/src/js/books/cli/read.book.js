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
exports.askToGetABookByISBN = exports.showBooks = void 0;
const inquirer_1 = __importDefault(require("inquirer"));
const update_library_1 = require("../../libraries/cli/update.library");
const library_controller_1 = __importDefault(require("../../libraries/controllers/library.controller"));
const book_controller_1 = __importDefault(require("../controllers/book.controller"));
const update_book_1 = require("./update.book");
const showBooks = () => __awaiter(void 0, void 0, void 0, function* () {
    const libraries = yield library_controller_1.default.getAllLibraries();
    const selection = yield inquirer_1.default.prompt((0, update_library_1.getQuestionsForSelectLibrary)(libraries));
    const library = (0, update_library_1.getLibraryByFormat)(libraries, selection.library);
    const books = yield book_controller_1.default.getAllBooks(library.id);
    books.forEach(book => {
        console.log((0, update_book_1.setFormatBook)(book));
    });
});
exports.showBooks = showBooks;
const askToGetABookByISBN = () => __awaiter(void 0, void 0, void 0, function* () {
    const libraries = yield library_controller_1.default.getAllLibraries();
    const selection = yield inquirer_1.default.prompt((0, update_library_1.getQuestionsForSelectLibrary)(libraries));
    const library = (0, update_library_1.getLibraryByFormat)(libraries, selection.library);
    const books = yield book_controller_1.default.getAllBooks(library.id);
    return yield inquirer_1.default.prompt((0, update_book_1.getQuestionsForSelectABook)(books));
});
exports.askToGetABookByISBN = askToGetABookByISBN;
