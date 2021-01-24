const mongoose = require("mongoose");
const Schema = mongoose.Schema;
  
const schema = new Schema({
    name: String,
    price: Number,
    price_g: Number,
    weight: Number,
    country: String,
    site: String,
    image: String,
    link: String,
});
  
module.exports = mongoose.model('buckwheat_groats', schema)