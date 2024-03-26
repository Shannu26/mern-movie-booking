import classes from "./Seat.module.css";
import { useState } from "react";

function Seat(props) {
  const [selected, setSelected] = useState(false);
  return (
    <div
      className={`${classes.seat} ${props.selected ? classes.selected : null} ${
        props.booked ? classes.booked : null
      } ${props.hidden ? classes.hidden : null}`}
      onClick={() => {
        props.clicked(props.seat_number);
      }}
    >
      <p>{props.seat_number}</p>
    </div>
  );
}

export default Seat;
