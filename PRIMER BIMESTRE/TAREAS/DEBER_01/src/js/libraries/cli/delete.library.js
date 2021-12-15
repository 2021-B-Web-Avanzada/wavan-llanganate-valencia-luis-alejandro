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
const inquirer_1 = __importDefault(require("inquirer"));
const library_controller_1 = __importDefault(require("../controllers/library.controller"));
const update_library_1 = require("./update.library");
const askLibraryToDelete = () => __awaiter(void 0, void 0, void 0, function* () {
    const libraries = yield library_controller_1.default.getAllLibraries();
    const selection = yield inquirer_1.default.prompt((0, update_library_1.getQuestionsForSelectLibrary)(libraries));
    const library = (0, update_library_1.getLibraryByFormat)(libraries, selection.library);
    library_controller_1.default.deleteLibraryById(library.id);
});
