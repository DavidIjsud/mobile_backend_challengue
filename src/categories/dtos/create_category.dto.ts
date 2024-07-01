import { IsString, IsNotEmpty, IsOptional, IsBoolean, IsUrl, IsMongoId, Max } from 'class-validator';

export class CreateCategoryDto {
    @IsString()
    @IsNotEmpty()
    @Max(15)
    name: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsMongoId()
    @IsOptional()
    parentCategoryId?: string;

    @IsBoolean()
    @IsOptional()
    isActive?: boolean;

    @IsUrl()
    @IsOptional()
    imageURL?: string;

    @IsString()
    @IsNotEmpty()
    slug: string;

    @IsString()
    @IsOptional()
    metaTitle?: string;

    @IsString()
    @IsOptional()
    metaDescription?: string;
}
