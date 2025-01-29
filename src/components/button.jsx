import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Button = ({ to, onClick, children, className = "" }) => {
  if (to) {
    return (
      <Link
        to={to}
        className={`py-3 px-16 bg-white hover:bg-black hover:text-white text-black hover:border rounded-full font-jockey text-lg ${className}`}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      onClick={onClick}
      className={`py-3 px-16 bg-white hover:bg-black hover:text-white text-black hover:border rounded-full font-jockey text-lg ${className}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  to: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Button;
