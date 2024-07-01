import { Injectable } from '@nestjs/common';
import { Category, CategoryDocument } from './models/category';
import { Model } from 'mongoose';
import { ParentCategory, ParentCategoryDocument } from './models/parent_category';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CategoriesService {

    constructor(
        @InjectModel(Category.name) private categoryModel: Model<CategoryDocument>,
        @InjectModel(ParentCategory.name) private parentCategoryModel: Model<ParentCategoryDocument>
    ) { }

    // Category methods
    async createCategory(createCategoryDto: any): Promise<Category> {
        const createdCategory = new this.categoryModel(createCategoryDto);
        return createdCategory.save();
    }

    async findAllCategories(): Promise<Category[]> {
        return this.categoryModel.find().exec();
    }

    async findOneCategory(id: string): Promise<Category> {
        return this.categoryModel.findById(id).exec();
    }

    async updateCategory(id: string, updateCategoryDto: any): Promise<Category> {
        return this.categoryModel.findByIdAndUpdate(id, updateCategoryDto, { new: true }).exec();
    }

    async deleteCategory(id: string): Promise<Category> {
        return this.categoryModel.findByIdAndDelete(id).exec();
    }

    // ParentCategory methods
    async createParentCategory(createParentCategoryDto: any): Promise<ParentCategory> {
        const createdParentCategory = new this.parentCategoryModel(createParentCategoryDto);
        return createdParentCategory.save();
    }

    async findAllParentCategories(): Promise<ParentCategory[]> {
        return this.parentCategoryModel.find().exec();
    }

    async findOneParentCategory(id: string): Promise<ParentCategory> {
        return this.parentCategoryModel.findById(id).exec();
    }

    async updateParentCategory(id: string, updateParentCategoryDto: any): Promise<ParentCategory> {
        return this.parentCategoryModel.findByIdAndUpdate(id, updateParentCategoryDto, { new: true }).exec();
    }

    async deleteParentCategory(id: string): Promise<ParentCategory> {
        return this.parentCategoryModel.findByIdAndDelete(id).exec();
    }

}
