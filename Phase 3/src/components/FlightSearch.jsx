import React, { useState } from "react";

import flights from "../data/flights";

import FlightCard from "./FlightCard";

const FlightSearch = ({
  bookings,
  setBookings
}) => {

  const [from, setFrom] =
  useState("");

  const [to, setTo] =
  useState("");

  const filteredFlights =
  flights.filter(

    (flight) =>

      flight.from
      .toLowerCase()
      .includes(from.toLowerCase())

      &&

      flight.to
      .toLowerCase()
      .includes(to.toLowerCase())

  );

  return (

    <div className="search-section">

      <h2>Search Flights</h2>

      <div className="search-box">

        <input
          type="text"
          placeholder="From"
          value={from}
          onChange={(e) =>
            setFrom(e.target.value)
          }
        />

        <input
          type="text"
          placeholder="To"
          value={to}
          onChange={(e) =>
            setTo(e.target.value)
          }
        />

      </div>

      <div className="flight-list">

        {
          filteredFlights.map((flight) => (

            <FlightCard
              key={flight.id}
              flight={flight}
              bookings={bookings}
              setBookings={setBookings}
            />

          ))
        }

      </div>

    </div>

  );
};

export default FlightSearch;