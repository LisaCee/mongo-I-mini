const mongoose = require('mongoose');

const definition = {
    species: {
        type: String,
        required: true,
        // unique: true
    }, // String, required
    latinName: {
        type: String,
        required: true,
    }, // String, required
    createdOn: {
        type: Date,
        default: Date.now,
    } // Date, required, defaults to current date
}

const options = {
    timestamps: true,    //includes updates
};

const bearSchema = new mongoose.Schema(definition, options);

const bearModel = mongoose.model('Bear', bearSchema, 'bears');
//third argument, by default is 'Bear' + lowercase + plural

module.exports = bearModel;