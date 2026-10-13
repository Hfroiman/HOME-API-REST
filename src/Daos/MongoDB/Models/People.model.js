import { schema } from "mongoose";

const UserSchema = new schema ({
    firstname:{type:string, required:true, max:20},
    secondname:{type:string, required:true, max:20},
    lastname:{type:string, required:true, max:20},
    age:{type:number, required:true},
    role:{type:string,  default:'user'}
});

export const UserModel = model('users', UserSchema);