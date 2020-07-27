// const express = require('express');
// const bcrypt = require('bcrypt');
// const router = new express.Router();
// const { User } = require('./../models/users');
const jwt = require('jsonwebtoken');

const authentication = (req, res, next) => {
  const token = req.cookies['Lfrm-jwt-token'];
  // If the user is logged in
  try {
    const payload = jwt.verify(token, 'jwtSecretToken');
    req.payload = payload;
    return next();
  } catch (e) {
    req.error = 'User logged out';
    return next();
  }
};

module.exports = authentication;
