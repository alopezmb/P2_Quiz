const readline = require('readline');

//Podria hacer lo mismo con model, crearme una por cada metodo del quiz para no
//tener que hacer por ej model.add  todas las veces
const{log,biglog,errorlog,colorize}=require('./outformat');

const cmds = require('./commands');

/**
 * Ayuda comandos quiz
 */


// Mensaje Inicial
biglog('CORE Quiz','green');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: colorize("quiz > ","blue"),
    completer:(line) => {
        const completions = 'h help q quit add list show test p play delete edit credits'.split(' ');
        const hits = completions.filter((c) => c.startsWith(line));
        // show all completions if none found
        return [hits.length ? hits : completions, line];
    }
});

rl.prompt();

rl.on('line', (line) => {

    let args= line.split(" ");
    let cmd= args[0].toLowerCase().trim();
    let id=args[1];

    switch (cmd) {

        case '':
            rl.prompt();
            break;
        case 'h':
        case 'help':
            cmds.help_quiz(rl);
            break;

        case 'q':
        case 'quit':
            cmds.quit_quiz(rl);
            break;

        case 'add':
            cmds.add_quiz(rl);
            break;

        case 'list':
            cmds.list_quiz(rl);
            break;

        case 'show':
            cmds.show_quiz(rl,id);
            break;

        case 'test':
            cmds.test_quiz(rl,id);
            break;

        case 'p':
        case 'play':
            cmds.play_quiz(rl);
            break;

        case 'delete':
            cmds.delete_quiz(rl,id);
            break;

        case 'edit':
            cmds.edit_quiz(rl,id);
            break;

        case 'credits':
            cmds.credits_quiz(rl);
            break;

         /*Lo utilizo para aprender cosas de JS que NPI*/
        case 'prueba':
            console.log(array[1]);
            rl.prompt();
            break;

        default:
            console.log(`Comando desconocido:'${colorize(cmd,"red")}'`);
            console.log(`Use ${colorize("help","green")} para ver todos los comandos disponibles.`);
            rl.prompt();
            break;
    }

}).on('close', () => {
    console.log('Hasta pronto!');
    process.exit(0);
});















