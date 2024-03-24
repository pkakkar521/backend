const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { authenticator } = require("../middlewares/authenticator");
const { NoteModel } = require("../models/NoteModel"); // Note the correct import statement

const noteRouter = express.Router();

noteRouter.post("/reg", async (req, resp) => {
    try {
        // Create a new instance of NoteModel
        const newNote = new NoteModel(req.body);

        // Save the new note to the database
        const result = await newNote.save();

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
    noteRouter,
};
