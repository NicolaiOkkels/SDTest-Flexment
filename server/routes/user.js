import express from 'express';

import { getUser, getUsers, signIn, signUp } from '../controllers/user.js';

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/signIn", signIn);
router.post("/signUp", signUp);

export default router;