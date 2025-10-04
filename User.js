const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  _id2: { type: Number, required: true },
  username: { type: String, required: true },
  roomCode: { type: String, required: true },
  country: { type: String, default: "PL" },
  ban: { type: Boolean, default: false },
  ExploitsAccess: { type: Boolean, default: false },
  isInvisibleVisible: { type: Boolean, default: false },
  roomCodeAccess: { type: Boolean, default: false },
  isDeveloper: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
