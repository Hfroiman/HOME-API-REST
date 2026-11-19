import {HomeworkModel} from './Models/Homework.model.js'

export default class homeworkMongoDB {
    async getAll(){
        try {
            const response = await HomeworkModel.find({});
            return response;
        } catch (error) {
            console.log(error);
        }
    }
    
    async getByID(Id){
        try {
            const response = await HomeworkModel.findById(Id);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async create(obj){
        try {
            const response = await HomeworkModel.create(obj);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async Update(Id, obj){
        try {
            const response = await HomeworkModel.findByIDandUpdate(Id, obj, { new: true});
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async Delete (Id){
        try {
            const response = await HomeworkModel.findByIDandDelete(Id);
            return response;
        } catch (error) {
            console.log(error);
        }
    }
}