



const person = {
    name: 'Tony',
    age: 45,
    codeName: 'Ironman'
}

const {name, age, codeName, power = 'No tiene poder'} = person;

// console.log(name)
// console.log(power)
// console.log(age)
// console.log(codeName)

const createHero = ({name,age,codeName,power}) => ({
        id: 11239,
        //Cuando una llave se llama igual que el valor podemos omitir la llave
        name,
        age,
        codeName,
        power
    })

console.log(createHero(person))