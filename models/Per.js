
const mongoose=require('mongoose')

const perSchema =new mongoose.Schema({
        message:String,
    
});
const PerModel = mongoose.model("pers", perSchema);

module.exports = {
  PerModel,
};
