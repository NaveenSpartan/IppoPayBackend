const mongoose = require('mongoose')
const password = mongoose.Schema(
  {
    password: {
      type: String,
      required: [true, 'please enter a password'],
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Password', password)
