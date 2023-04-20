import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Cart, CartDocument } from "./schema/cart.schema";
import { Model, FilterQuery } from 'mongoose';
import { threadId } from "worker_threads";

@Injectable()
export class CartRepository {
 constructor(@InjectModel(Cart.name) private cartModel: Model<CartDocument>){}

 async findOne(cartFilterQuery: FilterQuery<Cart>): Promise<Cart>{
    return  this.cartModel.findOne(cartFilterQuery);
 }

async find(cartFilterQuery: FilterQuery<Cart>): Promise<Cart[]> {
    return this.cartModel.find(cartFilterQuery);
}

async create(cart:Cart): Promise<Cart>{
    const newCart = new this.cartModel(cart);
    return newCart.save()
}

    async findOneAndUpdate(cartFilterQuery: FilterQuery<Cart>, cart: Partial<Cart>): Promise<Cart>{
        return this.cartModel.findOneAndUpdate(cartFilterQuery, cart);
    }

}