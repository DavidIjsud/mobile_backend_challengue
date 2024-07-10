import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ChallengueService } from './challengue.service';
import { MerchatFavorite } from './models/favorite_payment';
import { CreateFavoriteMerchatDto } from './dto/favorite_merchat.dto';
import { Merchat } from './models/merchant_for_payment';
import { SearchMerchantDTO } from './dto/search_merchant.dto';

@Controller('challengue')
export class ChallengueController {
  constructor(private readonly challengueService: ChallengueService) { }

  @Delete('favorites/merchant/:id')
  async removeFavoriteMerchant(@Param('id') id: string): Promise<{ status: number; message: string }> {
    const result = await this.challengueService.removeFavoriteMerchantById(id);
    return {
      status: 200,
      message: result ? 'Merchant removed from favorites' : 'Merchant not found',
    };
  }


  @Get('favorites/merchant')
  async getFavoritesMerchants(): Promise<MerchatFavorite[]> {
    return await this.challengueService.getAllFavoritesMerchant();
  }

  @Get('search/merchant')
  async searchMerchant(@Query('searchTerm') searchTerm: string): Promise<{ status: number; data: Merchat[] }> {
    const merchants = await this.challengueService.searchMerchantByTerm(searchTerm);
    return {
      status: 200,
      data: merchants,
    };
  }

  @Post('save/favorite-merchant')
  async createFavoriteMerchant(@Body() createFavoriteMerchantDTO: CreateFavoriteMerchatDto): Promise<MerchatFavorite | null> {

    const merchantFavoriteSaved = await this.challengueService.saveNewFavoriteMerchat(createFavoriteMerchantDTO)

    if (!merchantFavoriteSaved) {
      console.log("Merchant not created");
      return null
    }
    console.log("Merchant  created");
    return merchantFavoriteSaved

  }

}
