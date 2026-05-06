import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    username: "",
    agreed: false,
    role: "student",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    const checkUsername = formData.username.trim();
    const checkPassword = formData.password.trim();
    const checkAgreed = formData.agreed === true;

    if (checkUsername.length === 0) {
      newErrors.username = "Username can't be empty";
    }

    if (checkPassword.length === 0) {
      newErrors.password = "Password can't be empty";
    }

    if (!checkAgreed) {
      newErrors.agreed = "Must agree";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    let newValue = value;

    if (type === "checkbox") {
      newValue = checked;
    }

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setFormData({
        username: "",
        agreed: false,
        role: "student",
        password: "",
      });
      setSubmitted(true);
      return;
    }

    setSubmitted(false);
  };

  return (
    <>
      {" "}
      <h1>Form Data</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input
            name="username"
            type="text"
            value={formData.username}
            onChange={handleChange}
          />
        </label>
        {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
        <label>
          Agree
          <input
            name="agreed"
            type="checkbox"
            checked={formData.agreed}
            onChange={handleChange}
            // Note: .checked, not .value
          />
        </label>
        {errors.agreed && <p style={{ color: "red" }}>{errors.agreed}</p>}
        <label>
          Role
          <select name="role" value={formData.role} onChange={handleChange}>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="admin">Admin</option>
          </select>
        </label>
        <label>
          Password
          <input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        <button>Submit!</button>
      </form>
      {submitted && <p>Submitted!</p>}
    </>
  );
}

export default App;
