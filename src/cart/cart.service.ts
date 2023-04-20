import { Injectable } from "@nestjs/common";
import { v4 as uuidv4 } from 'uuid';
import { InjectModel } from "@nestjs/mongoose";
import { CartRepository } from "./cart.repository";
import { Cart } from "./schema/cart.schema";
import { UpdateCartDto } from "./dto/update-cart.dto";

@Injectable()
export class CartService {
    constructor(private readonly cartRepository: CartRepository) { }

    async getCartItemById(cartId: string): Promise<Cart> {
        return this.cartRepository.findOne({ cartId })
    }

    async getCart(): Promise<Cart[]> {
        return this.cartRepository.find({});
    }

    async createCart(name: string, quantity: number,price: number): Promise<Cart> {
        return this.cartRepository.create({
            cartId: uuidv4(),
            name,
            quantity,
            price
        })
    }

    async updateCart(cartId: string, cartUpdates: UpdateCartDto): Promise<Cart> {
        return this.cartRepository.findOneAndUpdate({ cartId }, cartUpdates);
    }
}


