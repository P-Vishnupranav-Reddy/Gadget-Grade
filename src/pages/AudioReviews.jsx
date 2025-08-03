import React, { useEffect, useState } from "react";
import AudioCard from "../components/AudioReviewCard";  // Assuming AudioCard is the component for displaying audio products
import Sidebar from "../components/Sidebar";

const AudioReviews = () => {
  const [audioDevices, setAudioDevices] = useState([]);
  const [filteredAudioDevices, setFilteredAudioDevices] = useState([]);
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("All");

  // Fetch audio data from the backend
  const fetchAudioDevices = async () => {
    try {
      const response = await fetch("http://localhost:5000/get/audio");
      const data = await response.json();
      setAudioDevices(data);
      setFilteredAudioDevices(data);
      const uniqueBrands = Array.from(new Set(data.map((audio) => audio.brand_name)));
      setBrands(["All", ...uniqueBrands]);
    } catch (error) {
      console.error("Error fetching audio devices:", error);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchAudioDevices();
  }, []);

  // Handle filtering by brand
  const handleFilterByBrand = (brand) => {
    setSelectedBrand(brand);
    if (brand === "All") { 
      setFilteredAudioDevices(audioDevices);
    } else {
      const filtered = audioDevices.filter((audio) => audio.brand_name === brand);
      setFilteredAudioDevices(filtered);
    }
  };

  return (
    <div className="product-reviews">
      <div className="app-container">
        <Sidebar />
      </div>
      <h1 className="title">Audio Reviews</h1>

      {/* Filter Dropdown */}
      <div className="filter-buttons">
        <select
          value={selectedBrand}
          onChange={(e) => handleFilterByBrand(e.target.value)}
        >
          {brands.map((brand, index) => (
            <option key={index} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>

      {/* Products Grid */}
      <div className="products-grid">
        {filteredAudioDevices.map((audio) => (
          <AudioCard key={audio.id} audio={audio} />
        ))}
      </div>
    </div>
  );
};

export default AudioReviews;
