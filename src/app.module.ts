import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { CartSchema } from './cart/schema/cart.schema';
import { CartController } from './cart/cart.controller';
import { CartService } from './cart/cart.service';
import { CartRepository } from './cart/cart.repository';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://0.0.0.0:27017', { dbname: 'nestdb' }),
    MongooseModule.forFeature([{name:'Cart',schema: CartSchema}])
  ],
  controllers: [CartController],
  providers: [CartService,CartRepository],
})
export class AppModule { }
