import { Router } from "express";
import { addUser, getUsers } from '../controller/user.controller';

const router = Router()

router.route('').post(addUser)
router.route('/get').get(getUsers)

export default router;