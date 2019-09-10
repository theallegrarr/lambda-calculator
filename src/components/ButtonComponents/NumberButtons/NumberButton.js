import React from "react";
import "../../../App.css";

const NumberButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */
        <button className="number-btn">{props.name}</button>
      }
    </>
  );
};

export default NumberButton;