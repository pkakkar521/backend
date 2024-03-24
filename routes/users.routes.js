
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { authenticator } = require("../middlewares/authenticator");
const { UserModel } = require("../models/UserModel"); // Note the correct import statement

const userRouter = express.Router();

userRouter.post("/register", async (req, resp) => {
    try {
        // Create a new instance of NoteModel
        const userNote = new UserModel(req.body);

        // Save the new note to the database
        const result = await userNote.save();

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
    userRouter,
};