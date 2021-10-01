const mongoose = require("../connection");
const Schema = mongoose.Schema;
const bookingSchema = new Schema({
  id: { type: String },
  title: { type: String },
  completed: { type: Boolean },
});

const bookingModel = mongoose.model("details", bookingSchema);
module.exports = bookingModel;
