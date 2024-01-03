import { ProductSet } from "../products/product-set.class"
import { ProductBuilder } from './../products/product-builder.class'

describe('Product Set', () => {
    let productSet
    beforeEach(() => {
        productSet = new ProductSet()
    })

    it(`Should have a zero size at initialization`, () => {
        expect(productSet.getSize()).toBe(0)
    })

    it(`Should have a size of 1 after adding a Product`, () => {
        const productBuilder = new ProductBuilder()
        productBuilder.id = '1ef256'
        productBuilder.name = 'test'
        productBuilder.stock = 5

        productSet.addProduct(productBuilder.build())

        expect(productSet.getSize()).toBe(1)
    })

    it(`Should have a size of 1 after adding twice the same Product`, () => {
        const productBuilder = new ProductBuilder()
        productBuilder.id = '1ef256'
        productBuilder.name = 'test'
        productBuilder.stock = 5

        const product1 = productBuilder.build()
        const product2 = product1
        productSet.addProduct(product1)
        productSet.addProduct(product2)

        expect(productSet.getSize()).toBe(1)
    })

    it (`Shoud raised a TypeError if try to add other than a Product type`, () => {
        expect(() => productSet.addProduct('Dummy')).toThrow(TypeError)
    })
    
    it(`Should remove the product freshly added`, () => {
        const productBuilder = new ProductBuilder()
        productBuilder.id = '1ef256'
        productBuilder.name = 'test'
        productBuilder.stock = 5

        const product = productBuilder.build()
        productSet.addProduct(product)
        productSet.removeProduct(product)
        expect(productSet.getSize()).toBe(0)
    })

    it(`Should update a Product according to its id`, () => {
        const productBuilder = new ProductBuilder()
        productBuilder.id = '1ef256'
        productBuilder.name = 'test'
        productBuilder.stock = 5

        const product = productBuilder.build()
        productSet.addProduct(product)

        
        productBuilder.id = product.id
        productBuilder.name = 'Updated Test'
        productBuilder.stock = product.stock

        const copy = productBuilder.build()
        
        productSet.updateProduct(copy)

        expect([... productSet.products.values()][0].name).toBe('Updated Test')
    })
})