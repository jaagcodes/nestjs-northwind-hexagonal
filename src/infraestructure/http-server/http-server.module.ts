import { Module } from "@nestjs/common";
import { RootController } from "./controllers/root.controller";
import { ProductController } from "./controllers/product.controller";

@Module({
    controllers: [
        RootController,
        ProductController
    ],
})
export class HttpServerModule {

}