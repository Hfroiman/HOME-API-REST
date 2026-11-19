import { Router } from "express";
import * as Controller from '../Controllers/Homework.controllers.js'

const router = Router();

router.get('/', Controller.getAll);
router.get('/:Id', Controller.getByID);
router.post('/', Controller.create);
router.put('/', Controller.Update);
router.delete('/:Id', Controller.Delete);

export default router;