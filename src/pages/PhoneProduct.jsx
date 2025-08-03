import React, { useEffect, useState } from "react";
import ProductCard from "../components/PhoneProductCard";

const Product1 = () => {
  const [phones, setPhones] = useState([]);
  const [filteredPhones, setFilteredPhones] = useState([]);
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("");

  // Fetch phone data from the backend
  const fetchPhones = async () => {
    try {
      const response = await fetch("http://localhost:5000/get/smartphones");
      const data = await response.json();
      setPhones(data);
      setFilteredPhones(data);
      const uniqueBrands = Array.from(new Set(data.map((phone) => phone.brand_name)));
      setBrands(uniqueBrands);
    } catch (error) {
      console.error("Error fetching phones:", error);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchPhones();
  }, []);

  // Handle brand filter
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
    <div className="gadget-display">
      <h1 className="title">Smartphone Details</h1>
      
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

      {/* Products Grid */}
      <div className="gadgets-grid">
        {filteredPhones.map((phone) => (
          <ProductCard key={phone.id} phone={phone} />
        ))}
      </div>
    </div>
  );
};

export default Product1;
