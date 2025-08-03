import React, { useEffect, useState } from "react";
import AudioDeviceProductCard from "../components/AudioProductCard";

const AudioDeviceDisplay = () => {
  const [audioDevices, setAudioDevices] = useState([]); // All audio devices
  const [filteredAudioDevices, setFilteredAudioDevices] = useState([]); // Filtered audio devices based on brand
  const [brands, setBrands] = useState([]); // List of unique audio device brands
  const [selectedBrand, setSelectedBrand] = useState(""); // Currently selected brand for filtering

  // Fetch audio device data from the backend
  const fetchAudioDevices = async () => {
    try {
      const response = await fetch("http://localhost:5000/get/audio"); // Replace with your API endpoint
      const data = await response.json();
      setAudioDevices(data);
      setFilteredAudioDevices(data);

      // Extract unique brands from the data
      const uniqueBrands = Array.from(new Set(data.map((device) => device.brand_name)));
      setBrands(uniqueBrands);
    } catch (error) {
      console.error("Error fetching audio devices:", error);
    }
  };

  // Fetch audio devices when the component mounts
  useEffect(() => {
    fetchAudioDevices();
  }, []);

  // Handle filtering by brand
  const handleFilterByBrand = (brand) => {
    setSelectedBrand(brand);
    if (brand === "All") {
      setFilteredAudioDevices(audioDevices);
    } else {
      const filtered = audioDevices.filter((device) => device.brand_name === brand);
      setFilteredAudioDevices(filtered);
    }
  };

  return (
    <div className="gadget-display">
      <h1 className="title">Audio Variables Details</h1>

      {/* Brand Filter Dropdown */}
      <div className="filter-buttons">
        <select
          value={selectedBrand}
          onChange={(e) => handleFilterByBrand(e.target.value)}
        >
          <option value="All">All Brands</option>
          {brands.map((brand, index) => (
            <option key={index} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>

      {/* Audio Devices Grid */}
      <div className="gadgets-grid">
        {filteredAudioDevices.map((device) => (
          <AudioDeviceProductCard key={device.id} device={device} />
        ))}
      </div>
    </div>
  );
};

export default AudioDeviceDisplay;
