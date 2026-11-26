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
            const response = await UserModel.findById(Id);
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
            const response = await UserModel.findByIdAndUpdate(Id, obj, { new: true});
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async Delete (Id){
        try {
            const response = await UserModel.findByIdAndDelete(Id);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async findUser(obj){
        try {
            const response = await UserModel.findOne({user:obj.user, password:obj.password});
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async findPassword(obj){
        try {
            const response = await UserModel.findOne({user:obj.user});
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async findUserbyDNI(obj){
        try {
            const response = await UserModel.findOne({dni:obj.dni});
            return response;
        } catch (error) {
            console.log(error);
        }
    }
}