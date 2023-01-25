// import { owners } from './data/heroes'

// const [ dc, marvel ] = owners
// console.log(dc);
// console.log(marvel);

// import heroes from '../data';
import superHeroes from '../data/heroes'

// Tarea1 = crear funcion getHeroById ( id )
// funciones de flecha
// usar find

export const getHeroById = (id) => superHeroes.find(hero => hero.id === id )

// Tarea2 = getHeroByOwner('DC','Marvel')
// []

export const getHeroByOwner = (owner) => superHeroes.filter( hero => hero.owner === owner )


// Usar funciones en otro archivo, primero se exportan de aqui y luego se importan en el otro

// import { getHeroById } from "./bases/08-imp-exp";
// import { getHeroByOwner } from "./bases/08-imp-exp";

// console.log(getHeroById(3));
// console.log(getHeroByOwner('DC'));
// console.log(getHeroByOwner('Marvel'));
