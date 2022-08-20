import React from "react";
import "../../styles/Seat.css";

const Seat = (props) => {
  const { seatStatus } = props;

  return <div className={`seat ${seatStatus}`} />;
};

export default Seat;
