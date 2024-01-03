import { CollectionStrategy } from "./collection.strategy"
import { ProductArray } from "../product-array"

export class ToArrayStrategy extends CollectionStrategy {
    map(items) {
        this.concreteCollection = new ProductArray()
        return super.map(items)
    }
}