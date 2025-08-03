import React, { useState, useEffect } from 'react';
import Sidebar2 from '../components/Sidebar2';

const CompareLaptopsPage = () => {
  const [laptops, setLaptops] = useState([]); // Store the list of laptops
  const [selectedLaptop1, setSelectedLaptop1] = useState(null); // ID of the first selected laptop
  const [selectedLaptop2, setSelectedLaptop2] = useState(null); // ID of the second selected laptop
  const [laptop1Details, setLaptop1Details] = useState(null); // Details of the first laptop
  const [laptop2Details, setLaptop2Details] = useState(null); // Details of the second laptop

  // Fetch laptops from the backend
  useEffect(() => {
    const fetchLaptops = async () => {
      try {
        const response = await fetch('http://localhost:5000/get/laptops'); // Replace with your API endpoint
        const data = await response.json();
        setLaptops(data || []); // Ensure the data is stored properly
      } catch (error) {
        console.error('Error fetching laptops:', error);
      }
    };

    fetchLaptops();
  }, []);

  // Handle selection changes
  const handleSelectLaptop1 = (id) => {
    const laptop = laptops.find((laptop) => laptop.id === parseInt(id)); // Find laptop by ID
    setSelectedLaptop1(id);
    setLaptop1Details(laptop);
  };

  const handleSelectLaptop2 = (id) => {
    const laptop = laptops.find((laptop) => laptop.id === parseInt(id)); // Find laptop by ID
    setSelectedLaptop2(id);
    setLaptop2Details(laptop);
  };

  return (
    <div className="compare-page">
      <div className="app-container">
        <Sidebar2 />
      </div>
      <h1 className="title">Compare Laptops</h1>
      <div className="compare-container">
        {/* Column 1: Laptop 1 */}
        <div className="compare-column">
          <h2>Select Laptop 1</h2>
          <select
            value={selectedLaptop1 || ''}
            onChange={(e) => handleSelectLaptop1(e.target.value)}
          >
            <option value="">Select a laptop</option>
            {laptops.map((laptop) => (
              <option key={laptop.id} value={laptop.id}>
                {laptop.model_name}
              </option>
            ))}
          </select>

          {laptop1Details && (
            <div className="compare-details">
              <h4>{laptop1Details.brand_name} {laptop1Details.model_name}</h4>
              <img
                src={laptop1Details.image_url}
                alt={laptop1Details.model_name}
                style={{ width: '200px', height: 'auto' }}
              />
              <p><strong>Processor:</strong> {laptop1Details.processor}</p>
              <p><strong>OS:</strong> {laptop1Details.os}</p>
              <p><strong>RAM:</strong> {laptop1Details.ram}</p>
              <p><strong>Memory Storage:</strong> {laptop1Details.memory_storage}</p>
              <p><strong>Pre-installed Software:</strong> {laptop1Details.pre_installed_software}</p>
              <p><strong>Graphics:</strong> {laptop1Details.graphics}</p>
              <p><strong>Camera:</strong> {laptop1Details.camera}</p>
              <p><strong>Display:</strong> {laptop1Details.display}</p>
              <p><strong>Battery:</strong> {laptop1Details.battery}</p>
              <p><strong>Connectivity:</strong> {laptop1Details.connectivity}</p>
              <p><strong>Audio:</strong> {laptop1Details.audio}</p>
            </div>
          )}
        </div>

        {/* Column 2: Laptop 2 */}
        <div className="compare-column">
          <h2>Select Laptop 2</h2>
          <select
            value={selectedLaptop2 || ''}
            onChange={(e) => handleSelectLaptop2(e.target.value)}
          >
            <option value="">Select a laptop</option>
            {laptops.map((laptop) => (
              <option key={laptop.id} value={laptop.id}>
                {laptop.model_name}
              </option>
            ))}
          </select>

          {laptop2Details && (
            <div className="compare-details">
              <h4>{laptop2Details.brand_name} {laptop2Details.model_name}</h4>
              <img
                src={laptop2Details.image_url}
                alt={laptop2Details.model_name}
                style={{ width: '200px', height: 'auto' }}
              />
              <p><strong>Processor:</strong> {laptop2Details.processor}</p>
              <p><strong>OS:</strong> {laptop2Details.os}</p>
              <p><strong>RAM:</strong> {laptop2Details.ram}</p>
              <p><strong>Memory Storage:</strong> {laptop2Details.memory_storage}</p>
              <p><strong>Pre-installed Software:</strong> {laptop2Details.pre_installed_software}</p>
              <p><strong>Graphics:</strong> {laptop2Details.graphics}</p>
              <p><strong>Camera:</strong> {laptop2Details.camera}</p>
              <p><strong>Display:</strong> {laptop2Details.display}</p>
              <p><strong>Battery:</strong> {laptop2Details.battery}</p>
              <p><strong>Connectivity:</strong> {laptop2Details.connectivity}</p>
              <p><strong>Audio:</strong> {laptop2Details.audio}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompareLaptopsPage;
