import classes from "./SeatSelection.module.css";
import Seat from "./Seat/Seat";

function SeatSelection(props) {
  const movie_name = props.movie_name;
  const movie_theater = props.movie_theater;
  const movie_date = props.movie_date;
  const movie_time = props.movie_time;
  const movie_image = props.movie_image;
  const seat_layout = [];

  // Initialising a dummy seat layout
  for (var row = 0; row < 15; row++) {
    seat_layout.push(15 - row);
  }

  return (
    <div className={classes.seat_selection}>
      <div>
        {seat_layout.map((row) => (
          <Seat key={row} seat_number={row}></Seat>
        ))}
      </div>
      <div>
        {seat_layout.map((row) => (
          <Seat key={row} seat_number={row}></Seat>
        ))}
      </div>
    </div>
  );
}

export default SeatSelection;
