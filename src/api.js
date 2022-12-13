const express = require('express')
const serverless = require('serverless-http')
const cors = require('cors')

const app = express()
const router = express.Router()

const movies = require('../data/movies')
const moviesDetails = require('../data/moviesDetails')
const videos = require('../data/videos')

router.get('/v1/movies', (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.status(200).json({ movies })
})

router.get('/v1/movies/:id', (req, res) => {
  const { id } = req.params
  const requestedMovie = moviesDetails.find(movie => movie.id == id)

  if (!requestedMovie) {
    res.status(404).send('No movie found with given ID')
  } else {
    res.status(200).json({ movie: requestedMovie })
  }
})

router.get('/v1/movies/:id/videos', (req, res) => {
  const { id } = req.params
  const requestedVideos = videos.filter(video => video.movie_id == id)

  res.status(200).json({ videos: requestedVideos })
})

app.use('/.netlify/functions/api', router)
app.use(cors())

module.exports.handler = serverless(app)