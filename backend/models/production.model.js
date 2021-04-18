const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productionSchema = new Schema({
  product_name: { type: String, required: true },
  status: {type: String, required: true },
  quantity: {type: Number, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Production = mongoose.model('Production', productionSchema);

module.exports = Production;