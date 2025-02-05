import mongoose from "mongoose";

const studentAAT2Schema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  aat2Id: { type: mongoose.Schema.Types.ObjectId, ref: "AAT2", required: true },
  answers: [{ type: String }],
  marksObtained: { type: Number, default: 0 },
});

export default mongoose.model("StudentAAT2", studentAAT2Schema);