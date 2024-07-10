import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types, Document } from "mongoose";

@Schema()
export class MerchatFavorite extends Document {


    _id: Types.ObjectId;

    @Prop({ required: true, })
    merchant: string;

    @Prop({ required: true, })
    payment_amount: number

    @Prop({ type: Types.ObjectId, required: true, unique: true })
    merchant_id: string;

}

export const MerchatFavoriteSchema = SchemaFactory.createForClass(MerchatFavorite)