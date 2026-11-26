import { Router } from "express";
import * as Controller from '../Controllers/people.controllers.js'

const router = Router();

router.get('/', Controller.getAll);
router.get('/login', Controller.getUser);
router.get('/recuperatepassword', Controller.getbyUser);
router.get('/recuperateuser', Controller.getbyDNI);

router.get('/:Id', Controller.getByID);
router.post('/', Controller.create);
router.put('/', Controller.Update);
router.delete('/:id', Controller.Delete);

export default router;