import { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [role, setRole] = useState("student");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { username, agreed, role, password };
    console.log(data);
  };

  return (
    <>
      <h1>Form Data</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Agree
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            // Note: .checked, not .value
          />
        </label>
        <label>
          Role
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="admin">Admin</option>
          </select>
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button>Submit!</button>
      </form>
    </>
  );
}

export default App;
