
let firstName;
let lastName = 'Ruiz';

console.log(`${firstName || 'No firstName'} ${lastName || 'No lastName'}`)

const isActive = false;

const message = (isActive) ? 'Activo' : 'Inactivo'

console.log(message)