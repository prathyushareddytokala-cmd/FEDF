import React from "react";

const About = () => {

  return (
    <div className="page-container">

      <div className="about-section">

        <h1>About SkyLens</h1>

        <p>
          SkyLens is an intelligent airline
          booking platform designed to help
          travelers find the best flights
          with smart AI recommendations.
        </p>

        <div className="about-grid">

          <div className="about-card">

            <h3>AI Fare Prediction</h3>

            <p>
              Our system predicts possible
              fare increases and helps users
              book at the right time.
            </p>

          </div>

          <div className="about-card">

            <h3>Real-Time Pricing</h3>

            <p>
              Compare live airline prices
              and choose the best deals
              instantly.
            </p>

          </div>

          <div className="about-card">

            <h3>Secure Booking</h3>

            <p>
              Safe and fast booking system
              with easy cancellation and
              refund tracking.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default About;