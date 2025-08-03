import React, { useState, useEffect } from 'react';
import Sidebar2 from '../components/Sidebar2';

const CompareAudioDevicesPage = () => {
  const [audioDevices, setAudioDevices] = useState([]); // Store the list of audio devices
  const [selectedDevice1, setSelectedDevice1] = useState(null); // ID of the first selected audio device
  const [selectedDevice2, setSelectedDevice2] = useState(null); // ID of the second selected audio device
  const [device1Details, setDevice1Details] = useState(null); // Details of the first audio device
  const [device2Details, setDevice2Details] = useState(null); // Details of the second audio device

  // Fetch audio devices from the backend
  useEffect(() => {
    const fetchAudioDevices = async () => {
      try {
        const response = await fetch('http://localhost:5000/get/audio'); // Replace with your API endpoint
        const data = await response.json();
        setAudioDevices(data || []); // Ensure the data is stored properly
      } catch (error) {
        console.error('Error fetching audio devices:', error);
      }
    };

    fetchAudioDevices();
  }, []);

  // Handle selection changes
  const handleSelectDevice1 = (id) => {
    const device = audioDevices.find((device) => device.id === parseInt(id)); // Find audio device by ID
    setSelectedDevice1(id);
    setDevice1Details(device);
  };

  const handleSelectDevice2 = (id) => {
    const device = audioDevices.find((device) => device.id === parseInt(id)); // Find audio device by ID
    setSelectedDevice2(id);
    setDevice2Details(device);
  };

  return (
    <div className="compare-page">
      <div className="app-container">
        <Sidebar2 />
      </div>
      <h1 className="title">Compare Audio Devices</h1>
      <div className="compare-container">
        {/* Column 1: Device 1 */}
        <div className="compare-column">
          <h2>Select Audio Device 1</h2>
          <select
            value={selectedDevice1 || ''}
            onChange={(e) => handleSelectDevice1(e.target.value)}
          >
            <option value="">Select an audio device</option>
            {audioDevices.map((device) => (
              <option key={device.id} value={device.id}>
                {device.model_name}
              </option>
            ))}
          </select>

          {device1Details && (
            <div className="compare-details">
              <h4>{device1Details.brand_name} {device1Details.model_name}</h4>
              <img
                src={device1Details.image_url}
                alt={device1Details.model_name}
                style={{ width: '200px', height: 'auto' }}
              />
              <p><strong>Connectivity:</strong> {device1Details.connectivity}</p>
              <p><strong>Battery:</strong> {device1Details.battery}</p>
              <p><strong>Features:</strong> {device1Details.features}</p>
              <p><strong>Quick Access Controls:</strong> {device1Details.Quick_access_controls}</p>
              <p><strong>Additional Info:</strong> {device1Details.additional_info}</p>
            </div>
          )}
        </div>

        {/* Column 2: Device 2 */}
        <div className="compare-column">
          <h2>Select Audio Device 2</h2>
          <select
            value={selectedDevice2 || ''}
            onChange={(e) => handleSelectDevice2(e.target.value)}
          >
            <option value="">Select an audio device</option>
            {audioDevices.map((device) => (
              <option key={device.id} value={device.id}>
                {device.model_name}
              </option>
            ))}
          </select>

          {device2Details && (
            <div className="compare-details">
              <h4>{device2Details.brand_name} {device2Details.model_name}</h4>
              <img
                src={device2Details.image_url}
                alt={device2Details.model_name}
                style={{ width: '200px', height: 'auto' }}
              />
              <p><strong>Connectivity:</strong> {device2Details.connectivity}</p>
              <p><strong>Battery:</strong> {device2Details.battery}</p>
              <p><strong>Features:</strong> {device2Details.features}</p>
              <p><strong>Quick Access Controls:</strong> {device2Details.Quick_access_controls}</p>
              <p><strong>Additional Info:</strong> {device2Details.additional_info}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompareAudioDevicesPage;
