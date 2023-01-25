//Crear arreglo
const characters = ['Goku','Vegeta','Trunks']

//Para destructurar un arreglo se usan corchetes, para un objeto se usan llaves
const [g,v,t,goten = 'No tiene valor'] = characters

console.log(goten);

const returnArray = () => {
    return ['ABC',123]
}

const [ letters, numbers ] = returnArray()
console.log(letters,numbers);