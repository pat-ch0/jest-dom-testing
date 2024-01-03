import { ProductCollection } from "./product-collection"

export class ProductMap extends ProductCollection {
    /**
     * Product Collection
     * @var Map<key: string, value: Product>
     */
    constructor() {
        super()
        this.products = new Map() 
    }

    addProduct(product, key) {
        this.checkStringParam(key)
        this.checkProductParam(product)

        this.products.set(key, product)
    }

    removeProduct(key) {
        this.checkStringParam(key)

        this.products.delete(key)
    }

    updateProduct(key, product) {
        this.addProduct(key, product)
    }

    getSize() {
        return this.products.size
    }

    getById(id) {
        return this.products.get(id)
    }
}