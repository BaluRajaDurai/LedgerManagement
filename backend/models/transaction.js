const mongoose = require('mongoose');
const { Schema } = mongoose;

const transactionSchema = new Schema({
  Customer:{ type: String, required: true },
  Type:{ type: String, required: true },
  Description:{type: String, required: true },
  Amount:{ type: Number, required: true },

});

const transaction = mongoose.model('Transaction', transactionSchema);

module.exports = transaction;