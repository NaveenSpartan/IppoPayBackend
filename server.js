const express = require('express')
const mongoose = require('mongoose')
const Password = require('./models/passwordModal')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

//create request
app.post('/password', async (req, res) => {
  try {
    const password = await Password.create(req.body)
    res.status(200).json(password)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error.message })
  }
})

app.get('/password', async (req, res) => {
  try {
    const password = await Password.find({})
    console.log('password', password)
    res.status(200).json(password)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

mongoose
  .connect(
    'mongodb+srv://naveenspartan:naveenspartan@naveenapi.ztndpuf.mongodb.net/BACKEND?retryWrites=true&w=majority'
  )
  .then(() => {
    console.log('connected to mongoDB')
    app.listen(8080, () => {
      console.log('Port is running on 8080')
    })
  })
  .catch((error) => {
    console.log(error.message)
  })
