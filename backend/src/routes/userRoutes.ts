import express from 'express';
import { registerHandler , loginHandler } from '../controllers/userController';


const router = express.Router();

// prefix: /auth
router.post('/', registerHandler)
router.post('/login', loginHandler)

export default router;