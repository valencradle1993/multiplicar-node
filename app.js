const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');


let comando = argv._[0];
switch (comando) {
    case 'listar':
        // console.log('Listar');
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            // .then(archivo => console.log(`Archivo Creado ${archivo.red}`))
            .then(archivo => console.log(`Archivo Creado `, colors.green(archivo)))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
        break;
}
// console.log(argv);

//let base = 'a';

// console.log(process.argv);
// let argv2 = process.argv;
// console.log('Limite', argv.limite);
// console.log(argv2);
// let parametro = argv[2];
// let base = parametro.split('=')[1]

// console.log(base);