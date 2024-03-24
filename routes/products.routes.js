const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { authenticator } = require("../middlewares/authenticator");
const { ProductModel } = require("../models/Product"); // Note the correct import statement

const productRouter = express.Router();

productRouter.post("/com", async (req, resp) => {
    try {
        // Create a new instance of NoteModel
        const productNote = new ProductModel(req.body);

        // Save the new note to the database
        const result = await productNote.save();

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
    productRouter,
};

