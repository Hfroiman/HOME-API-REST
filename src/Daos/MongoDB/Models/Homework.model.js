import { model, Schema } from "mongoose";

const HomeworkSchema = new Schema ({
    firstname_homework:{type:String, required:true},
    state:{type:String, default:'Pendiente'},
    points:{type:Number, required:true},
    date:{type:date, required:true},
    name_user:{type:String}
});

export const HomeworkModel = model('homework', HomeworkSchema);