const express = require('express');
const reviewRoutes = express.Router();
const { userVerifyToken } = require('../../Helpers/userVerifyToken');
const {
    addReview,
    getAllReview,
    getReview,
    updateReview,
    deleteReview
} = require('../../Controller/User/review.controller');

reviewRoutes.post('/add-Review', userVerifyToken, addReview);
reviewRoutes.get('/get-All-Review', userVerifyToken, getAllReview);
reviewRoutes.get('/get-Review', userVerifyToken, getReview);
reviewRoutes.put('/update-Review', userVerifyToken, updateReview);
reviewRoutes.delete('/delete-Review', userVerifyToken, deleteReview);

module.exports = reviewRoutes;