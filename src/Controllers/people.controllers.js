import * as Service from "../Services/People.services.js";

export const getAll =  async (req, res, next) => {
    try {
        const response = await services.getAll();
        res.json(response);
    } catch (error) {
        console.log(error);
    }
};

export const getByID = async (req, res, nect) => {
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
    const {obj} = req.params;
    const person =  await services.create(obj);
    if(!person) res.status(404).json({})
}