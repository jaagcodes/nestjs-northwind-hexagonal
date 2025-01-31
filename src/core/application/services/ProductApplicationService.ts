import { ProductService } from "src/core/domain/ports/inbound/ProductService";
import { ProductApplication } from "../ProductApplication";
import { CategoryService } from "src/core/domain/ports/inbound/CategoryService";
import { SupplierService } from "src/core/domain/ports/inbound/SupplierService";
import { NewProductDTO } from "src/core/shared/dto/NewProductDTO";
import { ProductApplicationError } from "src/core/shared/error/ProductApplicationError";
import { Product } from "src/core/domain/entities/Product";

export class ProductApplicationService implements ProductApplication {

    constructor(
        private product: ProductService,
        private category: CategoryService,
        private supplier: SupplierService,
    ) { }

    async createProduct(newProduct: NewProductDTO) {
        const category = await this.category.findById(newProduct.categoryId)
        if (!category) {
            throw new ProductApplicationError(`Categoría no encontrada id=${newProduct.categoryId}`)
        }
        const supplier = await this.supplier.findById(newProduct.supplierId)
        if (!supplier) {
            throw new ProductApplicationError(`Proveedor no encontrado id=${newProduct.supplierId}`)
        }
        const entity = Product.create(newProduct.name, category, supplier)
        const saved = await this.product.save(entity)
        return saved.productId
    }
}