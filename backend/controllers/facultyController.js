import AAT1 from "../models/AAT1.js";
import AAT2 from "../models/AAT2.js";
import RemedialSession from "../models/RemedialSession.js";
import User from "../models/User.js";
import { sendEmail } from "../utils/emailUtils.js";
import StudentAAT1 from "../models/StudentAAT1.js";

// Create AAT1
export const createAAT1 = async (req, res) => {
  const { courseLink, deadline } = req.body;
  const facultyId = req.user.id;

  try {
    const aat1 = await AAT1.create({ courseLink, deadline, facultyId });
    res.status(201).json(aat1);
  } catch (error) {
    res.status(500).json({ message: "Failed to create AAT1" });
  }
};

export const createAAT2 = async (req, res) => {
    const { title, questions, startTime, endTime, duration } = req.body;
    const facultyId = req.user.id;
  
    try {
      const aat2 = await AAT2.create({ title, questions, startTime, endTime, duration, facultyId });
      res.status(201).json(aat2);
    } catch (error) {
      res.status(500).json({ message: "Failed to create AAT2" });
    }
  };

// Create Remedial Session
export const createRemedialSession = async (req, res) => {
  const { title, description, startTime, endTime, duration, link, students } = req.body;
  const facultyId = req.user.id;

  try {
    const remedialSession = await RemedialSession.create({
      title,
      description,
      startTime,
      endTime,
      duration,
      link,
      facultyId,
      students,
    });

    // Send email notifications to selected students
    const studentEmails = await User.find({ _id: { $in: students } }).select("email");
    studentEmails.forEach((student) => {
      sendEmail(
        student.email,
        "Remedial Session Notification",
        `You have been invited to a remedial session. Title: ${title}, Description: ${description}, Start Time: ${startTime}, End Time: ${endTime}, Duration: ${duration} minutes, Link: ${link}`
      );
    });

    res.status(201).json(remedialSession);
  } catch (error) {
    res.status(500).json({ message: "Failed to create remedial session" });
  }
};

// View Students
export const viewStudents = async (req, res) => {
  try {
    const students = await User.find({ role: "student" }).select("-password");
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch students" });
  }
};

// Get AAT1 submissions
export const getAAT1Submissions = async (req, res) => {
  try {
    const submissions = await StudentAAT1.find()
      .populate('studentId', 'name')
      .populate('aat1Id', 'courseLink')
      .sort({ createdAt: -1 });

    const formattedSubmissions = submissions.map(sub => ({
      _id: sub._id,
      studentName: sub.studentId.name,
      courseTitle: sub.aat1Id.courseLink,
      certificate: sub.certificate,
      grade: sub.grade,
      submittedAt: sub.createdAt
    }));

    res.status(200).json(formattedSubmissions);
  } catch (error) {
    console.error("Error fetching AAT1 submissions:", error);
    res.status(500).json({ message: "Failed to fetch submissions" });
  }
};

// Grade AAT1 submission
export const gradeAAT1Submission = async (req, res) => {
  const { submissionId } = req.params;
  const { grade } = req.body;

  try {
    const submission = await StudentAAT1.findById(submissionId);
    if (!submission) {
      return res.status(404).json({ message: "Submission not found" });
    }

    submission.grade = grade;
    await submission.save();

    res.status(200).json({ message: "Grade updated successfully" });
  } catch (error) {
    console.error("Error updating grade:", error);
    res.status(500).json({ message: "Failed to update grade" });
  }
};