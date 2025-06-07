import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import  userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js';
dotenv.config();

mongoose.connect("mongodb+srv://olucashie:Testimony@cluster0.hhk1m4t.mongodb.net/UNIHOST?retryWrites=true&w=majority&appName=Cluster0")

.then(() => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.error(err);
});

const app = express();
app.use(express.json())

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000!!');
});

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        status: false,
        statusCode,
        message
    });
})