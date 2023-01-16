//Función

function saludar( nombrex ){
    return `Hola ${nombrex} uwu`
}

const nombre = 'Tony'

// Agrego parentesis para ejecutar la funcion, si no se agregan solo se está haciendo referencia a la funcion

console.log( saludar(nombre) );

// funciones asignadas a variables

const saludarFuncion = function( nombrey ){
    return `Hola ${nombrey} owo`
}

console.log( saludarFuncion(nombre) );