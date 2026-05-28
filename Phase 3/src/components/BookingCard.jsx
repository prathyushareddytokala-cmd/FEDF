import React from "react";

const BookingCard = ({
  booking,
  index,
  bookings,
  setBookings
}) => {

  const cancelBooking = () => {

    const updatedBookings = [...bookings];

    updatedBookings[index].status =
    "Cancelled";

    setBookings(updatedBookings);

    localStorage.setItem(
      "bookings",
      JSON.stringify(updatedBookings)
    );
  };

  return (
    <div className="booking-card">

      <h3>{booking.airline}</h3>
       <p>
  Passenger Name:
  {booking.passengerName || "Guest User"}
</p>
      <p>
        {booking.from} → {booking.to}
      </p>

      <p>
        Passenger Seat: {booking.seat}
      </p>

      <p>
        Boarding Time: {booking.boarding}
      </p>

      <p>
        Arrival Time: {booking.arrival}
      </p>

      <p>
        Status:
        <span className={
          booking.status === "Cancelled"
          ? "cancelled"
          : "booked"
        }>
          {" "}
          {booking.status}
        </span>
      </p>

      {
        booking.status !== "Cancelled" && (
          <button onClick={cancelBooking}>
            Cancel Booking
          </button>
        )
      }

      {
        booking.status === "Cancelled" && (
          <p className="refund-text">
            Refund will be credited within 3 days
          </p>
        )
      }

    </div>
  );
};

export default BookingCard;