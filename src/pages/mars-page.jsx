import { useState, useEffect } from "react";
import { fetchMarsRoverPhotos } from "../utils/api";
import Navbar from "../components/navbar";
import Card from "../components/card";

const MarsGallery = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [rover, setRover] = useState("curiosity");
  const [sol, setSol] = useState();

  const fetchPhotos = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchMarsRoverPhotos(rover, sol);
      setPhotos(data.photos);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, [rover, sol]);

  return (
    <div className="min-h-screen px-4">
      <Navbar></Navbar>
      <h1 className="text-3xl font-bold text-center mb-8">
        Mars Rover Gallery
      </h1>

      <div className="flex justify-center items-center mb-6 space-x-4">
        <select
          className="border text-black rounded px-4 py-2"
          value={rover}
          onChange={(e) => setRover(e.target.value)}
        >
          <option value="curiosity">Curiosity</option>
          <option value="opportunity">Opportunity</option>
          <option value="spirit">Spirit</option>
        </select>
        <input
          type="number"
          className="border rounded px-4 text-black"
          value={sol}
          onChange={(e) => setSol(e.target.value)}
          placeholder="Enter Sol"
        />
      </div>

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo) => (
          <Card key={photo.id} photo={photo} />
        ))}
      </div>

      {!loading && photos.length === 0 && !error && (
        <p className="text-center mt-6">
          No photos available for the selected rover and sol.
        </p>
      )}
    </div>
  );
};

export default MarsGallery;
