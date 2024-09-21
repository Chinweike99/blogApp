import express, { application } from 'express';
import { getAllUsers, signUp } from '../Controllers/userControll.js';

const router = express.Router();

router.get('/', getAllUsers);
router.post('/signup', signUp);




export default router;