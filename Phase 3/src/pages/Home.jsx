import React from "react";

import Hero from "../components/Hero";

import FlightSearch from "../components/FlightSearch";

import BookingCard from "../components/BookingCard";

const Home = ({
  openLogin,
  user,
  bookings,
  setBookings
}) => {

  return (

    <div>

      <Hero openLogin={openLogin} />

      {
        user && (

          <FlightSearch
            bookings={bookings}
            setBookings={setBookings}
          />

        )
      }

      {
        user && bookings.length > 0 && (

          <div className="booking-section">

            <h2>Your Bookings</h2>

            {
              bookings.map((booking,index) => (

                <BookingCard
                  key={index}
                  booking={booking}
                  index={index}
                  bookings={bookings}
                  setBookings={setBookings}
                />

              ))
            }

          </div>

        )
      }

    </div>

  );
};

export default Home;