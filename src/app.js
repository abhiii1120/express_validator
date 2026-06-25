import express from 'express';
import indexRoutes from './routes/index.routes.js';

let app = express();
app.use(express.json())


/**
 * mounting all the routes
 */
app.use('/api',indexRoutes)

export default app;