const uri = "mongodb+srv://admin:pass@social-app.v6qml.mongodb.net/social?retryWrites=true&w=majority";

var mongoose = require('mongoose')
mongoose.connect(uri, function () {
    console.log('Nawiazano polaczenie z MongoDb.')
})

module.exports = mongoose