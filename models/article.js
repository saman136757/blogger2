const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    title: {
        type: String,
        required: true,
        unique:true
    },
    content: {
        type: String,
        required: true
    },
    createAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    lastUpdate: {
        type: Date,
        required: true,
        default: Date.now
    },
    image:{
        type:String,
        default:"blog.png"
    },
    seenCount:{
        type:Number,
        default:0
    }
});


module.exports = mongoose.model('article', ArticleSchema);