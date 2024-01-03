const birthDate = new Date(1968, 3, 30)
const myBirthDate = birthDate

const primitiveAffectation = () => {
    let lastname = 'Aubert'
    return lastname
}

const objectCopy = (aDate) => {
    return { ... aDate} // ... = spread operator
}

const usingPrototypePattern = (aDate) => {
    if (aDate instanceof Date) {
        const anonymousDate = new Date()
        anonymousDate.setDate(aDate.getDate())
        anonymousDate.setMonth(aDate.getMonth())
        anonymousDate.setFullYear(aDate.getFullYear())

        return anonymousDate
    }

    throw new TypeError(`'aDate' is not a correct Date type`)
    
}

const usingArrays = () => {
    const myArray = [1, 2, 3, 5, 8, 13, 21, 34]
    myArray.push(55)
    myArray.pop()

    return myArray
}

const objectArray = [
    {
        "id": "1fe34",
        "name": "Bananes",
        "stock": 12
    },
    {
        "id": "4ae36",
        "name": "Café en grain",
        "stock": 6
    },
    {
        "id": "3cc52",
        "name": "Raviolis",
        "stock": 3
    }
]

module.exports = {
    primitiveAffecation: primitiveAffectation,
    objectCopy,
    usingPrototypePattern,
    usingArrays,
    objectArray,
    birthDate,
    myBirthDate
}