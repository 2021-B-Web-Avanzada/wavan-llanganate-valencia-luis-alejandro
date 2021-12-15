import inquirer from 'inquirer';
import LibraryController from '../controllers/library.controller';
import Library from '../entities/library.entity';

inquirer.registerPrompt("date", require("inquirer-date-prompt"));


const questionsForCreateLibrary = [
    {
        type: 'input',
        name: 'id',
        message: "¿Cuál es el identificador de la biblioteca?",
        validate(value: string) {
            const pass = value.match(
                /^[0-9]{1,5}$/i
            );
            return (pass) ? true : 'Por favor ingrese un identificador entero válido.';
        }
    },
    {
        type: 'list',
        name: 'location',
        message: "¿Seleccione la ubicación de la biblioteca?",
        choices: [
            'SISTEMAS', 'GEOLOGÍA', 'QUÍMICA', 'FORMACIÓN BÁSICA', 'ADMINISTRACIÓN CENTRAL',
            'CEC', 'MECANICA', 'CIENCIAS'
        ]
    },
    {
        type: 'input',
        name: 'responsable',
        message: "¿Ingrese el nombre del responsable?",
    },
    {
        type: 'date',
        name: 'openingHour',
        message: "¿Cuál es la hora de atención?",
        format: { month: undefined, year:  undefined, day: undefined, hour: "numeric", minute: "numeric" },
        clearable: true,
    }
];

export const askInformationToCreateALibrary = async () => {

    const userInput = await inquirer.prompt(questionsForCreateLibrary)
    
    const newLibrary : Library = {
        id: parseInt(userInput.id),
        ...userInput,
        books: [],
    };

    return LibraryController.createBook(newLibrary);
}