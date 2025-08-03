import React from "react";

const ProductCard = ({ phone }) => {
  return (
    <div className="gadget-card-display">
      <img src={phone.image_url} alt={phone.model_name} />
      <h3>
        {phone.brand_name} {phone.model_name}
      </h3>
      <p>{phone.os} | {phone.cpu_model} | {phone.ram} RAM | {phone.memory_storage}</p>
<br /> 
<p>Camera : {phone.camera}</p>
<br />
<p>Display : {phone.display}</p>
<br />
<p>Battery : {phone.battery}</p>
<br />
<p>Connectivity : {phone.connectivity}</p>
<br />
<p>Audio : {phone.audio}</p>
<br />
<p>Additional Info : {phone.additional_info}</p>
<br />
<p>Colours : {phone.available_colours}</p>
    </div>
  );
};

export default ProductCard;
