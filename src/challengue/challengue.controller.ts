import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChallengueService } from './challengue.service';
import { MerchatFavorite } from './models/favorite_payment';
import { CreateFavoriteMerchatDto } from './dto/favorite_merchat.dto';
import { Merchat } from './models/merchant_for_payment';
import { SearchMerchantDTO } from './dto/search_merchant.dto';

@Controller('challengue')
export class ChallengueController {
  constructor(private readonly challengueService: ChallengueService) { }


  @Get('favorites/merchant')
  async getFavoritesMerchants(): Promise<MerchatFavorite[]> {
    return this.challengueService.getAllFavoritesMerchant();
  }

  @Post('search/merchant')
  async searchMerchant(@Body() searchMerchantDTO: SearchMerchantDTO): Promise<Merchat[]> {
    return this.challengueService.searchMerchantByTerm(searchMerchantDTO);
  }

  @Post('save/favorite-merchant')
  async createFavoriteMerchant(@Body() createFavoriteMerchantDTO: CreateFavoriteMerchatDto): Promise<MerchatFavorite | null> {

    const merchantFavoriteSaved = await this.challengueService.saveNewFavoriteMerchat(createFavoriteMerchantDTO)

    if (!merchantFavoriteSaved) {
      return null
    }

    return merchantFavoriteSaved

  }

}
