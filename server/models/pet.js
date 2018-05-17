const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

module.exports=(() => {
    const PetSchema = new mongoose.Schema({
        name: {
            type: String,
            required: [true, "Name is required"],
            minlength: [3, "Name must be more than 3 length"],
            unique: [true, "Name already exist"],
            uniqueCaseInsensitive: true
        },
        petType:{
            type: String, 
            required:  [true, "Type is required"],
            minlength: [3, "Type must be more than 3 length"],
        }, 
        description:{
            type: String, 
            required: [true, "Please provide description of the pet"],
            minlength: [3, "Description should be longer than 3 characters"]
        },
        skills:[{type: String}],
        likes:{
            type: Number,
            default: 0
        }
    }, { timestamps: true });

    PetSchema.plugin(uniqueValidator, { message: 'Error, {VALUE} already exists. Expected {PATH} to be unique.' });
    mongoose.model('Pet', PetSchema);
})();