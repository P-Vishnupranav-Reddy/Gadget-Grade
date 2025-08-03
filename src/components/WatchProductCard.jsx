import React from "react";

const WatchCard = ({ watch }) => {
  return (
    <div className="gadget-card-display">
      <img src={watch.image_url} alt={watch.model_name} style={{ width: '200px', height: 'auto' }} />
      <h3>
        {watch.brand_name} {watch.model_name}
      </h3>
      <p>
        OS: {watch.os} | CPU: {watch.cpu_model} | RAM: {watch.ram} | Storage: {watch.memory_storage}
      </p>
      <br />
      <p>Display: {watch.display}</p>
      <br />
      <p>Battery: {watch.battery}</p>
      <br />
      <p>Connectivity: {watch.connectivity}</p>
      <br />
      <p>Audio: {watch.audio}</p>
      <br />
      <p>Features: {watch.features}</p>
      <br />
      <p>Safety Features: {watch.safety_features}</p>
      <br />
      <p>Available Colours: {watch.available_colours}</p>
    </div>
  );
};

export default WatchCard;
