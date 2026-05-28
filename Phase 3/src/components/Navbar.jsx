import React from "react";

const Navbar = ({
  user,
  setCurrentPage,
  setUser
}) => {

  const handleLogout = () => {

    localStorage.removeItem("user");

    setUser("");

  };

  return (

    <nav className="navbar">

      <div className="logo">
        ✈ SkyLens
      </div>

      <ul className="nav-links">

        <li
          onClick={() =>
            setCurrentPage("home")
          }
        >
          Home
        </li>

        <li
          onClick={() =>
            setCurrentPage("about")
          }
        >
          About
        </li>

        <li
          onClick={() =>
            setCurrentPage("contact")
          }
        >
          Contact
        </li>

      </ul>

      <div className="user-section">

        {
          user
          ? (
            <div className="user-box">

              <span>
                Welcome, {user}
              </span>

              <button
                onClick={handleLogout}
                className="logout-btn"
              >
                Logout
              </button>

            </div>
          )

          : "Guest"
        }

      </div>

    </nav>

  );
};

export default Navbar;