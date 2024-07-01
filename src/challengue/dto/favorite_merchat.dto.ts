import { IsString, IsNotEmpty, IsOptional, IsBoolean, IsUrl, IsMongoId, Max, IsNumber, IsPositive } from 'class-validator';

export class CreateFavoriteMerchatDto {
    @IsString()
    readonly merchantId: string;


    @IsNumber({
        allowNaN: false,
        allowInfinity: false,
    })
    @IsPositive()
    readonly amountPayment: number;
}
