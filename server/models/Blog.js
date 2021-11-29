const mongoose = require('mongoose');

const { Schema } = mongoose;

const blogSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    image: {
        type: String
    }
});


const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;