const express = require('express')
const crypto = require('node:crypto')
const moviesJSON = require('./movies.json')
const { validateMovie, validatePartialMovie } = require('./Schemas/movies')

const app = express()
app.disable('x-powered-by')
app.use(express.json())

app.get('/movies', (req, res) => {
  const { genre } = req.query
  if (genre) {
    const filteredMovies = moviesJSON.filter((movie) =>
      movie.genre.some(
        (g) => g.toLocaleLowerCase() === genre.toLocaleLowerCase()
      )
    )
    return res.json(filteredMovies)
  }
  res.json(moviesJSON)
})

app.get('/movies/:id', (req, res) => {
  const { id } = req.params
  const movie = moviesJSON.find((movie) => movie.id === id)

  if (movie) return res.json(movie)
  res.status(404).json({ error: 'Movie not found' })
})

app.post('/movies', (req, res) => {
  const result = validateMovie(req.body)

  if (!result.success) {
    return res.status(400).json({ errors: JSON.parse(result.error.message) })
  }

  const newMovie = {
    id: crypto.randomUUID(),
    ...result.data
  }

  moviesJSON.push(newMovie)
  res.status(201).json(newMovie)
})

app.patch('/movies/:id', (req, res) => {
  const { id } = req.params
  const result = validatePartialMovie(req.body)
  if (!result.success) {
    return res.status(400).json({ errors: JSON.parse(result.error.message) })
  }

  const movieIndex = moviesJSON.findIndex((movie) => movie.id === id)
  if (movieIndex === -1) {
    return res.status(404).json({ error: 'Movie not found' })
  }

  const updatedMovie = {
    ...moviesJSON[movieIndex],
    ...result.data
  }

  moviesJSON[movieIndex] = updatedMovie
  return res.json(updatedMovie)
})

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
  console.log(`Listening on port http://localhost:${PORT}`)
})
