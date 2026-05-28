import React from "react";

const Hero = ({ openLogin }) => {
  return (
    <section className="hero">
      <h1>
        Smart Travel <span>Starts Here</span>
      </h1>

      <p>
        Book flights smarter with AI fare prediction,
        real-time prices, and instant booking.
      </p>

      <button onClick={openLogin}>
        Get Started
      </button>
    </section>
  );
};

export default Hero;