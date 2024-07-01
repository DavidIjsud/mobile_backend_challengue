import { Controller, Get, Post, Body } from '@nestjs/common';
import { CatsService } from './cat.service';
import { CreateCatDto } from './dtos/cat.dto';

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) { }

    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        await this.catsService.create(createCatDto);
    }

    @Get()
    async findAll() {
        return this.catsService.findAll();
    }
}
