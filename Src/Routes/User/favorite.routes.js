const express = require('express');
const FavoriteRoutes = express.Router();
const {userVerifyToken} = require('../../Helpers/userVerifyToken');

const { addNewFavorite,  deleteFavorite, getAllFavorite } = require('../../Controller/User/favorite.controller');

FavoriteRoutes.post('/add-New-Favorite' , userVerifyToken ,  addNewFavorite);

FavoriteRoutes.get('/get-All-Favorite', userVerifyToken, getAllFavorite);

FavoriteRoutes.delete('/delete-Favorite' , userVerifyToken , deleteFavorite);

module.exports = FavoriteRoutes;