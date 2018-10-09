//requires
const fs = require('fs');
const colors = require('colors');
//const fs = require('express');
//const fs = require('../fs');

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        console.log('==================================='.green);
        console.log(`==========Tabla del ${base}=====+++===`.green);
        console.log('==================================='.green);
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }
        if (!Number(limite)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }

        let data = ''
        for (let i = 1; i <= limite; i++) {
            // data += (`${base} * ${i} = ${base * i}\n`);
            console.log(`${base} * ${i} = ${base * i}\n`);
        }

        console.log(data);
        fs.writeFile(`tablas/tabla_${base}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`tabla_${base}.txt`)

        });
    });

}



// let crearArchivo = (base) => {
//     return new Promise((resolve, reject) => {

//         if (!Number(base)) {
//             reject(`El valor introducido "${base}" no es un numero`);
//             return;
//         }


//         let data = ''
//         for (let i = 1; i <= 10; i++) {
//             data += (`${base} * ${i} = ${base * i}\n`);

//         }

//         fs.writeFile(`tablas/tabla_${base}.txt`, data, (err) => {
//             if (err) reject(err);
//             else
//                 resolve(`tabla_${base}.txt`)

//         });

//     });
// }



let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido "${base}" no es un numero`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor introducido "${base}" no es un numero`);
            return;
        }

        let data = ''
        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${base * i}\n`);

        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`tabla-${base}-al-${limite}.txt`)

        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}