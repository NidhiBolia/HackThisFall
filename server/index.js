import jwt from 'jsonwebtoken';
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import UserModel from './model/User.js';
import NumberSchema from './model/Number.js';
const app = express();
dotenv.config();
mongoose.connect(process.env.MONGO_URL);
app.use(express.json());
app.use(cors());
app.use(cookieParser());

const PORT = process.env.PORT || 6500;
app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    bcrypt.hash(password, 10)
    .then((hash) => {
        UserModel.create({ name, email, password: hash })
        .then((user) => {
            res.send(user);
        })
        .catch((err) => {
            res.status(500).send('User already exists');
        });
    })
    .catch((err) => {
        res.status(500).send('Error');
    });
   
});
app.post('/store-details', async (req, res) => {
    const numberPlate = req.body.numberPlate;
    const phoneNumber = req.body.phoneNumber;
    const formData = new NumberSchema({ numberPlate, phoneNumber });
    try{
        await formData.save();
        res.send('Data stored successfully');
    }catch(err){
        res.status(500).send('Error');
    }
});

app.post('/logout', (req, res) => {
        localStorage.removeItem('token');
        res.send('Logged out successfully');
    });
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    UserModel.findOne({ email: email })
        .then(user=>{
            if(user){
                bcrypt.compare(password, user.password)
                    .then(match => {
                        if(match){
                            const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);  
                            res.json({ token });
                        } else {
                            res.json('Wrong password');
                        }
                    })
                    .catch(err => {
                        res.status(500).send('Error');
                    });
            } else {
                res.json('User does not exist');
            }
        })
        .catch(err => {
            res.status(500).send('Error');
        });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
