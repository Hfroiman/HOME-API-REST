import * as services from "../Services/Homework.services.js";

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
        const work = await services.getByID(Id);
        if(!work) res.status(404).json({msg: 'work not found'});
        else res.json(work);
    } catch (error) {
        console.log(error);
    }
}

export const create = async (req, res, next) => {
    try {
        const work =  await services.create(req.body);
        if(!work) res.status(404).json({msg: 'Error can´t creat'})
    } catch (error) {
        console.log(error);
    }
}

export const Update = async (req, res, next) => {
    try {
        const {Id} =  req.params;
        const work = await services.Update(Id, req.body);
        if(!work) res.status(404).json({msg: 'work not found'});
        else res.json(work);
    } catch (error) {
        console.log(error);
    }
}

export const Delete = async (req, res, next) => {
    try {
        const {Id} =  req.params;
        const work = await services.Delete(Id);
        if(!work) res.status(404).json({msg: 'work not found'});
        else res.json(work);
    } catch (error) {
        console.log(error);
    }
}