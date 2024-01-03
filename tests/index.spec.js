const {
    primitiveAffecation,
    objectCopy,
    usingPrototypePattern,
    birthDate,
    myBirthDate
 } = require('./../index.js')

describe(`index.js`, () => {
    it(`Should return 'Aubert'`, () => {
        expect(primitiveAffecation()).toBe('Aubert')
    })

    // Testing references
    it (`Should have the same reference`, () => {
        expect(birthDate).toStrictEqual(myBirthDate)
    })

    it (`Should have different reference`, () => {
        const theDate = new Date(1968, 3, 30)
        const otherDate = objectCopy(theDate)

        expect(theDate === otherDate).toBeFalsy()

        const protoDate = usingPrototypePattern(theDate)

        expect(theDate === protoDate).toBeFalsy()
    })

    it (`Should raised an exception if a Date is not passed`, () => {
        expect(() => usingPrototypePattern('Dummy things')).toThrow(TypeError)
    })

})