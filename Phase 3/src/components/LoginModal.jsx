import React, { useState } from "react";

const LoginModal = ({ setUser, closeModal }) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {

    if(username && password){

      localStorage.setItem(
        "user",
        username
      );

      setUser(username);

      closeModal();

    } else {
      alert("Please enter username and password");
    }
  };

  return (
    <div className="modal-overlay">

      <div className="login-modal">

        <h2>Login</h2>

        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button onClick={handleLogin}>
          Login
        </button>

      </div>

    </div>
  );
};

export default LoginModal;