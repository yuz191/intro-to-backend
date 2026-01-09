import express from "express"

const app = express(); // Create an Express application

// middleware to parse JSON request bodies
// For every incoming request, if the request body is JSON, read it, parse it, and put the result into req.body
app.use(express.json());

// routes import
import userRouter from './routes/user.route.js';
// import postRouter from './routes/post.route.js';

// routes declaration
app.use("/api/v1/users", userRouter);

// example route: http://localhost:4000/api/v1/users/register

export default app;