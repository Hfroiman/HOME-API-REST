import mongoose from 'mongoose':

const connectionstring = 'mongodb://localhost:27017/';
export const InitMongoDB = async () => {
    try {
        await mongoose.connect(connectionstring);
        console.log('conectado a la BD de mongo');        
    } catch (error) {
        console.log('error: ' + error);
    }
}