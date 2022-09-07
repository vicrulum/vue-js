//Funcion tradicional

// function saludar(xyz){
//     return `Hola ${xyz}`
// }

//Funcion mas segura

// const saludar = function(xyz){
//     return `Hola ${xyz}`
// }

//Arrow function

const saludar = (nombre = 'Peter') => `Hola ${nombre}`

const nombre = 'Tony'

console.log(saludar(nombre))

const getUser = () =>{
    return{
        uid: 'ABC123',
        username: 'Tony093'
    }
}
console.log(getUser())

const heroes = [{
    id: 1,
    name: 'Batman',
},{
    id: 2,
    name: 'Superman'
}]

const existe = heroes.some((heroe)=> heroe.id === 1)
const {name} = heroes.find((heroe)=> heroe.id === 1)

console.log(existe)
console.log(name)

