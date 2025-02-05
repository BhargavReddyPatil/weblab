import mongoose from "mongoose";

const studentAAT1Schema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  aat1Id: { type: mongoose.Schema.Types.ObjectId, ref: "AAT1", required: true },
  certificate: { type: String, required: true },
  grade: { type: String, default: "" },
});

export default mongoose.model("StudentAAT1", studentAAT1Schema);