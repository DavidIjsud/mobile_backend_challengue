import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cat } from './models/cat';
import { CreateCatDto } from './dtos/cat.dto';

@Injectable()
export class CatsService {
    constructor(@InjectModel(Cat.name) private catModel: Model<Cat>) { }

    async create(createCatDto: CreateCatDto): Promise<Cat> {
        const createdCat = new this.catModel(createCatDto);
        return createdCat.save();
    }

    async findAll(): Promise<Cat[]> {
        return this.catModel.find().exec();
    }
}
