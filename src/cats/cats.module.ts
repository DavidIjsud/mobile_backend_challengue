import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsController } from './cat.controller';
import { CatsService } from './cat.service';
import { Cat, CatSchema } from './models/cat';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }]),
    ],
    controllers: [CatsController],
    providers: [CatsService],
})
export class CatsModule { }
