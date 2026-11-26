import * as services from "../Services/People.services.js";

export const getAll =  async (req, res, next) => {
    try {
        const response = await services.getAll();
        res.json(response);
    } catch (error) {
        console.log(error);
    }
};

export const getByID = async (req, res, next) => {
    try {
        const {Id} =  req.params;
        const person = await services.getByID(Id);
        if(!person) res.status(404).json({msg: 'Person not found'});
        else res.json(person);
    } catch (error) {
        console.log(error);
    }
}

export const create = async (req, res, next) => {
    try {
        const person =  await services.create(req.body);
        if(!person) res.status(404).json({msg: 'Error can´t creat'})
    } catch (error) {
        console.log(error);
    }
}

export const Update = async (req, res, next) => {
    try {
        const {Id} =  req.params;
        const person = await services.Update(Id, req.body);
        if(!person) res.status(404).json({msg: 'Person not found'});
        else res.json(person);
    } catch (error) {
        console.log(error);
    }
}

export const Delete = async (req, res, next) => {
    try {
        const {Id} =  req.params;
        const person = await services.Delete(Id);
        if(!person) res.status(404).json({msg: 'Person not found'});
        else res.json(person);
    } catch (error) {
        console.log(error);
    }
}

export const getUser =  async (req, res, next) => {
    try {
        const user = await services.getUser(req.body);
        if(!user) res.status(404).json({msg: 'Person not found'});
        else res.json(user);
    } catch (error) {
        console.log(error);
    }
};

export const getbyUser =  async (req, res, next) => {
    try {
        const user = await services.getbyUser(req.body);
        if(!user) res.status(404).json({msg: 'User not found'});
        else res.json(user);
    } catch (error) {
        console.log(error);
    }
};

export const getbyDNI =  async (req, res, next) => {
    try {
        const user = await services.getbyDNI(req.body);
        if(!user) res.status(404).json({msg: 'User not found'});
        else res.json(user);
    } catch (error) {
        console.log(error);
    }
};