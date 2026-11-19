import homeworkMongoDB from '../Daos/MongoDB/homework.dao.js'
const homeworkDao = new homeworkMongoDB();

export const getAll = async () => {
    try {
        return await homeworkDao.getAll();
    } catch (error) {
        console.log(error);
    }
}

export const getByID = async (Id) => {
    try {
        return await homeworkDao.getByID(Id);
    } catch (error) {
        console.log(error);
    }
}

export const create = async (obj) => {
    try {
        return  await homeworkDao.create(obj);
    } catch (error) {
        console.log(error);
    }
}

export const Update = async (Id, obj) => {
    try {
        return await homeworkDao.Update(Id, obj);
    } catch (error) {
        console.log(error);
    }
}

export const Delete = async (Id) => {
    try {
        return await homeworkDao.Delete(Id);
    } catch (error) {
        console.log(error);
    }
}