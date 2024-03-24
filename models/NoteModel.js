const mongoose = require("mongoose");

const noteSchema = mongoose.Schema({
  
    firstname:String,
    lastname:String,
    email:String,
    country:String,
    expectedsalary:String,
    addetail:String
   
    
}
 
);

const NoteModel = mongoose.model("notes", noteSchema);

module.exports = {
  NoteModel,
};