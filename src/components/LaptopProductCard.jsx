import React from "react";

const LaptopCard = ({ laptop }) => {
  return (
    <div className="gadget-card-display">
      <img src={laptop.image_url} alt={laptop.model_name} style={{ width: '200px', height: 'auto' }} />
      <h3>
        {laptop.brand_name} {laptop.model_name}
      </h3>
      <p>
        Processor: {laptop.processor} | {laptop.os} | {laptop.ram} RAM | {laptop.memory_storage}
      </p>
      <br />
      <p>Graphics: {laptop.graphics}</p>
      <br />
      <p>Pre-installed Software: {laptop.pre_installed_software}</p>
      <br />
      <p>Camera: {laptop.camera}</p>
      <br />
      <p>Display: {laptop.display}</p>
      <br />
      <p>Battery: {laptop.battery}</p>
      <br />
      <p>Connectivity: {laptop.connectivity}</p>
      <br />
      <p>Audio: {laptop.audio}</p>
    </div>
  );
};

export default LaptopCard;
