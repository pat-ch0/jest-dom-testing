const { Builder } = require("../_helpers/builder.class")
const { IdIsEmptyError } = require("../products/exceptions/id-is-empty.error")
const { NameIsEmptyError } = require("../products/exceptions/name-is-empty.error")
const { ProductErrors } = require("../products/exceptions/product-errors")
const { StockNegativeError } = require("../products/exceptions/stock-negative.error")
const { StockNotValidError } = require("../products/exceptions/stock-not-valid.error")
const { ProductBuilder } = require("../products/product-builder.class")
const { Product } = require("../products/product.class")

describe(`ProductBuilder`, () => {
    it(`Should be instanciated and to be an instance of Builder too`, () => {
        const productBuilder = new ProductBuilder()
        expect(productBuilder).toBeInstanceOf(ProductBuilder)
        expect(productBuilder).toBeInstanceOf(Builder)
    })

    it(`Should raised an IsIsEmptyException if no ID`, () => {
        const productBuilder = new ProductBuilder()
        productBuilder.name = 'Test'
        productBuilder.stock = 10
        
        expect(() => productBuilder.build()).toThrow(TypeError)
        expect(() => productBuilder.build()).toThrow(IdIsEmptyError)
        
        try {
            productBuilder.build()
        } catch (error) {
            expect(error.status).toEqual(ProductErrors.ID_IS_EMPTY)
        }
    })

    it(`Should raised an exception if no Name`, () => {
        const productBuilder = new ProductBuilder()
        productBuilder.id = 'Test'
        productBuilder.stock = 10
        
        expect(() => productBuilder.build()).toThrow(TypeError)
        expect(() => productBuilder.build()).toThrow(NameIsEmptyError)

        try {
            productBuilder.build()
        } catch (error) {
            expect(error.status).toEqual(ProductErrors.NAME_IS_EMPTY)
        }
    })

    it(`Should raised an exception if stock is not valid`, () => {
        const productBuilder = new ProductBuilder()
        productBuilder.id = 'Test'
        productBuilder.name = 'Test'
        productBuilder.stock = 'Test'
        
        expect(() => productBuilder.build()).toThrow(TypeError)
        expect(() => productBuilder.build()).toThrow(StockNotValidError)

        try {
            productBuilder.build()
        } catch (error) {
            expect(error.status).toEqual(ProductErrors.STOCK_NOT_VALID)
        }
    })

    it(`Should raised an exception if stock is negative`, () => {
        const productBuilder = new ProductBuilder()
        productBuilder.id = 'Test'
        productBuilder.name = 'Test'
        productBuilder.stock = -2
        
        expect(() => productBuilder.build()).toThrow(RangeError)
        expect(() => productBuilder.build()).toThrow(StockNegativeError)

        try {
            productBuilder.build()
        } catch (error) {
            expect(error.status).toEqual(ProductErrors.STOCK_NEGATIVE)
        }
    })

    it(`Should give back a Product instance with correct values`, () => {
        const productBuilder = new ProductBuilder()
        productBuilder.id = 'Test'
        productBuilder.name = 'Test'
        productBuilder.stock = 10
        
        const product = productBuilder.build()

        expect(product).toBeInstanceOf(Product)
        expect(product.id).toEqual('Test')
        expect(product.name).toEqual('Test')
        expect(product.stock).toEqual(10)
    })
})