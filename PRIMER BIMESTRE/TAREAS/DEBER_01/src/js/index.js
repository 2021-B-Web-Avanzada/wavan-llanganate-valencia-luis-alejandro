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
const generalCLI_1 = require("./cli/generalCLI");
function runApp() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const menuSelection = yield (0, generalCLI_1.askForModule)();
            switch (menuSelection.module) {
                case 'Salir del programa':
                    console.log('Hasta la próxima vaquero.');
                    break;
                case 'Bibliotecas':
                    console.log('biblioteca'.slice(-1));
                    const libraryOperationSelection = yield (0, generalCLI_1.askForOperation)('biblioteca');
                    break;
                case 'Libros':
                    const bookOperationSelection = yield (0, generalCLI_1.askForOperation)('libro');
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
runApp();
