const mongoose = require('mongoose');
const userCVSchema = new mongoose.Schema({
    fullname: {
        type: String,
    },
    link: {
        type: String,
    },
    gender: {
        type: String,
    },
    age: {
        type: String,
    },
    tel: {
        type: [String],
    },
    email: {
        type: String,
    },
    photo: {
        type: String,
    },
    salary: {
        type: String,
    },
    position: {
        type: String,
    },
    experience: {
        type: String,
    },
    skills: {
        type: [String],
    },
    aboutMe: {
        type: String,
    },
    languages: {
        type: [String],
    }
});

const UserCV = mongoose.model('UserCV', userCVSchema)
module.exports = UserCV
