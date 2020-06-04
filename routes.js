const fs = require ('fs')
const express = require('express')
const router = express.Router()

//root route
router.get('/', (req, res) => {
  fs.readFile('./teachers.json', 'utf8' (err, data) => {
    if (err){
      return res.status(500).send ('An error occured')
    }
    const teachers = JSON. parse(data)
    res.render('/layouts/main')
})

//profile route
router.get('/profile/:id', (req, res) => {
  fs.readFile('./teachers.json', 'utf8' (err, data) => {
    if (err){
      return res.status(500).send ('An error occured')
    }
    const teachers = JSON. parse(data)
    res.render('profile', teachers)

  }) 
 })

//rating route
router.get('/profile/rating/:id', (req, res) => {
  fs.readFile('./teachers.json', 'utf8' (err, data) => {
    if (err){
      return res.status(500).send ('An error occured')
    }
    const teachers = JSON. parse(data)
    res.render('rating', teachers)
})