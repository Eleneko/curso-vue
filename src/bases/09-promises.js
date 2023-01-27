// console.log('Inicio');

// // Promesa, lleva un resolve si se resuelve y un reject para el error
// new Promise ((resolve, reject) => {

//     console.log('Cuerpo de la promesa');
//     // Lo que se ejecuta en el resolve
//     resolve('Promesa resuelta')

// })
// .then (console.log)
// .catch(console.log)
// //Then llama el resolve, catch el error, no ponemos msj en el clg porque solo tiene uno

// console.log('Fin');

import { getHeroById } from '../bases/08-imp-exp'

const getHeroByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const hero = getHeroById(id)
            if ( hero){
                resolve( hero )                
            }else{
                reject('El Héroe no existe')
            }
        },1000)
    })
}

getHeroByIdAsync(7)
                .then( h => {console.log(`El héroe es: ${h.name}`)})
                .catch(console.log)
