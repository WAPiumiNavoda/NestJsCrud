import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Cart, CartSchema } from "./schema/cart.schema";
import { CartController } from "./cart.controller";
import { CartService } from "./cart.service";
import { CartRepository } from "./cart.repository";

@Module({
    // imports: [MongooseModule.forFeature([{name: Cart.name, schema: CartSchema}])],
    // controllers: [CartController],
    // providers:[CartService,CartRepository]
})

export class CartModel {}