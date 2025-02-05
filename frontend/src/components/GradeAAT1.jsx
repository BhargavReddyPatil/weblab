import React, { useState, useEffect } from "react";
import axios from "axios";

const GradeAAT1 = ({ aat1Id }) => {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchStudents();
  }, [aat1Id]);

  const fetchStudents = async () => {
    try {
      const res = await axios.get(`/api/faculty/aat1/${aat1Id}/results`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setStudents(res.data);
    } catch (error) {
      setError("Failed to fetch students");
      console.error("Error fetching students:", error);
    }
  };

  const handleGradeChange = async (studentId, grade) => {
    try {
      await axios.post(
        "/api/faculty/aat1/grade",
        { aat1Id, studentId, grade },
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );
      alert("Grade updated successfully");
      fetchStudents();
    } catch (error) {
      setError("Failed to update grade");
      console.error("Error updating grade:", error);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Grade AAT1</h2>
      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-md mb-6">
          {error}
        </div>
      )}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full whitespace-nowrap">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Grade
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {students.map((student) => (
                <tr key={student.studentId._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {student.studentId.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {student.studentId.email}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    <input
                      type="text"
                      value={student.grade}
                      onChange={(e) => handleGradeChange(student.studentId._id, e.target.value)}
                      className="w-20 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                    />
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    <button
                      onClick={() => handleGradeChange(student.studentId._id, student.grade)}
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
                    >
                      Save
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default GradeAAT1;