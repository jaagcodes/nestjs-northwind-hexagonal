import { Body, Controller, Inject, Post, UseFilters } from "@nestjs/common";
import { ProductApplication } from "../../../core/application/ProductApplication";
import { PRODUCT_APPLICATION } from "../../../core/core.module";
import { ProductCreatorFilter } from "../exception-filters/product-exception.filter";
import { AppResponse } from "../model/app.response";
import { Log } from "src/infraestructure/shared/Log";
import { CreateProductRequest } from "../model/create-product.requst";


@Controller('/product')
@UseFilters(ProductCreatorFilter)
export class ProductController {

    constructor(@Inject(PRODUCT_APPLICATION) private application: ProductApplication) {}

    @Post()
    async createProduct(@Body() request: CreateProductRequest): Promise<AppResponse> {
        
        Log.info(`(POST) Create product`, request)
        const productId = await this.application.createProduct(request) 
        
        return {
            status: 201,
            message: `Product(id=${productId}) created OK`
        }

    }
}