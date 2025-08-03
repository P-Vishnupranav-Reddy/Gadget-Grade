import React, { useState, useEffect } from 'react';
import Sidebar2 from '../components/Sidebar2';

const ComparePage = () => {
  const [smartphones, setSmartphones] = useState([]); // Store the list of smartphones
  const [selectedPhone1, setSelectedPhone1] = useState(null); // ID of the first selected smartphone
  const [selectedPhone2, setSelectedPhone2] = useState(null); // ID of the second selected smartphone
  const [phone1Details, setPhone1Details] = useState(null); // Details of the first smartphone
  const [phone2Details, setPhone2Details] = useState(null); // Details of the second smartphone

  // Fetch smartphones from the backend
  useEffect(() => {
    const fetchSmartphones = async () => {
      try {
        const response = await fetch('http://localhost:5000/get/smartphones'); // Replace with your API endpoint
        const data = await response.json();
        setSmartphones(data || []); // Ensure the data is stored properly
      } catch (error) {
        console.error('Error fetching smartphones:', error);
      }
    };

    fetchSmartphones();
  }, []);

  // Handle selection changes
  const handleSelectPhone1 = (id) => {
    const phone = smartphones.find((phone) => phone.id === parseInt(id)); // Find smartphone by ID
    setSelectedPhone1(id);
    setPhone1Details(phone);
  };

  const handleSelectPhone2 = (id) => {
    const phone = smartphones.find((phone) => phone.id === parseInt(id)); // Find smartphone by ID
    setSelectedPhone2(id);
    setPhone2Details(phone);
  };

  return (
    <div className="compare-page">
      <div className="app-container">
      <Sidebar2 /></div>
      <h1 className="title">Compare Smartphones</h1>
      <div className="compare-container">
        {/* Column 1: Phone 1 */}
        <div className="compare-column">
          <h2 className='title1'>Select Phone 1</h2>
          <select
            value={selectedPhone1 || ''}
            onChange={(e) => handleSelectPhone1(e.target.value)}
          >
            <option value="">Select a smartphone</option>
            {smartphones.map((phone) => (
              <option key={phone.id} value={phone.id}>
                {phone.model_name}
              </option>
            ))}
          </select>

          {phone1Details && (
            <div className="compare-details">
              <h4>{phone1Details.brand_name} {phone1Details.model_name}</h4>
              <img 
                src={phone1Details.image_url} 
                alt={phone1Details.model_name} 
                style={{ width: '200px', height: 'auto' }} 
              />
              <p><strong>OS:</strong> {phone1Details.os}</p>
              <p><strong>RAM:</strong> {phone1Details.ram}</p>
              <p><strong>CPU Model:</strong> {phone1Details.cpu_model}</p>
              <p><strong>Memory Storage:</strong> {phone1Details.memory_storage}</p>
              <p><strong>Camera:</strong> {phone1Details.camera}</p>
              <p><strong>Display:</strong> {phone1Details.display}</p>
              <p><strong>Battery:</strong> {phone1Details.battery}</p>
              <p><strong>Connectivity:</strong> {phone1Details.connectivity}</p>
              <p><strong>Audio:</strong> {phone1Details.audio}</p>
              <p><strong>Additional Info:</strong> {phone1Details.additional_info}</p>
              <p><strong>Available Colours:</strong> {phone1Details.available_colours}</p>
            </div>
          )}
        </div>

        {/* Column 2: Phone 2 */}
        <div className="compare-column">
          <h2 className='title2'>Select Phone 2</h2>
          <select
            value={selectedPhone2 || ''}
            onChange={(e) => handleSelectPhone2(e.target.value)}
          >
            <option value="">Select a smartphone</option>
            {smartphones.map((phone) => (
              <option key={phone.id} value={phone.id}>
                {phone.model_name}
              </option>
            ))}
          </select>

          {phone2Details && (
            <div className="compare-details">
              <h3>{phone2Details.brand_name} {phone2Details.model_name}</h3>
              <img 
                src={phone2Details.image_url} 
                alt={phone2Details.model_name} 
                style={{ width: '200px', height: 'auto' }} 
              />
              <p className='specs-item'><strong>OS:</strong> {phone2Details.os}</p>
              <p><strong>RAM:</strong> {phone2Details.ram}</p>
              <p><strong>CPU Model:</strong> {phone2Details.cpu_model}</p>
              <p><strong>Memory Storage:</strong> {phone2Details.memory_storage}</p>
              <p><strong>Camera:</strong> {phone2Details.camera}</p>
              <p><strong>Display:</strong> {phone2Details.display}</p>
              <p><strong>Battery:</strong> {phone2Details.battery}</p>
              <p><strong>Connectivity:</strong> {phone2Details.connectivity}</p>
              <p><strong>Audio:</strong> {phone2Details.audio}</p>
              <p><strong>Additional Info:</strong> {phone2Details.additional_info}</p>
              <p><strong>Available Colours:</strong> {phone2Details.available_colours}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ComparePage;
