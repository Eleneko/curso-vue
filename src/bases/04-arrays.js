
const arreglo = [1,2,3,4]
// Añadir elemento al arreglo con función de arreglo push
arreglo.push(5)

// el ""..."" es para expandir el arreglo anterior y que el primero no se vea afectado

const arreglo2 = [...arreglo]
arreglo2.push(6)

//funcion que llama elementoa y regresa el arreglo, regresa un nuevo arreglo
const arreglo3 = arreglo2.map( function(n){
    return n * 2
})

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);