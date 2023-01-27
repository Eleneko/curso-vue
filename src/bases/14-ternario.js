let firstName;
let lastName = 'Awa'

//  || = ENTONCES (OR), es lo que se imprime si no hay un valor definido en la variable
console.log(`${firstName || 'No firstName' } ${ lastName || 'No LastName'}`)

const isActive = true

// if (isActive){
//     message = 'Activo'
// }else{
//     message = 'Inactivo'
// }

//Resumir el código de arriba , '?' es SI se cumple, ':' si NO se cumple
const message = ( isActive) 
        ? 'Activo'
        :'Inactivo'


console.log(message);

