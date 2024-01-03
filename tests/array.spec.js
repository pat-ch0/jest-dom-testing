const { usingArrays, objectArray } = require('./../index.js')

describe(`Array manipulation`, () => {
    let array

    beforeEach(() => {
        array = usingArrays()
    })

    it(`Should have '8' items`, () => {
        expect(array.length).toBe(8)
    })
    
    it(`Should have 3 even values`, () => {
        // Using filter method
        let evenValuesNumber = array.filter((value) => value % 2 === 0).length

        // Using for... of syntax
        evenValuesNumber = 0
        

        for(const value of array) {
            evenValuesNumber = (value % 2 === 0) ? evenValuesNumber + 1 : evenValuesNumber
        }

        // Using forEach syntax
        evenValuesNumber = 0
        array.forEach((value) => {
            evenValuesNumber = (value % 2 === 0) ? evenValuesNumber + 1 : evenValuesNumber
        })

        // Using poor old for syntax
        evenValuesNumber = 0
        console.table(array)
        for (let i = 0; i < array.length; i++) {
            let value = array[i]
            evenValuesNumber = (value % 2 === 0) ? evenValuesNumber + 1 : evenValuesNumber
        }
        
        expect(evenValuesNumber).toBe(3)
    })

    it(`Should have a sum of '87'`, () => {
        // Use a reducer (voir array.reduce)
        const sum = array.reduce((acc, current) => acc + current, 0)
        expect(sum).toBe(87)
    })

    it(`Should have an odd sum of '43'`, () => {
        // Using filter and reduce
        const oddSum = array
            .filter((value) => value % 2 !== 0)
            .reduce((acc, current) => acc + current, 0)
        expect(oddSum).toBe(43)
    })

    it(`Should have a global stock of 21`, () => {
        // map + reduce
        const globalStock = objectArray
            .map((item) => item.stock)
            .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
        expect(globalStock).toBe(21)
    })

    it(`Should be sorted by id acending`, () => {
        // sort + localeCompare
        const compareFn = (p1, p2) => p1.id.localeCompare(p2.id)
        const sortedArray = objectArray.sort(compareFn)

        expect(sortedArray[2].id).toBe('4ae36')
    })

    it (`Should be sorted by name descending`, () => {
        // sort + localeCompare
        const compareFn = (p1, p2) => (p1.name.localeCompare(p2.name)) * -1
        const sortedArray = objectArray.sort(compareFn)

        expect(sortedArray[0].name).toBe('Raviolis')
    })

    it(`Should give an array of product with a stock gt 5`, () => {
        // Original array must be mutated
        const workArray = [ ... objectArray] // create a copy for the .length in the for()

        for (let i = 0; i < workArray.length; i++) {
            if (workArray[i].stock < 5) {
                objectArray.splice(i, 1)
            }
        }
        expect(objectArray.length).toBe(2)
    })
})