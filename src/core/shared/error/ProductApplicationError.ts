export class ProductApplicationError extends Error {

    constructor(message: string) {
        super(message);
        Object.setPrototypeOf(this, ProductApplicationError.prototype);
    }

}