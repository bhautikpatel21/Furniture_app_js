const express = require('express');
const reviewRoutes = express.Router();
const { adminVerifyToken } = require('../../Helpers/adminVerifyToken');
const {
    getAllReview,
    deleteReview
} = require('../../Controller/Admin/review.controller');

reviewRoutes.get('/get-All-Review', adminVerifyToken, getAllReview);
reviewRoutes.delete('/delete-Review', adminVerifyToken, deleteReview);

module.exports = reviewRoutes;