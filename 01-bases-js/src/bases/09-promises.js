import {getHeroById} from './bases/08-imp-exp'

// console.log('Inicio')

// new Promise( (resolve, reject) => {

//     console.log('Cuerpo de la promesa')
//     reject('Promesa resuelta con error')

// } )
// .then(msg => console.log(msg))
// .catch (err => console.log(err))

// console.log('Fin')


const getHeroByIdAsync = (id) =>{
    return new Promise((resolve,reject) => {
        setTimeout( () => {
            const hero = getHeroById(id)

            if( hero){
                resolve(hero)
            } else{
                reject('El heroe no existe')
            }
            
        },1000)
    });
}

getHeroByIdAsync(3)
    .then(h => console.log(`El heroe es: ${h.name}`))
    .catch(console.log)