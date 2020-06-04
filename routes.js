const express = require('express')
const router = express.Router()
const fs = require('fs')

let teachers = ''

fs.readFile('./teacher.json', 'utf8', (err, data) => {
  if (err) throw err
  teachers = JSON.parse(data)
})

// root route
router.get('/', (req, res) => {
  res.render('home', teachers)
})

//profile route
router.get('/profile/:id', (req, res) => {
  res.render('profile', teachers)
})

//rating route
router.get('/profile/rating/:id', (req, res) => {
  res.render('rating', teachers)
})

module.exports = router