const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema({
  userId: String,
  date: String,
  sets: Array,
  totalSets: Number,
  totalReps: Number
});

mongoose.model("trainings", schema);
