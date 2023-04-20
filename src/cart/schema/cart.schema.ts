import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose'; 
export type CartDocument = Cart & Document;

@Schema()
export class Cart{
  @Prop()
  cartId: string;
  @Prop()
   name: string;
   @Prop()
   quantity: number
   @Prop()
   price: number
   
}

export const CartSchema = SchemaFactory.createForClass(Cart);