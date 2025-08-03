import React from "react";

const AudioDeviceCard = ({ device }) => {
  return (
    <div className="gadget-card-display">
      <img src={device.image_url} alt={device.model_name} style={{ width: '200px', height: 'auto' }} />
      <h3>
        {device.brand_name} {device.model_name}
      </h3>
      <p>Connectivity: {device.connectivity}</p>
      <br />
      <p>Battery: {device.battery}</p>
      <br />
      <p>Features: {device.features}</p>
      <br />
      <p>Quick Access Controls: {device.Quick_access_controls}</p>
      <br />
      <p>Additional Info: {device.additional_info}</p>
    </div>
  );
};

export default AudioDeviceCard;
