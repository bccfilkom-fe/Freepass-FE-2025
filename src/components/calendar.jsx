import PropTypes from "prop-types";

const Calendar = ({ date, setDate, className = "" }) => {
  const minDate = new Date("2015-06-13").toISOString().split("T")[0];
  const maxDate = new Date().toISOString().split("T")[0];
  return (
    <input
      type="date"
      min={minDate}
      max={maxDate}
      className={`mb-4 p-2 bg-white text-black rounded-full ${className}`}
      value={date}
      onChange={(e) => setDate(e.target.value)}
    />
  );
};

Calendar.propTypes = {
  date: PropTypes.string.isRequired,
  setDate: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Calendar;
