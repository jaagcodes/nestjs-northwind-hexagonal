export class ProductServiceError extends Error {
  
    constructor(message: string) {
      super(message);
      Object.setPrototypeOf(this, ProductServiceError.prototype);
    }
  
  }