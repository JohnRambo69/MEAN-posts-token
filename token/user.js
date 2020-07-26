var mongoose = require('mongoose')
mongoose.connect('mongodb+srv://admin:pass@auth.hfrzz.mongodb.net/auth?retryWrites=true&w=majority')

var user = mongoose.Schema({
    username: String,
    password: {type: String, select: false}
})

module.exports = mongoose.model('user', user)