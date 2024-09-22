import express, { application } from 'express';
import { getAllUsers, logIn, signUp } from '../Controllers/userControll.js';

const router = express.Router();

router.get('/', getAllUsers);
router.post('/signup', signUp);
router.post('/login', logIn )




export default router;