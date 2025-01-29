import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/home-page";
import EpicPage from "./pages/epic-page";
import ApodPage from "./pages/apod-page";
import MarsGallery from "./pages/mars-page";
import NotFoundPage from "./pages/404-page";
import ReviewPage from "./pages/review-page";

function App() {
  return (
    <Router>
      <div className="bg-black min-h-screen text-white font-jockey tracking-wide">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/epic" element={<EpicPage />} />
          <Route path="/apod" element={<ApodPage />} />
          <Route path="/marsrover" element={<MarsGallery />} />
          <Route path="/review" element={<ReviewPage />} />
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
