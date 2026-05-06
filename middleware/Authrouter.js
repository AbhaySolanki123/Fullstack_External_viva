import express from 'express';
import { signup, login } from 'PRACTICAL';
import { validateSignup, validateLogin } from 'PRACTICAL';

const router = express.Router();

router.post('/signup', validateSignup, signup);
router.post('/login', validateLogin, login);

export default router;