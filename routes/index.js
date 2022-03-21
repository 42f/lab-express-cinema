const express = require('express');
const router = express.Router();

/* GET home page */
const returnRoute = router.get('/', (req, res, next) => res.render('index'));

console.log(returnRoute.stack[0]);
module.exports = router;
