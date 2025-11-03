import { useState } from "react";

function App() {
  const [students, setStudents] = useState([
    { name: "Juan Dela Cruz", status: "Present" },
    { name: "Maria Santos", status: "Absent" },
    { name: "Pedro Reyes", status: "Late" },
  ]);

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>Centro De Naic Parent Monitoring</h1>
      <h2>Attendance Dashboard</h2>
      <table border="1" cellPadding="10" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s, index) => (
            <tr key={index}>
              <td>{s.name}</td>
              <td>{s.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
