import React, { useEffect, useState } from "react";
import LaptopProductCard from "../components/LaptopProductCard";

const LaptopDisplay = () => {
  const [laptops, setLaptops] = useState([]); // All laptops
  const [filteredLaptops, setFilteredLaptops] = useState([]); // Filtered laptops based on brand
  const [brands, setBrands] = useState([]); // List of unique laptop brands
  const [selectedBrand, setSelectedBrand] = useState(""); // Currently selected brand for filtering

  // Fetch laptop data from the backend
  const fetchLaptops = async () => {
    try {
      const response = await fetch("http://localhost:5000/get/laptops"); // Replace with your API endpoint
      const data = await response.json();
      setLaptops(data);
      setFilteredLaptops(data);

      // Extract unique brands from the data
      const uniqueBrands = Array.from(new Set(data.map((laptop) => laptop.brand_name)));
      setBrands(uniqueBrands);
    } catch (error) {
      console.error("Error fetching laptops:", error);
    }
  };

  // Fetch laptops when the component mounts
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
    <div className="gadget-display">
      <h1 className="title">Laptop Details</h1>

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

      {/* Laptops Grid */}
      <div className="gadgets-grid">
        {filteredLaptops.map((laptop) => (
          <LaptopProductCard key={laptop.id} laptop={laptop} />
        ))}
      </div>
    </div>
  );
};

export default LaptopDisplay;
