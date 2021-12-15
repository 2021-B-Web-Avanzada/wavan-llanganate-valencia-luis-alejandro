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
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const settings_1 = require("../../environment/settings");
const JSONFilePath = settings_1.DATA_FILE_PATH;
const { readFile, writeFile, appendFile } = fs_1.promises;
class LibraryController {
    static createBook(newLibrary) {
        return __awaiter(this, void 0, void 0, function* () {
            const content = yield readFile(JSONFilePath, 'utf-8');
            if (content !== '') {
                const libraries = yield this.getAllLibraries();
                const libraryExists = libraries.filter(library => library.id === newLibrary.id);
                if (libraryExists.length !== 0) {
                    throw new Error('This library already exists');
                }
                libraries.push(newLibrary);
                writeFile(JSONFilePath, JSON.stringify(libraries, null, 4));
            }
            else {
                writeFile(JSONFilePath, JSON.stringify([newLibrary], null, 4));
            }
        });
    }
    static getAllLibraries() {
        return __awaiter(this, void 0, void 0, function* () {
            const books = yield readFile(JSONFilePath, { encoding: 'utf-8' });
            try {
                return JSON.parse(books);
            }
            catch (error) {
                throw new Error("An error has ocurred");
            }
        });
    }
    static getLibraryById(idLibrary) {
        return __awaiter(this, void 0, void 0, function* () {
            const libraries = yield this.getAllLibraries();
            const library = libraries.find(library => library.id === idLibrary);
            if (library) {
                return library;
            }
            else {
                throw new Error("This library doesn't exist");
            }
        });
    }
    static updateLibrary(libraryModified) {
        return __awaiter(this, void 0, void 0, function* () {
            const libraries = yield this.getAllLibraries();
            const libraryExists = libraries.filter(library => library.id === libraryModified.id);
            if (libraryExists.length === 0) {
                throw new Error('Imposible to update a book that is not stored');
            }
            const librariesAfterUpdate = libraries.map(library => {
                if (library.id == libraryModified.id) {
                    library = libraryModified;
                }
                return library;
            });
            yield writeFile(JSONFilePath, JSON.stringify(librariesAfterUpdate, null, 4));
        });
    }
    static deleteLibraryById(idLibrary) {
        return __awaiter(this, void 0, void 0, function* () {
            const libraries = yield this.getAllLibraries();
            const libraryExists = libraries.filter(library => library.id === idLibrary);
            if (libraryExists.length === 0) {
                throw new Error('Imposible to delete a book that is not stored');
            }
            const librariesAfterDelete = libraries.filter(library => library.id !== idLibrary);
            yield writeFile(JSONFilePath, JSON.stringify(librariesAfterDelete, null, 4));
        });
    }
}
exports.default = LibraryController;
