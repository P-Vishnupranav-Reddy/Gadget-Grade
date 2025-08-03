import React, { useEffect, useState } from "react";
import LaptopCard from "../components/LaptopReviewCard"; // Assuming the LaptopReviewCard component is similar to PhoneReviewCard
import Sidebar from "../components/Sidebar";

const LaptopReviews = () => {
  const [laptops, setLaptops] = useState([]);
  const [filteredLaptops, setFilteredLaptops] = useState([]);
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("All");

  // Fetch laptop data from the backend
  const fetchLaptops = async () => {
    try {
      const response = await fetch("http://localhost:5000/get/laptops");
      const data = await response.json();
      setLaptops(data);
      setFilteredLaptops(data);
      const uniqueBrands = Array.from(new Set(data.map((laptop) => laptop.brand_name)));
      setBrands(["All", ...uniqueBrands]);
    } catch (error) {
      console.error("Error fetching laptops:", error);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchLaptops();
  }, []);

  // Handle filtering by brand
  const handleFilterByBrand = (brand) => {
    setSelectedBrand(brand);
    if (brand === "All") {
      setFilteredLaptops(laptops);
    } else {
      const filtered = laptops.filter((laptop) => laptop.brand_name === brand);
      setFilteredLaptops(filtered);
    }
  };

  return (
    <div className="product-reviews">
      <div className="app-container">
        <Sidebar />
      </div>
      <h1 className="title">Laptop Reviews</h1>
      
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
        {filteredLaptops.map((laptop) => (
          <LaptopCard key={laptop.id} laptop={laptop} />
        ))}
      </div>
    </div>
  );
};

export default LaptopReviews;
