import { ProductBuilder } from "../product-builder.class"
import { ProductMap } from "../product-map.class";

export class CollectionStrategy {
    /**
     * @var {ProductArray | ProductSet | ProductMap}
     */
    #concreteCollection = null

    get concreteCollection() {
        return this.#concreteCollection
    }

    set concreteCollection(collection) {
        this.#concreteCollection = collection
    }

    /**
     * Map a JSON to a Collection
     * @param {json} items 
     * @returns ProductArray | ProductSet | ProductMap
     */
    map(items) {
        const productBuilder = new ProductBuilder()
        
        for (const item of items) {
            productBuilder.id = item.id
            productBuilder.name = item.name
            productBuilder.stock = item.stock
            const product = productBuilder.build()
            this.#concreteCollection.addProduct(
                product,
                this.#concreteCollection instanceof ProductMap ? product.id : null
            )
        }
        return this.#concreteCollection
    }
}