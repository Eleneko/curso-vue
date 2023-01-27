const persona = {
    nombre: 'Nicochan',
    apellido: 'Gatencio',
    edad: 21,
    planeta: 'Tierra',
    raza: 'felido',
    vivo: 'Si',
    direccion: {
        ciudad: 'Gatolandia',
        zip: 1313,
        lat: 343434,
        lng: 892183
    }
}

const persona2 = { ...persona };

persona2.nombre = 'Prieto kun'
persona2.edad = 32
persona2.raza = 'Humano'
persona2.direccion = {
    ciudad: 'Tijuana',
}

console.log(persona);
console.log(persona2);