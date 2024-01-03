import { UnimplementedMethodError } from "./exceptions/unimplemented-method.error"
import { Product } from "./product.class"

export class ProductCollection {
    /**
     * Product collection
     * @var {Map | Set | Array}
     */
    #products = null

    get products() {
        return this.#products
    }

    set products(collection) {
        this.#products = collection
    }
    /**
     * Add a product to the collection
     * @param {Product} product 
     * @returns void
     */
    addProduct(product, ...args) {
        throw new UnimplementedMethodError('addProduct')
    }

    /**
     * Remove a product from the collection
     * @param {Product | string} element 
     */
    removeProduct(element) {
        throw new UnimplementedMethodError()
    }

    updateProduct(...args) {
        throw new UnimplementedMethodError('updateProduct')
    }

    /**
     * Returns number of elements in the collection
     * @returns number
     */
    getSize() {
        throw new UnimplementedMethodError('getSize')
    }

    getById(id) {
        throw new UnimplementedMethodError('getById')
    }

    checkStringParam(param) {
        if (!(typeof param == 'string')) {
            throw new TypeError('key param is not a string')
        }
    }

    checkProductParam(param) {
        if (!(param instanceof Product)) {
            throw new TypeError('param is not of Product type')
        }
    }
}