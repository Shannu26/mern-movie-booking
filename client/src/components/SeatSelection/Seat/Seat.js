import classes from "./Seat.module.css";
import { useState } from "react";

function Seat(props) {
  const [selected, setSelected] = useState(false);
  return (
    <div
      className={`${classes.seat} ${selected ? classes.selected : null}`}
      onClick={() => setSelected((selected) => !selected)}
    >
      <p>{props.seat_number}</p>
    </div>
  );
}

export default Seat;
