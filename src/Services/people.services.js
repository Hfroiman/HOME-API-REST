import PeopleDaoMongoDB from '../Daos/MongoDB/people.dao.js'
const PeopleDao = new PeopleDaoMongoDB();

export const getAll = async () => {
    try {
        return await PeopleDao.getAll();
    } catch (error) {
        console.log(error);
    }
}

export const getByID = async (Id) => {
    try {
        return await PeopleDao.getByID(Id);
    } catch (error) {
        console.log(error);
    }
}

export const create = async (obj) => {
    try {
        return  await PeopleDao.create(obj);
    } catch (error) {
        console.log(error);
    }
}

export const Update = async (Id, obj) => {
    try {
        return await PeopleDao.Update(Id, obj);
    } catch (error) {
        console.log(error);
    }
}

export const Delete = async (Id) => {
    try {
        return await PeopleDao.Delete(Id);
    } catch (error) {
        console.log(error);
    }
}

export const getUser = async (obj) => {
    try {
        return await PeopleDao.findUser(obj);
    } catch (error) {
        console.log(error);
    }
}

export const getbyUser = async (obj) => {
    try {
        return await PeopleDao.findPassword(obj);
    } catch (error) {
        console.log(error);
    }
}

export const getbyDNI = async (obj) => {
    try {
        return await PeopleDao.findUserbyDNI(obj);
    } catch (error) {
        console.log(error);
    }
}