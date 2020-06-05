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

// profile route
router.get('/profile/:id', (req, res) => {
  const id = req.params.id
  // const chosenTeacher = teachers.teachers[id-1].score
  // console.log(chosenTeacher)
  res.render('profile', teachers.teachers[id-1])
})

// rating route
router.get('/profile/rating/:id', (req, res) => {
  res.render('rating', teachers)
})

// rating post route
router.post('/profile/rating/:id', (req, res) => {
  const feedback = { 'username': req.body.username,
    'rating': req.body.rating,
    'comment': req.body.comment
  }

  teachers.teachers.score.unshift(feedback)
  const id = req.params.id

  const newRating = JSON.stringify(teachers, null, 2)
  fs.writeFile('./teacher.json', newRating, (err) => {
    if (err) res.status(500).send('An Error Occured')
    res.redirect(`/profile/${id}`)
  })
})

module.exports = router
