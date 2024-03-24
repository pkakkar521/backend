const mongoose=require('mongoose')

const productSchema =new mongoose.Schema({
        name:String,
        phone:String,
        category:String,
        userId:String,
        company:String   
    
});
const ProductModel = mongoose.model("objects", productSchema);

module.exports = {
  ProductModel,
};
