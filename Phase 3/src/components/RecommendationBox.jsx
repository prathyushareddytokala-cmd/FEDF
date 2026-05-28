import React from "react";

const RecommendationBox = ({
  increase
}) => {

  let message = "";

  if(increase <= 7){

    message =
    "Low fare risk. Good time to book.";

  }

  else if(increase <= 12){

    message =
    "Recommended to book soon.";

  }

  else{

    message =
    "High demand detected.";

  }

  return (

    <div className="recommend-box">

      <h4>
        Should I book now?
      </h4>

      <p className="green-text">
        ✅ {message}
      </p>

      <p className="red-text">
        ⚠ Price may increase by
        {" "}
        {increase}%
        within next 24 hours
      </p>

    </div>

  );
};

export default RecommendationBox;