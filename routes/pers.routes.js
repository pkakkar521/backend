const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { authenticator } = require("../middlewares/authenticator");
const { PerModel } = require("../models/Per");


const perRouter = express.Router();



    perRouter.post("/pec", async (req, resp) => {
        try {
            // Create a new instance of NoteModel
            const perNote = new PerModel(req.body);
    
            // Save the new note to the database
            const result = await perNote.save();
    
            // Respond with the saved note
            resp.send(result.toObject());
        } catch (error) {
            // Handle any errors that occur during saving
            resp.status(500).send({
                message: "Error saving note",
                error: error.message
            });
        }
    });






module.exports = {
  perRouter,
};