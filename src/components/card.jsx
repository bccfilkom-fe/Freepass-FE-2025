import PropTypes from "prop-types";

const Card = ({ photo }) => {
  return (
    <div key={photo.id} className="border rounded shadow">
      <img
        src={photo.img_src}
        alt={`Mars Rover - ${photo.rover.name}`}
        className="w-full h-48 object-cover"
      />
      <div className="p-2">
        <p className="text-sm font-bold">Rover: {photo.rover.name}</p>
        <p className="text-sm">Camera: {photo.camera.full_name}</p>
        <p className="text-sm">Date: {photo.earth_date}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  photo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    img_src: PropTypes.string.isRequired,
    rover: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    camera: PropTypes.shape({
      full_name: PropTypes.string.isRequired,
    }).isRequired,
    earth_date: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
