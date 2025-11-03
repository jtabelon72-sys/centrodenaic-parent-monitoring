import React, { useState } from "react";
import "./App.css";

const sampleData = [
  { subject: "Science", type: "Performance Task", title: "Volcano Model", status: "Missing", dueDate: "2025-11-05" },
  { subject: "Science", type: "Quiz", title: "Periodic Table Quiz", status: "Submitted", dueDate: "2025-10-30" },
  { subject: "Science", type: "Activity", title: "Mixtures vs Compounds", status: "Missing", dueDate: "2025-11-02" },
  { subject: "Science", type: "Performance Task", title: "Science Journal", status: "Pending", dueDate: "2025-11-07" },
];

function App() {
  const [search, setSearch] = useState("");

  const filteredData = sampleData.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.type.toLowerCase().includes(search.toLowerCase()) ||
      item.status.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center p-6 font-sans">
      <h1 className="text-3xl font-bold text-blue-900 mb-2">Centro de Naic National High School</h1>
      <p className="text-lg text-gray-600 mb-6">Grade 8 Science – Parent Monitoring Dashboard</p>

      <input
        type="text"
        placeholder="🔍 Search activities..."
        className="w-full max-w-md px-4 py-2 mb-6 border border-blue-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="bg-white rounded-2xl shadow-lg p-4 w-full max-w-4xl">
        <table className="min-w-full table-auto text-sm text-gray-700">
          <thead>
            <tr className="bg-blue-200 text-blue-900">
              <th className="px-4 py-2 text-left">Subject</th>
              <th className="px-4 py-2 text-left">Activity Type</th>
              <th className="px-4 py-2 text-left">Title</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Due Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index} className="border-b hover:bg-blue-50">
                <td className="px-4 py-2">{item.subject}</td>
                <td className="px-4 py-2">{item.type}</td>
                <td className="px-4 py-2">{item.title}</td>
                <td
                  className={`px-4 py-2 font-semibold ${
                    item.status === "Missing"
                      ? "text-red-500"
                      : item.status === "Submitted"
                      ? "text-green-600"
                      : "text-yellow-600"
                  }`}
                >
                  {item.status}
                </td>
                <td className="px-4 py-2">{item.dueDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
