



const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 214123,
        lat: 12.1234,
        lng: 60.1209
    }
}
//Operador Spread
const persona2 = {...persona};
persona2.nombre = 'Peter'

console.log(persona)
console.log(persona2)

