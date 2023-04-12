const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const moverSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    states: [{
        type: String
    }]
})

module.exports = mongoose.model('Mover', moverSchema);