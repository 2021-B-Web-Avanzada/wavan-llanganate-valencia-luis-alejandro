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
exports.askInformationToUpdateALibrary = exports.getLibraryByFormat = exports.getQuestionsForSelectLibrary = exports.setFormatLibrary = void 0;
const inquirer_1 = __importDefault(require("inquirer"));
const library_controller_1 = __importDefault(require("../controllers/library.controller"));
inquirer_1.default.registerPrompt("date", require("inquirer-date-prompt"));
const setFormatLibrary = (library) => {
    return `ID: ${library.id} - Lugar: ${library.location} - Responsable: ${library.responsable}`;
};
exports.setFormatLibrary = setFormatLibrary;
const getQuestionsForSelectLibrary = (libraries) => {
    const formatLibraries = libraries.map(library => (0, exports.setFormatLibrary)(library));
    return [
        {
            type: 'list',
            name: 'library',
            message: "Seleccione una biblioteca:",
            choices: formatLibraries,
        },
    ];
};
exports.getQuestionsForSelectLibrary = getQuestionsForSelectLibrary;
const getQuestionsUpdateLibrary = (library) => {
    return [
        {
            type: 'list',
            name: 'location',
            message: "¿Seleccione la ubicación de la biblioteca?",
            choices: [
                'SISTEMAS', 'GEOLOGÍA', 'QUÍMICA', 'FORMACIÓN BÁSICA', 'ADMINISTRACIÓN CENTRAL',
                'CEC', 'MECANICA', 'CIENCIAS'
            ],
            default() {
                return library.location;
            },
        },
        {
            type: 'input',
            name: 'responsable',
            message: "¿Ingrese el nombre del responsable?",
            default() {
                return library.responsable;
            },
        },
        {
            type: 'date',
            name: 'openingHour',
            message: "¿Cuál es la hora de atención?",
            format: { month: undefined, year: undefined, day: undefined, hour: "numeric", minute: "numeric" },
            clearable: true,
            default() {
                return new Date(library.openingHour);
            },
        }
    ];
};
const getLibraryByFormat = (libraries, librarySelected) => {
    return libraries.filter(library => (0, exports.setFormatLibrary)(library) === librarySelected)[0];
};
exports.getLibraryByFormat = getLibraryByFormat;
const askInformationToUpdateALibrary = () => __awaiter(void 0, void 0, void 0, function* () {
    const libraries = yield library_controller_1.default.getAllLibraries();
    const selection = yield inquirer_1.default.prompt((0, exports.getQuestionsForSelectLibrary)(libraries));
    const library = (0, exports.getLibraryByFormat)(libraries, selection.library);
    const userInput = yield inquirer_1.default.prompt(getQuestionsUpdateLibrary(library));
    const libraryModified = Object.assign({ id: library.id, books: library.books }, userInput);
    return library_controller_1.default.updateLibrary(libraryModified);
});
exports.askInformationToUpdateALibrary = askInformationToUpdateALibrary;
