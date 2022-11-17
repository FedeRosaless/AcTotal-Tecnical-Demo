import { Document, model, Schema } from "mongoose";

export interface Iuser extends Document{
    name: string,
    email: string,
    number?: number,
}

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    
    email:{
        type: String,
        required:true,
    },

    number:{
        type: Number,
        required: false,
    }
},{
    timestamps:true
  });

const User = model<Iuser>('users', userSchema);
module.exports = User

