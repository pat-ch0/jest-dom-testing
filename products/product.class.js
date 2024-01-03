import { IdIsEmptyError } from "./exceptions/id-is-empty.error";
import { NameIsEmptyError } from "./exceptions/name-is-empty.error";
import { ProductErrors } from "./exceptions/product-errors";
import { StockNegativeError } from "./exceptions/stock-negative.error";
import { StockNotValidError } from "./exceptions/stock-not-valid.error";

export class Product {
    /**
     * ID of the product
     * @var string
     */
    #id = ''

    /**
     * Name of the product
     * @var string
     */
    #name = ''

    /**
     * Stock of the product
     * @var number
     */
    #stock = 0

    constructor(doIt = null) {
        if (!doIt)
            throw new Error(`Cannot instanciate directly a new Product`)
    }
    
    get id() {
        return this.#id;
    }
    set id(id) {
        if (id.trim() === '') throw new IdIsEmptyError({
            message: 'Id cannot be empty',
            status: ProductErrors.ID_IS_EMPTY
        })

        this.#id = id;
    }

    get name() {
        return this.#name
    }

    set name(name) {
        if (name.trim() === '') throw new NameIsEmptyError({
            message: 'Name cannot be empty',
            status: ProductErrors.NAME_IS_EMPTY
        })
        this.#name = name
    }

    get stock() {
        return this.#stock
    }

    set stock(stock) {
        if (isNaN(stock)) throw new StockNotValidError({
            message: 'Invalid value for stock, must be non negative value',
            status: ProductErrors.STOCK_NOT_VALID
        })

        if (stock < 0) throw new StockNegativeError({
            message: 'Stock cannot be negative',
            status: ProductErrors.STOCK_NEGATIVE
        })
        
        this.#stock = stock
    }


    static getInstance() {
        return new Product(true)
    }


}