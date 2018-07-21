var mongoose = require('mongoose')

var ProfileSchema = new mongoose.Schema({
    email: {type:String, default:""},
    username: {type:String, default:""},
    password: {type:String, default:""},
    timestamp: {type:Date, default: Date.now}

})

module.exports = mongoose.model('ProfileSchema', ProfileSchema)