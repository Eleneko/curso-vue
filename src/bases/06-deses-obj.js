const person = {
    name: 'Tony',
    age: 40,
    codeName: 'Plutonian',
}

//Desestructurar objeto

const { name, age, codeName, power = 'No tiene poder' } = person


// console.log( name );
// console.log( age );
// console.log(codeName);
// console.log(power);

// const createHero = ( person ) =>{
    
//     return {
//         id: person.1231313,
//         name: person.name,
//         age: person.age,
//         codeName: person.codeName,
//         power: person.power,
//     }
// }

//Desestructurar objeto con variable para no escribir "person.algo" repetidas veces y si la llave tiene el mismo nombre que el atributo se puede quitar,
//puedo poner la variable en los argumentos y por ultimo quitar return y agregar parentesis

const createHero = ({ name, age, codeName, power}) =>
    ({  id: 231131313,
        name,
        age,
        codeName,
        power,
    })


console.log(createHero(person));

