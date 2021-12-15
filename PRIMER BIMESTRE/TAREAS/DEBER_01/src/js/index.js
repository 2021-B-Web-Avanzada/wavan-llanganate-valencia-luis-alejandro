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
const create_book_1 = require("./books/cli/create.book");
const general_cli_1 = require("./general/cli/general.cli");
const create_library_1 = require("./libraries/cli/create.library");
function runApp() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const menuSelection = yield (0, general_cli_1.askForModule)();
            switch (menuSelection.module) {
                case 'Salir del programa':
                    console.log('Hasta la próxima vaquero.');
                    break;
                case 'Bibliotecas':
                    const libraryOperationSelection = yield (0, general_cli_1.askForOperation)('biblioteca');
                    yield (0, create_library_1.askInformationToCreateALibrary)();
                    console.log(libraryOperationSelection);
                    break;
                case 'Libros':
                    const bookOperationSelection = yield (0, general_cli_1.askForOperation)('libro');
                    process(bookOperationSelection.crudOperation);
                    break;
                default:
                    break;
            }
        }
        catch (error) {
            console.log(error);
        }
    });
}
const process = (operation) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(operation);
    if (operation === 'Crear un libro') {
        const newBook = yield (0, create_book_1.askInformationToCreateABook)();
        console.log(newBook);
    }
});
runApp();
