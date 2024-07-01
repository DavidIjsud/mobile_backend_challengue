import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types, Document } from "mongoose";

@Schema()
export class MerchatFavorite extends Document {

    @Prop({ type: Types.ObjectId, auto: true })
    _id: Types.ObjectId;

    @Prop({ required: true, })
    merchant: string;

    @Prop({ required: true, })
    payment_amount: number

    @Prop({ type: Types.ObjectId, required: true, })
    merchant_id: string;

}

export const MerchatFavoriteSchema = SchemaFactory.createForClass(MerchatFavorite)