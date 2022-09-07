import heroes from "../data/heroes";

//Uso de metodo find
export const getHeroById = ( id ) =>  heroes.find(heroe => heroe.id === id)



//Uso del metodo filter
export const getHeroByOwner = (owner) => heroes.filter( heroe => heroe.owner === owner)


//Asi funcionan las importaciones en codigo de abajo debe de ir en otro archivo


// import {getHeroById, getHeroByOwner} from './bases/08-imp-exp'



// console.log(getHeroById(2))


// console.log(getHeroByOwner('DC'))