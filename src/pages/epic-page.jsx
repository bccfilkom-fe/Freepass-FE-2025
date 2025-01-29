import { useState, useEffect } from "react";
import { fetchEpicImages } from "../utils/api";
import Navbar from "../components/navbar";
import Calendar from "../components/calendar";
import "../index.css";

export default function EpicPage() {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [date, setDate] = useState("");

  useEffect(() => {
    if (!date) return;

    const loadImages = async () => {
      try {
        const data = await fetchEpicImages(date);
        const formattedImages = data.map((img) => ({
          url: `https://epic.gsfc.nasa.gov/archive/natural/${date.replace(
            /-/g,
            "/"
          )}/jpg/${img.image}.jpg`,
          caption: img.date,
        }));

        formattedImages.forEach((img) => {
          const imgLoader = new Image();
          imgLoader.src = img.url;
        });

        setImages(formattedImages);
        setCurrentImageIndex(0);
      } catch (error) {
        console.error("Failed to fetch EPIC images:", error);
      }
    };

    loadImages();
  }, [date]);

  const handleSliderChange = (e) => {
    setCurrentImageIndex(parseInt(e.target.value, 10));
  };

  return (
    <div className="h-screen px-4">
      <Navbar></Navbar>
      <h1 className="text-3xl font-bold text-center mb-8">
        NASA EPIC Image Viewer
      </h1>
      <div className="flex items-center justify-center mb-6">
        <Calendar date={date} setDate={setDate} />
      </div>

      {images.length > 0 && (
        <>
          <div className="text-center space-y-4">
            <img
              src={images[currentImageIndex].url}
              alt="EPIC"
              className="w-full max-w-[600px] max-h-[400px] mx-auto rounded-lg shadow-lg object-contain selector"
            />
            <p className="text-center text-sm text-gray-500">
              {images[currentImageIndex].caption}
            </p>
            <input
              type="range"
              min="0"
              max={images.length - 1}
              value={currentImageIndex}
              onChange={handleSliderChange}
              className="w-2/3"
            />
          </div>
        </>
      )}

      {images.length === 0 && date && (
        <p className="text-center text-gray-400">
          No images available for the selected date.
        </p>
      )}
    </div>
  );
}
