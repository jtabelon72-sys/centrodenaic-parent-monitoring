import { useState } from "react";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");

  const data = [
    { subject: "Science 8", type: "Performance Task", title: "Investigatory Project", status: "Pending", due: "Nov 5" },
    { subject: "Math 8", type: "Quiz", title: "Linear Equations", status: "Submitted", due: "Nov 4" },
    { subject: "English 8", type: "Essay", title: "My Dream Future", status: "Missing", due: "Nov 3" },
  ];

  const filtered = data.filter((item) =>
    item.subject.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app-container">
      <h1>Centro de Naic National High School</h1>
      <h2>Grade 8 Science Dashboard</h2>

      <input
        type="text"
        placeholder="Search subject..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Activity Type</th>
            <th>Title</th>
            <th>Status</th>
            <th>Due Date</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((item, i) => (
            <tr key={i}>
              <td>{item.subject}</td>
              <td>{item.type}</td>
              <td>{item.title}</td>
              <td>{item.status}</td>
              <td>{item.due}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;