import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Drag1 from "./components/Drag1";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Drag2 from "./components/Drag2";
import ImageUploader from "./components/ImageUploader";
import Drag3 from "./components/Drag3";
import InfiniteScroll from "./components/InfiniteScroll";
import SearchHistory from "./components/SearchHistory";
import SearchHistory2 from "./components/SearchHistory2";
import SearchHistory3 from "./components/SearchHistory3";

const App = () => {
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });

  const handleButtonDrag = (event, { x, y }) => {
    setButtonPosition({ x, y });
  };

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Drag1 />} />
          <Route path="/drag2" element={<Drag2 />} />
          <Route path="/drag3" element={<Drag3 />} />
          <Route path="/imageuploader" element={<ImageUploader />} />
          <Route path="/infinitescroll" element={<InfiniteScroll />} />
          <Route path="/searchhistory" element={<SearchHistory />} />
          <Route path="/searchhistory2" element={<SearchHistory2 />} />
          <Route path="/searchhistory3" element={<SearchHistory3 />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
