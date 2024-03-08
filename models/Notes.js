const mongoose = require('mongoose');

const notesSchema = new mongoose.Schema(
    {
        user_id: String,
        title: String,
        description: String
    }
)

module.exports = mongoose.model('Notes', notesSchema);