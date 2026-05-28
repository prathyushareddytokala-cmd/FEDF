import React, { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import LoginModal from "./components/LoginModal";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {

  const [currentPage, setCurrentPage] =
  useState("home");

  const [showLogin, setShowLogin] =
  useState(false);

  const [user, setUser] =
  useState("");

  const [bookings, setBookings] =
  useState([]);

  useEffect(() => {

    const savedUser =
    localStorage.getItem("user");

    const savedBookings =
    JSON.parse(
      localStorage.getItem("bookings")
    ) || [];

    if(savedUser){
      setUser(savedUser);
    }

    setBookings(savedBookings);

  }, []);

  return (

    <div>

      <Navbar
  user={user}
  setCurrentPage={setCurrentPage}
  setUser={setUser}
/>

      {
        currentPage === "home" && (

          <Home
            openLogin={() =>
              setShowLogin(true)
            }

            user={user}

            bookings={bookings}

            setBookings={setBookings}
          />

        )
      }

      {
        currentPage === "about" &&
        <About />
      }

      {
        currentPage === "contact" &&
        <Contact />
      }

      {
        showLogin && (

          <LoginModal
            setUser={setUser}

            closeModal={() =>
              setShowLogin(false)
            }
          />

        )
      }

    </div>

  );
};

export default App;