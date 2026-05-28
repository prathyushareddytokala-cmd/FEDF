import React from "react";

import RecommendationBox from "./RecommendationBox";

const FlightCard = ({
  flight,
  bookings,
  setBookings
}) => {

  const handleBooking = () => {

    const updatedBookings = [

      ...bookings,

      {
  ...flight,
  passengerName:
    localStorage.getItem("user"),
  status: "Booked"
}

    ];

    setBookings(updatedBookings);

    localStorage.setItem(
      "bookings",
      JSON.stringify(updatedBookings)
    );

    alert("Flight Booked Successfully");

  };

  return (

    <div className="flight-card">

      <h3>{flight.airline}</h3>

      <p>
        {flight.from} → {flight.to}
      </p>

      <p>
        Departure: {flight.departure}
      </p>

      <p>
        Arrival: {flight.arrival}
      </p>

      <p>
        Boarding: {flight.boarding}
      </p>

      <p>
        Seat: {flight.seat}
      </p>

      <p>
        Gate: {flight.gate}
      </p>

      <h2>
        ₹ {flight.price}
      </h2>

      <RecommendationBox
        increase={flight.increase}
      />

      <button onClick={handleBooking}>
        Book Now
      </button>

    </div>

  );
};

export default FlightCard;