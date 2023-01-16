const persona = {
    nombre: 'Tony',
    apellido: 'Hartigan',
    edad: 40,
    direccion: {
        ciudad: 'Plutonia',
        zip: 1313,
        lat: 343434,
        lng: 892183
    }
}

const persona2 = { ...persona };

persona2.nombre = 'Dan'

console.log(persona);
console.log(persona2);