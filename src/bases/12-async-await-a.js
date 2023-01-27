const miPromesa = () => {
    return new Promise( (resolve,reject) => {
        setTimeout(()=>{
            // resolve('Tenemos un valor en la promesa')
            reject ('REJECT en miPromesa')
        },1000)
    })
}


// Escribir async convierte la funcion en una promesa y nos ahorramos de escribir todo lo de arriba
const medirTiempoAsync = async() =>{

    try {
        console.log('Inicio');

        //el Await se usa con funciones asincronas o funciones que retornen promesas, el await espera a que la promesa se resuelva
        const respuesta = await miPromesa()
        console.log(respuesta);
    
        console.log('Fin');
    
    } catch (error) {
        return 'Catch en medirTiempoAsync'
    }


    //El throw es para lanzar el error (en vez de un reject)
    // throw 'Error en medirTiempoAsync'
}

//al llamar la funcion podemos llamar then y catch como en una promesa
medirTiempoAsync()
    .then(valor => console.log(valor))
    .catch(err => console.log('Error: ',err))
