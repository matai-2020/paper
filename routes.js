const fs = require ('fs')
const express = require('express')
const router = express.Router()

//root route
router.get('/', (req, res) => {
  res.redirect('/layouts/main')
})




//profile route
router.get('/profile', (req, res) => {
  fs.readFile('./teachers.json', 'utf8' (err, data) => {
    if (err){
      return res.status(500).send ('An error occured')
    }
    const teachers = JSON. parse(data)
    res.render('index', teachers)
    
  }) 
 })




//rating route

