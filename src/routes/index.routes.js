import { Router } from "express";
import authRouter from "./auth.routes.js";


const router = Router();


/**
 * mounting auth routes
 */
router.use('/auth',authRouter);

export default router;