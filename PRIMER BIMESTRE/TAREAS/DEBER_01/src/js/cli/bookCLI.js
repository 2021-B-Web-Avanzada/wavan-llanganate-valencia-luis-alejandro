"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const questions = [
    {
        type: 'input',
        name: 'first_name',
        message: "What's your first name",
    },
    {
        type: 'input',
        name: 'last_name',
        message: "What's your last name",
        default() {
            return 'Doe';
        },
    },
    {
        type: 'input',
        name: 'fav_color',
        message: "What's your favorite color",
        transformer(color, answers, flags) {
        },
    },
    {
        type: 'input',
        name: 'phone',
        message: "What's your phone number",
        validate(value) {
            const pass = value.match(/^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i);
            if (pass) {
                return true;
            }
            return 'Please enter a valid phone number';
        },
    },
];
inquirer_1.default.prompt(questions).then((answers) => {
    console.log(JSON.stringify(answers, null, '  '));
});
