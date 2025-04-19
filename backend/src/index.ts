import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectToDatabase from "./config/db";
import errorHandler from "./middleware/errorHandler";
import catchErrors from "./utils/catchErrors";

import { OK } from "./constants/http";
import { APP_ORIGIN, NODE_ENV, PORT } from "./constants/env";



import authRoutes from './routes/userRoutes'
import internationalCenterRoutes from './routes/internationalCenterRoutes';


const app = express();

// add middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: APP_ORIGIN,
    credentials: true,
  })
);
app.use(cookieParser());

// health check
app.get("/", (_, res, next) => {
    return res.status(OK).json({
        status : 'Healthy'
    });
}
); 

// auth routes
app.use('/api/auth', authRoutes);
app.use('/api/centers', internationalCenterRoutes);

// protected routes


// error handler

app.use(errorHandler);

app.listen(PORT, async () => {
  console.log(`Server listening on port ${PORT} in ${NODE_ENV} environment`);
  await connectToDatabase();
});