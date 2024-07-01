import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type CategoryDocument = Category & Document;

@Schema({ timestamps: true })
export class Category {
    @Prop({ required: true })
    name: string;

    @Prop()
    description: string;

    @Prop({ type: Types.ObjectId, ref: 'ParentCategory' })
    parentCategoryId: Types.ObjectId;

    @Prop({ default: true })
    isActive: boolean;

    @Prop()
    imageURL: string;

    @Prop({ required: true, unique: true })
    slug: string;

    @Prop()
    metaTitle: string;

    @Prop()
    metaDescription: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
