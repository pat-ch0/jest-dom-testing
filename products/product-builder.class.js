import { Builder } from "../_helpers/builder.class"
import { Product } from "./product.class"
import { ProductErrors } from "./exceptions/product-errors"
import { IdIsEmptyError } from "./exceptions/id-is-empty.error"
import { NameIsEmptyError } from "./exceptions/name-is-empty.error"
import { StockNegativeError } from "./exceptions/stock-negative.error"
import { StockNotValidError } from "./exceptions/stock-not-valid.error"

export class ProductBuilder extends Builder {
    /**
     * ID attribute for the new Product
     * @var string
     */
    id = ''

    /**
     * Name of the new Product
     * @var string
     */
    name = ''

    /**
     * Stock of the new Product
     * @var number
     */
    stock = 0

    /**
     * Build a concrete Product
     * Throws exceptions
     * @returns Product
     * @see Builder
     * @override
     */
    build() {
        if (this.id === '') {
            throw new IdIsEmptyError({
                message: 'Id cannot be empty',
                status: ProductErrors.ID_IS_EMPTY
            })
        }

        if (this.name === '') {
            throw new NameIsEmptyError({
                message: 'Name cannot be empty',
                status: ProductErrors.NAME_IS_EMPTY
            })
        }

        if (isNaN(this.stock)) {
            throw new StockNotValidError({
                message: 'Invalid value for stock, must be non negative value',
                status: ProductErrors.STOCK_NOT_VALID
            })
        }

        if (this.stock < 0) {
            throw new StockNegativeError({
                message: 'Stock cannot be negative',
                status: ProductErrors.STOCK_NEGATIVE
            })
        }

        const product = Product.getInstance()
        product.id = this.id
        product.name = this.name
        product.stock = this.stock

        return product
    }
}