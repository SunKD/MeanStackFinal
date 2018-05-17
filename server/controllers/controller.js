const mongoose = require('mongoose');
require('../models/pet.js');

module.exports = () => {
    var Pets = mongoose.model('Pet');

    return {
        readAll: (req, res) => {
            Pets.find({}).sort({ petType: 1 }).exec(function (err, pet) {
                if (err) {
                    res.json({ message: "Error", error: err })
                } else {
                    res.json({ message: "Success", data: pet })
                }
            })
        },

        create: (req, res) => {
            let newPet = new Pets({
                name: req.body.name,
                petType: req.body.petType,
                description: req.body.description,
                skills: req.body.skills,
            })
            newPet.save(function (err, pet) {
                if (err) {
                    res.json({ message: "Error", error: err })
                } else {
                    res.json({ message: "Success", data: pet })
                }
            })
        },

        update: (req, res) => {
            let updatePet = {
                name: req.body.name,
                petType: req.body.petType,
                description: req.body.description,
                skills: req.body.skills,
            }
            Pets.updateOne({ _id: req.params.id }, updatePet, { runValidator: true, context: 'query' }, function (err, pet) {
                if (err) {
                    res.json({ message: "Error", error: err })
                } else {
                    res.json({ message: "Success", data: pet })
                }
            })
        },

        updateLike: (req, res) => {
            Pets.findOne({ _id: req.params.id }, function (err, data) {
                if (!err) {
                    data.likes = data.likes + req.body.voteVal;
                    data.save((err2, a) => {
                        if (err) {
                            res.json({ message: "Error", error: err2 })
                        } else {
                            res.json({ message: "Success", data: a });
                        }
                    })
                }
            });
        },

        readOne: (req, res) => {
            Pets.findOne({ _id: req.params.id }, function (err, pet) {
                if (err) {
                    res.json({ message: "Error", error: err })
                } else {
                    res.json({ message: "Success", data: pet })
                }
            })
        },

        delete: (req, res) => {
            Pets.findByIdAndRemove({ _id: req.params.id }, function (err, pet) {
                if (err) {
                    res.json({ message: "Error", error: err })
                } else {
                    res.json({ message: "Success", data: pet })
                }
            })
        }
    }
}