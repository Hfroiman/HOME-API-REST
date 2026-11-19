import { model, Schema } from "mongoose";

const UserSchema = new Schema ({
    firstname:{type:String, required:true},
    secondname:{type:String, required:true},
    lastname:{type:String, required:true},
    age:{type:Number, required:true},
    role:{type:String,  default:'user'}
});

export const UserModel = model('Users', UserSchema);