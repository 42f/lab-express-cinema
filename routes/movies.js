const express = require('express');
const router = express.Router();
const Movies = require('../models/Movie.model');


router.get('/', async (req, res, next) => {
	try {
		const data = {
			movies: await Movies.find()
		}
		res.render('movies', data)
	}
	catch (err) {
		console.error(err);
		next(err);
	}
});

router.get('/:movieId', async (req, res, next) => {
	try {
		const data = await Movies.findById(req.params.movieId)
		res.render('movie', data)
	}
	catch (err) {
		console.error(err);
		next(err);
	}
});

module.exports = router;
