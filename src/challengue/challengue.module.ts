import { Module } from '@nestjs/common';
import { ChallengueService } from './challengue.service';
import { ChallengueController } from './challengue.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Merchat, MerchatSchema } from './models/merchant_for_payment';
import { MerchatFavorite, MerchatFavoriteSchema } from './models/favorite_payment';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Merchat.name,
        schema: MerchatSchema
      },
      {
        name: MerchatFavorite.name,
        schema: MerchatFavoriteSchema,
      }
    ])
  ],
  controllers: [ChallengueController],
  providers: [ChallengueService],
})
export class ChallengueModule { }
