import React, { useState, useEffect } from 'react';
import Sidebar2 from '../components/Sidebar2';

const CompareSmartwatchesPage = () => {
  const [smartwatches, setSmartwatches] = useState([]); // Store the list of smartwatches
  const [selectedWatch1, setSelectedWatch1] = useState(null); // ID of the first selected smartwatch
  const [selectedWatch2, setSelectedWatch2] = useState(null); // ID of the second selected smartwatch
  const [watch1Details, setWatch1Details] = useState(null); // Details of the first smartwatch
  const [watch2Details, setWatch2Details] = useState(null); // Details of the second smartwatch

  // Fetch smartwatches from the backend
  useEffect(() => {
    const fetchSmartwatches = async () => {
      try {
        const response = await fetch('http://localhost:5000/get/smartwatches'); // Replace with your API endpoint
        const data = await response.json();
        setSmartwatches(data || []); // Ensure the data is stored properly
      } catch (error) {
        console.error('Error fetching smartwatches:', error);
      }
    };

    fetchSmartwatches();
  }, []);

  // Handle selection changes
  const handleSelectWatch1 = (id) => {
    const watch = smartwatches.find((watch) => watch.id === parseInt(id)); // Find smartwatch by ID
    setSelectedWatch1(id);
    setWatch1Details(watch);
  };

  const handleSelectWatch2 = (id) => {
    const watch = smartwatches.find((watch) => watch.id === parseInt(id)); // Find smartwatch by ID
    setSelectedWatch2(id);
    setWatch2Details(watch);
  };

  return (
    <div className="compare-page">
      <div className="app-container">
        <Sidebar2 />
      </div>
      <h1 className="title">Compare Smartwatches</h1>
      <div className="compare-container">
        {/* Column 1: Watch 1 */}
        <div className="compare-column">
          <h2>Select Smartwatch 1</h2>
          <select
            value={selectedWatch1 || ''}
            onChange={(e) => handleSelectWatch1(e.target.value)}
          >
            <option value="">Select a smartwatch</option>
            {smartwatches.map((watch) => (
              <option key={watch.id} value={watch.id}>
                {watch.model_name}
              </option>
            ))}
          </select>

          {watch1Details && (
            <div className="compare-details">
              <h4>{watch1Details.brand_name} {watch1Details.model_name}</h4>
              <img
                src={watch1Details.image_url}
                alt={watch1Details.model_name}
                style={{ width: '200px', height: 'auto' }}
              />
              <p><strong>OS:</strong> {watch1Details.os}</p>
              <p><strong>RAM:</strong> {watch1Details.ram}</p>
              <p><strong>CPU Model:</strong> {watch1Details.cpu_model}</p>
              <p><strong>Memory Storage:</strong> {watch1Details.memory_storage}</p>
              <p><strong>Display:</strong> {watch1Details.display}</p>
              <p><strong>Battery:</strong> {watch1Details.battery}</p>
              <p><strong>Connectivity:</strong> {watch1Details.connectivity}</p>
              <p><strong>Audio:</strong> {watch1Details.audio}</p>
              <p><strong>Features:</strong> {watch1Details.features}</p>
              <p><strong>Safety Features:</strong> {watch1Details.safety_features}</p>
              <p><strong>Available Colours:</strong> {watch1Details.available_colours}</p>
            </div>
          )}
        </div>

        {/* Column 2: Watch 2 */}
        <div className="compare-column">
          <h2>Select Smartwatch 2</h2>
          <select
            value={selectedWatch2 || ''}
            onChange={(e) => handleSelectWatch2(e.target.value)}
          >
            <option value="">Select a smartwatch</option>
            {smartwatches.map((watch) => (
              <option key={watch.id} value={watch.id}>
                {watch.model_name}
              </option>
            ))}
          </select>

          {watch2Details && (
            <div className="compare-details">
              <h4>{watch2Details.brand_name} {watch2Details.model_name}</h4>
              <img
                src={watch2Details.image_url}
                alt={watch2Details.model_name}
                style={{ width: '200px', height: 'auto' }}
              />
              <p><strong>OS:</strong> {watch2Details.os}</p>
              <p><strong>RAM:</strong> {watch2Details.ram}</p>
              <p><strong>CPU Model:</strong> {watch2Details.cpu_model}</p>
              <p><strong>Memory Storage:</strong> {watch2Details.memory_storage}</p>
              <p><strong>Display:</strong> {watch2Details.display}</p>
              <p><strong>Battery:</strong> {watch2Details.battery}</p>
              <p><strong>Connectivity:</strong> {watch2Details.connectivity}</p>
              <p><strong>Audio:</strong> {watch2Details.audio}</p>
              <p><strong>Features:</strong> {watch2Details.features}</p>
              <p><strong>Safety Features:</strong> {watch2Details.safety_features}</p>
              <p><strong>Available Colours:</strong> {watch2Details.available_colours}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompareSmartwatchesPage;
