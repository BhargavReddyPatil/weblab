import mongoose from "mongoose";

const aat2Schema = new mongoose.Schema({
  title: { type: String, required: true },
  questions: [
    {
      type: { type: String, enum: ["mcq", "fillInTheBlanks", "subjective"], required: true },
      question: { type: String, required: true },
      options: [{ type: String }], // For MCQ
      correctAnswer: { type: String }, // For MCQ and fillInTheBlanks
      marks: { type: Number, required: true },
    },
  ],
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  duration: { type: Number, required: true }, // In minutes
  facultyId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

export default mongoose.model("AAT2", aat2Schema);