const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    settings: {
        currency: {
            type: String,
            default: 'USD'
        },
        language: {
            type: String,
            default: 'en'
        }
    }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;