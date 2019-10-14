const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema({
    firstName: {
        type: String,
        //required: true,
        trim: true
    },
    lastName: {
        type: String,
        //required: true,
        trim: true
    },
    userName: {
        type: String,
        //required: true,
        trim: true
    },
    gender: {
        type: String,
        //required: true,
        trim: true,
        enum:['male','female'],
    },
    mobile: {
        type: String,
        required: true,
        unique: true
    },
    image:{
        type:String,
        default:""
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
    role: {
        type: String,
        //required: true,
        default:'user',
        enum: ['user', 'admin']
    },
    password     : {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 20,
    }

})
module.exports = mongoose.model('user', userSchema);