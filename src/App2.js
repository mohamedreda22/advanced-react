import "./App.css";
import { useState } from "react";
import { validateEmail } from "./utils";

const PasswordErrorMessage = (e) => {
    // check for empty fields and invalid emails

    if (!validateEmail(e.email)) {
        throw new Error("Please enter a valid email address");
    }
        
  if (e.password.length < 8) {
    return "Password should have at least 8 characters";
  }
  if (/\s/.test(e.password)) {
    return "Password should not contain spaces";
  }
    return "";

};

const passwordValidation = (password) => {
    const errorMessage =PasswordErrorMessage({email: '', password});
    if (errorMessage) {
        alert(`${errorMessage}`);
        }
    }

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 
  const [role, setRole] = useState("role");

  const getIsFormValid = () => {
    return (
      firstName &&
      validateEmail(email) &&
      password.length >= 8 &&
      role !== "role"
    );

  };

  const clearForm = () => {
    setEmail("");
    setFirstName("");
    setLastName("");
    setPassword({
      value: "",
      isTouched: false,
    })
    setRole("role");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(getIsFormValid());
    alert("Account created!");

    clearForm();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>
          <div className="Field">
            <label>
              First name <sup>*</sup>
            </label>
            <input
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="Field">
            <label>Last name</label>
            <input
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="Field">
            <label>
              Email address <sup>*</sup>
            </label>
            <input
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="Field">
            <label>
              Password <sup>*</sup>
            </label>
            <input
              type="password"
              placeholder="Password"
              value={password.value}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={(e) => passwordValidation(e.target.value)}

            />
          </div>
          <div className="Field">
            <label>
              Role <sup>*</sup>
            </label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button type="submit" disabled={!getIsFormValid()}>
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;