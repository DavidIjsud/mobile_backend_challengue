import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ParentCategoryDocument = ParentCategory & Document;

@Schema({ timestamps: true })
export class ParentCategory {
    @Prop()
    name: string;

    @Prop()
    description: string;

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

export const ParentCategorySchema = SchemaFactory.createForClass(ParentCategory);
