import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { inviteUser } from "../services/userService";
import "../styles/InviteUser.css";
import Header from "./Header";
import NavBar from "./NavBar";

const InviteUser = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const [darkMode, setDarkMode] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await inviteUser({ email });
      console.log("result:", response);
      setSuccessMessage(response.inviteLink);
      setEmail("");
      setError("");
    } catch (err) {
      setError(err.message || "Something went wrong"); 
    }
  };

  const handleModalClose = () => {
    setSuccessMessage("");
    setError(null);
    navigate("/invite"); 
  };

  return (
    <div className={`${darkMode && "dark-mode"}`}>
    <div className="container">
      <Header handleToggleDarkMode={setDarkMode}/>
      <NavBar />
      <div className="invite-user">
        <h2>Invite User</h2>
        <form onSubmit={handleSubmit}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Send Invitation</button>
        </form>
        {error && <p className="error">{error}</p>}
        {successMessage && (
          <div className="modal">
            <p>Invite Link:</p>
            <p>{successMessage}</p>
            <button onClick={handleModalClose}>OK</button>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default InviteUser;
