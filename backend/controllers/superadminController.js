import { parseExcel } from "../utils/excelUtils.js"; // Update this line
import WhitelistEmail from "../models/WhitelistEmail.js";
import User from "../models/User.js";


export const getAllUsers = async (req, res) => {
    try {
      const users = await User.find().select("-password");
      res.status(200).json(users);
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ message: "Failed to fetch users" });
    }
  };

// Edit user role
export const editUserRole = async (req, res) => {
  const { userId } = req.params;
  const { role } = req.body;

  try {
    const user = await User.findByIdAndUpdate(userId, { role }, { new: true }).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error("Error updating user role:", error);
    res.status(500).json({ message: "Failed to update user role" });
  }
};

// Delete user
export const deleteUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: "Failed to delete user" });
  }
};

// Whitelist email (manual)
export const whitelistEmail = async (req, res) => {
    const { email } = req.body;
  
    try {
      const whitelistedEmail = await WhitelistEmail.create({ email });
      res.status(201).json(whitelistedEmail);
    } catch (error) {
      console.error("Error whitelisting email:", error);
      res.status(500).json({ message: "Failed to whitelist email" });
    }
  };
  
  // Whitelist emails (bulk upload)
  export const whitelistEmailsBulk = async (req, res) => {
    try {
      const emails = await parseExcel(req.file.buffer);
      const whitelistedEmails = await WhitelistEmail.insertMany(emails.map((email) => ({ email })));
      res.status(201).json(whitelistedEmails);
    } catch (error) {
      console.error("Error bulk whitelisting emails:", error);
      res.status(500).json({ message: "Failed to bulk whitelist emails" });
    }
  };