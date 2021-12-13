import * as inquirer from 'inquirer'

export const askForModule = (): Promise<any> => {
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
}

export const askForOperation = (moduleName: string): Promise<any> => {
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
}