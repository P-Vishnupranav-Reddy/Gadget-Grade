import React, { useEffect, useState } from "react";
import ProductCard from "../components/PhoneReviewCard";
import Sidebar from "../components/Sidebar";

const ProductReviews = () => {
  const [phones, setPhones] = useState([]);
  const [filteredPhones, setFilteredPhones] = useState([]);
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("All");

  // Fetch phone data from the backend
  const fetchPhones = async () => {
    try {
      const response = await fetch("http://localhost:5000/get/smartphones");
      const data = await response.json();
      setPhones(data);
      setFilteredPhones(data);
      const uniqueBrands = Array.from(new Set(data.map((phone) => phone.brand_name)));
      setBrands(["All", ...uniqueBrands]);
    } catch (error) {
      console.error("Error fetching phones:", error);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchPhones();
  }, []);

  // Handle filtering by brand
  const handleFilterByBrand = (brand) => {
    setSelectedBrand(brand);
    if (brand === "All") { 
      setFilteredPhones(phones);
    } else {
      const filtered = phones.filter((phone) => phone.brand_name === brand);
      setFilteredPhones(filtered);
    }
  };

  return (
    <div className="product-reviews">
      <div className="app-container">
      <Sidebar /></div>
      <h1 className="title">Smartphones-Reviews</h1>
      
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
        {filteredPhones.map((phone) => (
          <ProductCard key={phone.id} phone={phone} />
        ))}
      </div>
    </div>
  );
};

export default ProductReviews;
