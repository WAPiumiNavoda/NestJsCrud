import { Controller,Get,Post,Patch,Param,Body } from "@nestjs/common";
import { CartService } from "./cart.service";
import { Cart } from "./schema/cart.schema";
import { CreateCartDto } from './dto/create-art.dto';
import { UpdateCartDto } from './dto/update-cart.dto';



@Controller('/cart')
export class CartController {
    constructor(private readonly cartService: CartService) { }

    @Get(':cartId')
    async getcart(@Param('cartId') cartId: string): Promise<Cart> {
        return this.cartService.getCartItemById(cartId);
    }

    @Get()
    async getcarts(): Promise<Cart[]> {
        return this.cartService.getCart();
    }

    @Post()
    async createCart(@Body() createCartDto: CreateCartDto): Promise<Cart> {
        return this.cartService.createCart(createCartDto.name, createCartDto.quantity, createCartDto.price)
    }

    @Patch(':cartId')
    async updateCart(@Param('cartId') cartId: string, @Body() updateCartDto: UpdateCartDto): Promise<Cart> {
        return this.cartService.updateCart(cartId,updateCartDto);
    }
}