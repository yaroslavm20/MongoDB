const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        data_created: Date
    }
)

module.exports = mongoose.model('Users', usersSchema);