const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    addressLine: String
})

const Address = new mongoose.model('Address', addressSchema);

const address = new Address({
    addressLine: 'asnsd'
})
address.save();


module.exports = Address