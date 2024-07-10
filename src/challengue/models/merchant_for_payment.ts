import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types, Document } from "mongoose";


@Schema()
export class Merchat extends Document {

    _id: Types.ObjectId;

    @Prop({ required: true, })
    name: string;

    @Prop({ required: true, })
    category: string;
}

export const MerchatSchema = SchemaFactory.createForClass(Merchat)
