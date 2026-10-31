import {UserModel} from './Models/People.model.js'

export default class PeopleDaoMongoDB {
    async getAll(){
        try {
            const response = await UserModel.find({});
            return response;
        } catch (error) {
            console.log(error);
        }
    }
    
    async getByID(Id){
        try {
            const response = await UserModel.findByID(Id);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async create(obj){
        try {
            const response = await UserModel.create(obj);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async Update(Id, obj){
        try {
            const response = await UserModel.findByIDandUpdate(Id, obj, { new: true});
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async Delete (Id){
        try {
            const response = await UserModel.findByIDandDelete(Id);
            return response;
        } catch (error) {
            console.log(error);
        }
    }
}