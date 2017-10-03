'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var lessonSchema = new Schema({
    name: String,
    teacher: String,
    auditory: String,
    notes: String
});

var daySchema = new Schema({
    dayName: {
        type: String,
        enum: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
        default: ['monday']
    },
    lessons: [lessonSchema, lessonSchema, lessonSchema, lessonSchema, lessonSchema, lessonSchema]
    , createdDate: {
    type: Date,
    default: Date.now
    }

});

var weekSchema = new Schema({
    week: [daySchema, daySchema, daySchema, daySchema, daySchema, daySchema],
    info:{
        status: {
            type: String,
            enum: ['even', 'odd'],
            default: ['even']
        }
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
});

var groupSchema = new Schema({
    groupName: String,
    evenWeek: weekSchema,
    oddWeek: weekSchema,
    info:{
        notes: String
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('lessonSchema', lessonSchema);
module.exports = mongoose.model('daySchema', daySchema);
module.exports = mongoose.model('weekSchema', weekSchema);
module.exports = mongoose.model('groupSchema', groupSchema);
