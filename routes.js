const express = require('express')
const router = express.Router()
const fs = require('fs')

let teachers = ''

//read teachers.json file
fs.readFile('./teacher.json', 'utf8', (err, data) => {
  if (err) throw err
  teachers = JSON.parse(data)
})

// root route
router.get('/', (req, res) => {
  res.render('home', teachers)
})

// profile route
router.get('/profile/:id', (req, res) => {
  const id = req.params.id
  //limit to top five posts
  teachers.teachers[id-1].score = teachers.teachers[id-1].score.slice(0, 5)
  res.render('profile', teachers.teachers[id-1])
})

// rating route
router.get('/profile/rating/:id', (req, res) => {
  const id = req.params.id
  res.render('rating', teachers.teachers[id-1])
})

// rating post route
router.post('/profile/rating/:id', (req, res) => {
  const feedback = { 'username': req.body.username,
    'rating': req.body.rating,
    'comment': req.body.comment
  }
  const id = req.params.id
  teachers.teachers[id-1].score.unshift(feedback)

  //sum all ratings and create average
  let sum = 0
  teachers.teachers[id-1].score.forEach(value => {
    sum += Number(value.rating)
  })
  const average = sum / teachers.teachers[id-1].score.length
  //update average value in teachers
  teachers.teachers[id-1].average = average

    //write to teachers.json file
  const newRating = JSON.stringify(teachers, null, 2)
  fs.writeFile('./teacher.json', newRating, (err) => {
    if (err) res.status(500).send('An Error Occured')
    res.redirect(`/profile/${id}`)
  })
})

module.exports = router
