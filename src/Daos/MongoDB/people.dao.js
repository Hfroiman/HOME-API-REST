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
    
    async getByID(){
        try {
            const response = await UserModel.findByID();
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

    async Update(id, obj){
        try {
            const response = await UserModel.findByIDandUpdate(id, obj, { new: true});
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async Delete (id){
        try {
            const response = await UserModel.findByIDandDelete(id);
            return response;
        } catch (error) {
            console.log(error);
        }
    }
}