const nombre = 'Nico'
const apellido = 'Ni'

// const nombreCompleto =  `${ nombre } ${ apellido }`

// console.log(`Resultado: ${1+3}`);

function getSaludo( nombresito ){
    return 'Hola ' + nombresito
}

console.log(`Este es un texto: ${getSaludo(apellido)}`);