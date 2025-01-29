import { useState, useEffect } from "react";
import NavBar from "../components/navbar";
import Calendar from "../components/calendar";
import { fetchApod } from "../utils/api";

const APOD = () => {
  const [apodData, setApodData] = useState(null);
  const [date, setDate] = useState("");

  useEffect(() => {
    const getApodData = async () => {
      try {
        const data = await fetchApod(date);
        setApodData(data);
      } catch (error) {
        console.error("Error fetching APOD data:", error);
      }
    };
    getApodData();
  }, [date]);

  return (
    <div className="min-h-screen px-4">
      <NavBar></NavBar>
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Astronomy Picture of the Day
        </h1>
        <Calendar date={date} setDate={setDate} />
        {apodData ? (
          <div className="max-w-4xl text-center">
            <h2 className="text-2xl font-semibold mb-2">{apodData.title}</h2>
            {apodData.media_type === "image" ? (
              <img
                src={apodData.url}
                alt={apodData.title}
                className="w-full rounded-lg shadow-lg mb-4"
              />
            ) : (
              <iframe
                src={apodData.url}
                title={apodData.title}
                className="w-full aspect-video rounded-lg shadow-lg mb-4"
                allowFullScreen
              ></iframe>
            )}
            <p className="text-gray-400 text-sm mb-2 font-lao">
              {apodData.date}
            </p>
            <p className="text-lg font-lao max-md:text-sm">
              {apodData.explanation}
            </p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default APOD;
