const express = require('express');
const userRoute = express.Router();
const { userVerifyToken } = require('../../Helpers/userVerifyToken');
const { upload } = require('../../Helpers/imageUpload')
const {  
    registerUser,
    loginUser,
    getAllUser,
    getUser,
    updateUser,
    deleteUser,
    updatePassword
} = require('../../Controller/User/user.controller');

userRoute.post('/register-User',upload.single('profileImage'),registerUser);

userRoute.post('/login-User',loginUser);

userRoute.get('/get-User',userVerifyToken, getUser);

userRoute.get('/get-All-User',userVerifyToken, getAllUser);

userRoute.put('/update-User',userVerifyToken, updateUser);

userRoute.put('/update-Password',userVerifyToken, updatePassword);

userRoute.delete('/delete-User',userVerifyToken, deleteUser);

module.exports = userRoute;