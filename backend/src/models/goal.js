const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
    targetAmount: {
        type: Number,
        required: true
    },
    currentSavings: {
        type: Number,
        default: 0
    },
    goalDescription: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Goal = mongoose.model('Goal', goalSchema);

module.exports = Goal;