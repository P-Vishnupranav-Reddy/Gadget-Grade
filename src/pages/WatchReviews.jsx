import React, { useEffect, useState } from "react";
import WatchCard from "../components/WatchReviewCard"; // Assuming the watchReviewCard component is similar to PhoneReviewCard
import Sidebar from "../components/Sidebar";

const WatchReviews = () => {
  const [watches, setwatches] = useState([]);
  const [filteredwatches, setFilteredwatches] = useState([]);
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("All");

  // Fetch watch data from the backend
  const fetchwatches = async () => {
    try {
      const response = await fetch("http://localhost:5000/get/smartwatches");
      const data = await response.json();
      setwatches(data);
      setFilteredwatches(data);
      const uniqueBrands = Array.from(new Set(data.map((watch) => watch.brand_name)));
      setBrands(["All", ...uniqueBrands]);
    } catch (error) {
      console.error("Error fetching watches:", error);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchwatches();
  }, []);

  // Handle filtering by brand
  const handleFilterByBrand = (brand) => {
    setSelectedBrand(brand);
    if (brand === "All") {
      setFilteredwatches(watches);
    } else {
      const filtered = watches.filter((watch) => watch.brand_name === brand);
      setFilteredwatches(filtered);
    }
  };

  return (
    <div className="product-reviews">
      <div className="app-container">
        <Sidebar />
      </div>
      <h1 className="title">watch Reviews</h1>
      
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
        {filteredwatches.map((watch) => (
          <WatchCard key={watch.id} watch={watch} />
        ))}
      </div>
    </div>
  );
};

export default WatchReviews;
