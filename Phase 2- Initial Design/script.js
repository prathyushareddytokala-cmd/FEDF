// script.js


/* =========================
   AIR ANALYTICS PROJECT
========================= */


/* -----------------------------
   VIRTUAL DOM DATA
----------------------------- */

let virtualFlights = [

  {
    id:1,
    airline:"Delta Airlines",
    from:"New York",
    to:"Los Angeles",
    time:"06:00 AM",
    price:315
  },

  {
    id:2,
    airline:"United Airlines",
    from:"New York",
    to:"Los Angeles",
    time:"08:30 AM",
    price:296
  },

  {
    id:3,
    airline:"American Airlines",
    from:"New York",
    to:"Los Angeles",
    time:"10:45 AM",
    price:280
  }

];


/* -----------------------------
   DOM ELEMENTS
----------------------------- */

const flightContainer =
document.getElementById("flightContainer");

const bookingContainer =
document.getElementById("bookingContainer");

const openLogin =
document.getElementById("openLogin");

const loginModal =
document.getElementById("loginModal");

const loginBtn =
document.getElementById("loginBtn");

const usernameText =
document.getElementById("usernameText");

const logoutBtn =
document.getElementById("logoutBtn");


/* -----------------------------
   OPEN LOGIN MODAL
----------------------------- */

openLogin.addEventListener("click", () => {

  loginModal.classList.remove("hidden");

});


/* -----------------------------
   LOGIN SYSTEM
----------------------------- */

loginBtn.addEventListener("click", () => {

  const username =
  document.getElementById("username").value;

  const password =
  document.getElementById("password").value;

  if(username && password){

    localStorage.setItem(

      "airUser",

      JSON.stringify({
        username,
        password
      })

    );

    usernameText.innerText =
    username;

    document.getElementById("loginMessage")
    .innerText =
    "Login Successful";

    setTimeout(() => {

      loginModal.classList.add("hidden");

    },1000);

  }

  else{

    alert("Please Enter Credentials");

  }

});


/* -----------------------------
   LOAD USER
----------------------------- */

function loadUser(){

  const savedUser =
  JSON.parse(localStorage.getItem("airUser"));

  if(savedUser){

    usernameText.innerText =
    savedUser.username;

  }

}

loadUser();


/* -----------------------------
   RENDER FLIGHTS
----------------------------- */

function renderFlights(){

  flightContainer.innerHTML = "";

  virtualFlights.forEach(flight => {

    const card =
    document.createElement("div");

    card.className = "flight-card";

    card.innerHTML = `

      <div class="flight-info">

        <h3>${flight.airline}</h3>

        <p>
          ${flight.from}
          →
          ${flight.to}
        </p>

        <p>
          ${flight.time}
        </p>

      </div>

      <div class="price-box">

        <div class="price">
          $${flight.price}
        </div>

        <button
          class="book-btn"
          onclick="bookFlight(${flight.id})"
        >
          Book Flight
        </button>

      </div>

    `;

    flightContainer.appendChild(card);

  });

}

renderFlights();


/* -----------------------------
   BOOK FLIGHT
----------------------------- */

function bookFlight(id){

  const flight =
  virtualFlights.find(
    flight => flight.id === id
  );

  let bookings =
  JSON.parse(localStorage.getItem("bookings"))
  || [];

  bookings.push(flight);

  localStorage.setItem(
    "bookings",
    JSON.stringify(bookings)
  );

  loadBookings();

  alert("Flight Booked Successfully");

}


/* -----------------------------
   LOAD BOOKINGS
----------------------------- */

function loadBookings(){

  bookingContainer.innerHTML = "";

  let bookings =
  JSON.parse(localStorage.getItem("bookings"))
  || [];

  if(bookings.length === 0){

    bookingContainer.innerHTML = `
      <p>No Bookings Available</p>
    `;

    return;
  }

  bookings.forEach((booking,index) => {

    const bookingCard =
    document.createElement("div");

    bookingCard.className =
    "booking-card";

    bookingCard.innerHTML = `

      <h3>${booking.airline}</h3>

      <p>
        ${booking.from}
        →
        ${booking.to}
      </p>

      <p>
        ${booking.time}
      </p>

      <p>
        Price:
        $${booking.price}
      </p>

      <button
        class="delete-btn"
        onclick="deleteBooking(${index})"
      >
        Delete Booking
      </button>

    `;

    bookingContainer.appendChild(
      bookingCard
    );

  });

}

loadBookings();


/* -----------------------------
   DELETE BOOKING
----------------------------- */

function deleteBooking(index){

  let bookings =
  JSON.parse(localStorage.getItem("bookings"))
  || [];

  bookings.splice(index,1);

  localStorage.setItem(
    "bookings",
    JSON.stringify(bookings)
  );

  loadBookings();

  alert("Booking Deleted");

}


/* -----------------------------
   LOGOUT
----------------------------- */

logoutBtn.addEventListener("click", () => {

  localStorage.removeItem("airUser");

  usernameText.innerText =
  "Guest";

  alert("Logged Out");

});


/* -----------------------------
   PAGE NAVIGATION
----------------------------- */

function showPage(page){

  document.getElementById("dashboardPage")
  .classList.add("hidden-page");

  document.getElementById("aboutPage")
  .classList.add("hidden-page");

  document.getElementById("contactPage")
  .classList.add("hidden-page");


  if(page === "dashboard"){

    document.getElementById("dashboardPage")
    .classList.remove("hidden-page");

  }

  else if(page === "about"){

    document.getElementById("aboutPage")
    .classList.remove("hidden-page");

  }

  else if(page === "contact"){

    document.getElementById("contactPage")
    .classList.remove("hidden-page");

  }

}