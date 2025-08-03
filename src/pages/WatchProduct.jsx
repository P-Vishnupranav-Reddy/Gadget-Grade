import React, { useEffect, useState } from "react";
import SmartwatchProductCard from "../components/WatchProductCard";

const SmartwatchDisplay = () => {
  const [smartwatches, setSmartwatches] = useState([]); // All smartwatches
  const [filteredSmartwatches, setFilteredSmartwatches] = useState([]); // Filtered smartwatches based on brand
  const [brands, setBrands] = useState([]); // List of unique smartwatch brands
  const [selectedBrand, setSelectedBrand] = useState(""); // Currently selected brand for filtering

  // Fetch smartwatch data from the backend
  const fetchSmartwatches = async () => {
    try {
      const response = await fetch("http://localhost:5000/get/smartwatches"); // Replace with your API endpoint
      const data = await response.json();
      setSmartwatches(data);
      setFilteredSmartwatches(data);

      // Extract unique brands from the data
      const uniqueBrands = Array.from(new Set(data.map((watch) => watch.brand_name)));
      setBrands(uniqueBrands);
    } catch (error) {
      console.error("Error fetching smartwatches:", error);
    }
  };

  // Fetch smartwatches when the component mounts
  useEffect(() => {
    fetchSmartwatches();
  }, []);

  // Handle filtering by brand
  const handleFilterByBrand = (brand) => {
    setSelectedBrand(brand);
    if (brand === "All") {
      setFilteredSmartwatches(smartwatches);
    } else {
      const filtered = smartwatches.filter((watch) => watch.brand_name === brand);
      setFilteredSmartwatches(filtered);
    }
  };

  return (
    <div className="gadget-display">
      <h1 className="title">Smartwatches Details</h1>

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

      {/* Smartwatches Grid */}
      <div className="gadgets-grid">
        {filteredSmartwatches.map((watch) => (
          <SmartwatchProductCard key={watch.id} watch={watch} />
        ))}
      </div>
    </div>
  );
};

export default SmartwatchDisplay;
