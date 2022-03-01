const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {type:String,required:true}, 
    authorName: String, 
    tags: [String],
    totalPage:Number,
    stockAvailable: Boolean,
    year: {
        type: Number,
        default: 2021
    },
    prices: {
        indianPrice: Number,
        europePrice: Number
    }
    
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
