import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Category, CategorySchema } from './models/category';
import { ParentCategory } from './models/parent_category';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Category.name, schema: CategorySchema
      },
      {
        name: ParentCategory.name, schema: ParentCategory
      }
    ])
  ],
  controllers: [CategoriesController],
  providers: [CategoriesService],
})
export class CategoriesModule { }
