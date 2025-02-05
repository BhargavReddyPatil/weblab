import mongoose from "mongoose";

const whitelistEmailSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
});

export default mongoose.model("WhitelistEmail", whitelistEmailSchema);