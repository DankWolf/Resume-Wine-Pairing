const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const goalSchema = new Schema({
    text:{
        type: String,
        required: [true, 'Please add a text value']
    }
})

const Goal = mongoose.model('Goal', goalSchema)

const wineSchema = new Schema({

    flavor: {type: String, required: true},
    text: {type: String, required: true}
})

const Wine = mongoose.model('Wine', wineSchema)

module.exports = {
    Goal,
    Wine
}