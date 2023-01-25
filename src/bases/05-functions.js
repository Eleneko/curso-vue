const nombre = 'Tony'

//Función

function saludar( nombreSaludo ){
    return `Hola ${nombreSaludo} uwu`
}

// Agrego parentesis para ejecutar la funcion, si no se agregan solo se está haciendo referencia a la funcion

console.log( saludar(nombre) );

// funciones asignadas a variables

const saludarFuncion = function( nombreSaludo ){
    return `Hola ${nombreSaludo} owo`
}

console.log( saludarFuncion(nombre) );

// Convertir a función flecha, si lleva un return se puede borrar al igual que sus llaves, si solo lleva
// un argumento los parentesis son opcionales

const saludarFuncionFlecha = ( nombreSaludo ) => `Hola ${nombreSaludo} flecha uwu`

console.log( saludarFuncionFlecha(nombre) );

//ejemplo con función flecha, los parentesis indican que contiene un objeto

const getUser = () => ({ 
    uid: 'ABC123', 
    username: 'Tony01' 
})

console.log( getUser());

const Heroes = [{
    id:1,
    name: 'Batman'
},{    id:2,
    name: 'Superman'
}]

//Funcion (Some) que devuelve True si la función se cumple
const existeHeroe = Heroes.some( ( heroe ) => heroe.id ===1 );

// Busca elemento especificado, si no existe devuelve undefined, si existe devuelve sus datos
const buscaHeroe = Heroes.find( ( heroe ) => heroe.id ===1 );

console.log(existeHeroe);
console.log(buscaHeroe);

// Especifica que quiero un atributo (name) del elemento buscado
console.log(buscaHeroe.name);
