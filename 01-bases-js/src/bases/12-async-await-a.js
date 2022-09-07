
const miPromesa = () => {
    return new Promise( (resolve, reject) =>{
        setTimeout(() => {
            // resolve('Tenemos un valor en la promesa')
            reject('Reject en mi promesa')
        },1000)
    })
}

const medirTiempoAsync = async () => {

    try {
        console.log('inicio')

        const respuesta = await miPromesa()
        console.log(respuesta)
    
    
        console.log('fin')
    
        return 'Fin de medir tiempo async'
        
    } catch (error) {
        return 'Catch en medir tiempo Async'
    }

    // throw 'Error con medirTiempoAsync'

}



medirTiempoAsync()
    .then(valor => console.log(valor))
    .catch( err => console.log('error:', err))