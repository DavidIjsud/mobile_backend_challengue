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

    if (!merchant) {
      return null;
    }

    const newFavoriteMerchant = new this.favoriteMerchatModel({
      merchant: merchant.name,
      payment_amount: merchatFavoriteDTO.amountPayment,
      merchant_id: merchantObjectId
    })

    return newFavoriteMerchant.save();

  }

  async searchMerchantByTerm(searchMerchantByTermDto: SearchMerchantDTO): Promise<Merchat[]> {

    const { termn } = searchMerchantByTermDto;
    const regex = new RegExp(termn, 'i')
    const merchants = await this.mertchatModel.find({ name: { $regex: regex } }).exec();
    return merchants;

  }

  async getAllFavoritesMerchant(): Promise<MerchatFavorite[]> {

    return this.favoriteMerchatModel.find().exec();

  }


}
