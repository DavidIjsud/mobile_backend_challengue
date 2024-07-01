import { IsString } from "class-validator";

export class SearchMerchantDTO {

    @IsString()
    readonly termn: string
}