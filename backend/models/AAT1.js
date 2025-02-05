import mongoose from "mongoose";

const aat1Schema = new mongoose.Schema({
  courseLink: { type: String, required: true },
  deadline: { type: Date, required: true },
  facultyId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  students: [
    {
      studentId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
      certificate: { type: String, required: true },
      grade: { type: String, default: "" },
    },
  ],
});

export default mongoose.model("AAT1", aat1Schema);