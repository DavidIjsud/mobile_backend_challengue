import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Merchat } from './models/merchant_for_payment';
import { Model, Types } from 'mongoose';
import { MerchatFavorite } from './models/favorite_payment';
import { CreateFavoriteMerchatDto } from './dto/favorite_merchat.dto';
import { SearchMerchantDTO } from './dto/search_merchant.dto';

@Injectable()
export class ChallengueService {

  constructor(@InjectModel(Merchat.name) private mertchatModel: Model<Merchat>,
    @InjectModel(MerchatFavorite.name) private favoriteMerchatModel: Model<MerchatFavorite>) { }


  async saveNewFavoriteMerchat(merchatFavoriteDTO: CreateFavoriteMerchatDto): Promise<MerchatFavorite> | null {

    const { merchantId } = merchatFavoriteDTO;
    const merchantObjectId = new Types.ObjectId(merchantId);
    const merchant = await this.mertchatModel.findById(merchantObjectId).exec();
    console.log("Merchat is", merchatFavoriteDTO)
    if (!merchant) {
      return null;
    }

    const newFavoriteMerchant = new this.favoriteMerchatModel({
      merchant: merchant.name,
      payment_amount: merchatFavoriteDTO.amountPayment,
      merchant_id: merchantObjectId
    })

    try {
      return await newFavoriteMerchant.save();
    } catch (error) {
      console.log("Error on saving document", error);
      return null
    }
  }

  async removeFavoriteMerchant(merchantId: string): Promise<boolean> {
    const merchantObjectId = new Types.ObjectId(merchantId);
    const result = await this.favoriteMerchatModel.deleteOne({ merchant_id: merchantObjectId }).exec();
    return result.deletedCount > 0;
  }

  async searchMerchantByTerm(termn: string): Promise<Merchat[]> {
    const regex = new RegExp(termn, 'i')
    const merchants = await this.mertchatModel.find({ name: { $regex: regex } }).exec();
    return merchants;
  }

  async removeFavoriteMerchantById(id: string): Promise<boolean> {
    const objectId = new Types.ObjectId(id);
    const result = await this.favoriteMerchatModel.deleteOne({ _id: objectId }).exec();
    return result.deletedCount > 0;
  }

  async getAllFavoritesMerchant(): Promise<MerchatFavorite[]> {

    const result = await this.favoriteMerchatModel.find().exec();
    console.log('Favorites merchants :', result)
    return result

  }


}
