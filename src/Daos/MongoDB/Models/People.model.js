import { schema } from "mongoose";

const UserSchema = new schema ({
    firstname:{},
    secondname:{},
    lastname:{},
    age:{},
    role:{}
});

export const UserModel = model('users', UserSchema);