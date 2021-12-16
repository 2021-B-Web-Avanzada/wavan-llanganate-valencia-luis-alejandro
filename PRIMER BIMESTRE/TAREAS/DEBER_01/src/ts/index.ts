import { askForModule, askForOperation, processOption } from './general/cli/general.cli';


async function runApp() {
    try {
        const menuSelection = await askForModule()
        switch (menuSelection.module) {
            case 'Salir del programa':
                console.log('Hasta la próxima vaquero.')
                break;
            case 'Bibliotecas':
                const libraryOperationSelection = await askForOperation('biblioteca');
                await processOption(libraryOperationSelection.crudOperation, runApp);
                await runApp();
                break;
            case 'Libros':
                const bookOperationSelection = await askForOperation('libro');
                await processOption(bookOperationSelection.crudOperation, runApp);
                await runApp();
                break;
            default:
                break;
        }
    } catch (error) {
        console.log(error)
    }
}

runApp()
