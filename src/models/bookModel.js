const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
	BookName : String,
    authorName : String,
    tags: [String],
    totalPage:Number,
    stockAvailable:Boolean,
    year: {
        type: Number,
        default: Number

    },
    prices: {
        indianPrice: String,
        europePrice: String
	},

	author: {type: ObjectId, ref: "NewAuthor"},
	price: Number,
    ratings: Number,
	publisher: {type: ObjectId, ref: "NewPublisher"}
}, { timestamps: true });


module.exports = mongoose.model('NewBook', bookSchema)

