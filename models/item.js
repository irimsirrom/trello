var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
const ItemSchema = mongoose.Schema({
  name: {
    type: String
  }
});

const Item = module.exports = mongoose.model('Item', ItemSchema);
