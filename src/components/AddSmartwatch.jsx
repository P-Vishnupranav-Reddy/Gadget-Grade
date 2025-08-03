import React, { useState } from 'react';

const AddSmartwatch = () => {
  const [smartwatchDetails, setSmartwatchDetails] = useState({
    id: '',
    brand_name: '',
    model_name: '',
    image_url: '',
    os: '',
    ram: '',
    cpu_model: '',
    memory_storage: '',
    display: '',
    battery: '',
    connectivity: '',
    audio: '',
    features: '',
    safety_features: '',
    available_colours: '',
  });

  const changeHandler = (e) => {
    setSmartwatchDetails({ ...smartwatchDetails, [e.target.name]: e.target.value });
  };

  const add_smartwatch = async () => {
    if (!smartwatchDetails.brand_name || !smartwatchDetails.model_name || !smartwatchDetails.image_url) {
      alert('Please fill out all required fields!');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/add/smartwatches', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(smartwatchDetails),
      });

      const data = await response.json();

      if (data.success) {
        setSmartwatchDetails({
          id: '',
          brand_name: '',
          model_name: '',
          image_url: '',
          os: '',
          ram: '',
          cpu_model: '',
          memory_storage: '',
          display: '',
          battery: '',
          connectivity: '',
          audio: '',
          features: '',
          safety_features: '',
          available_colours: '',
        }); // Reset the form
      } else {
        alert('Smartwatch added successfully!');
      }
    } catch (error) {
      console.error('Error adding smartwatch:', error);
      alert('An error occurred while adding the smartwatch. Please try again later.');
    }
  };

  return (
    <div className="p-8 box-border bg-white w-full rounded-sm mt-4 lg:m-7">
      <div className="mb-3">
        <h4 className="bold-18 pb-2"> Smartwatch ID: </h4>
        <input
          value={smartwatchDetails.id}
          onChange={changeHandler}
          type="text"
          name="id"
          placeholder="Type here..."
          className="bg-primary outline-none max-w-80 w-full py-3 px-4"
        />
      </div>
      <div className="mb-3">
        <h4 className="bold-18 pb-2"> Smartwatch Brand: </h4>
        <input
          value={smartwatchDetails.brand_name}
          onChange={changeHandler}
          type="text"
          name="brand_name"
          placeholder="Type here..."
          className="bg-primary outline-none max-w-80 w-full py-3 px-4"
        />
      </div>
      <div className="mb-3">
        <h4 className="bold-18 pb-2"> Smartwatch Model: </h4>
        <input
          value={smartwatchDetails.model_name}
          onChange={changeHandler}
          type="text"
          name="model_name"
          placeholder="Type here..."
          className="bg-primary outline-none max-w-80 w-full py-3 px-4"
        />
      </div>
      <div className="mb-3">
        <h4 className="bold-18 pb-2"> Upload Image: </h4>
        <input
          type="file"
          onChange={async (e) => {
            const file = e.target.files[0];
            const formData = new FormData();
            formData.append('gadget', file);

            try {
              const response = await fetch('http://localhost:5000/upload', {
                method: 'POST',
                body: formData,
              });

              const data = await response.json();
              if (data.success) {
                setSmartwatchDetails((prev) => ({ ...prev, image_url: data.image_url }));
                alert('Image uploaded successfully!');
              } else {
                alert('Failed to upload image.');
              }
            } catch (error) {
              console.error('Error uploading image:', error);
              alert('An error occurred while uploading the image.');
            }
          }}
          className="bg-primary outline-none max-w-80 w-full py-3 px-4"
        />
      </div>
      <div className="mb-3">
        <h4 className="bold-18 pb-2"> Operating System: </h4>
        <input
          value={smartwatchDetails.os}
          onChange={changeHandler}
          type="text"
          name="os"
          placeholder="Type here..."
          className="bg-primary outline-none max-w-80 w-full py-3 px-4"
        />
      </div>
      <div className="mb-3">
        <h4 className="bold-18 pb-2"> RAM: </h4>
        <input
          value={smartwatchDetails.ram}
          onChange={changeHandler}
          type="text"
          name="ram"
          placeholder="Type here..."
          className="bg-primary outline-none max-w-80 w-full py-3 px-4"
        />
      </div>
      <div className="mb-3">
        <h4 className="bold-18 pb-2"> CPU Model: </h4>
        <input
          value={smartwatchDetails.cpu_model}
          onChange={changeHandler}
          type="text"
          name="cpu_model"
          placeholder="Type here..."
          className="bg-primary outline-none max-w-80 w-full py-3 px-4"
        />
      </div>
      <div className="mb-3">
        <h4 className="bold-18 pb-2"> Memory Storage: </h4>
        <input
          value={smartwatchDetails.memory_storage}
          onChange={changeHandler}
          type="text"
          name="memory_storage"
          placeholder="Type here..."
          className="bg-primary outline-none max-w-80 w-full py-3 px-4"
        />
      </div>
      <div className="mb-3">
        <h4 className="bold-18 pb-2"> Display: </h4>
        <input
          value={smartwatchDetails.display}
          onChange={changeHandler}
          type="text"
          name="display"
          placeholder="Type here..."
          className="bg-primary outline-none max-w-80 w-full py-3 px-4"
        />
      </div>
      <div className="mb-3">
        <h4 className="bold-18 pb-2"> Battery: </h4>
        <input
          value={smartwatchDetails.battery}
          onChange={changeHandler}
          type="text"
          name="battery"
          placeholder="Type here..."
          className="bg-primary outline-none max-w-80 w-full py-3 px-4"
        />
      </div>
      <div className="mb-3">
        <h4 className="bold-18 pb-2"> Connectivity: </h4>
        <input
          value={smartwatchDetails.connectivity}
          onChange={changeHandler}
          type="text"
          name="connectivity"
          placeholder="Type here..."
          className="bg-primary outline-none max-w-80 w-full py-3 px-4"
        />
      </div>
      <div className="mb-3">
        <h4 className="bold-18 pb-2"> Audio: </h4>
        <input
          value={smartwatchDetails.audio}
          onChange={changeHandler}
          type="text"
          name="audio"
          placeholder="Type here..."
          className="bg-primary outline-none max-w-80 w-full py-3 px-4"
        />
      </div>
      <div className="mb-3">
        <h4 className="bold-18 pb-2"> Features: </h4>
        <input
          value={smartwatchDetails.features}
          onChange={changeHandler}
          type="text"
          name="features"
          placeholder="Type here..."
          className="bg-primary outline-none max-w-80 w-full py-3 px-4"
        />
      </div>
      <div className="mb-3">
        <h4 className="bold-18 pb-2"> Safety Features: </h4>
        <input
          value={smartwatchDetails.safety_features}
          onChange={changeHandler}
          type="text"
          name="safety_features"
          placeholder="Type here..."
          className="bg-primary outline-none max-w-80 w-full py-3 px-4"
        />
      </div>
      <div className="mb-3">
        <h4 className="bold-18 pb-2"> Available Colours: </h4>
        <input
          value={smartwatchDetails.available_colours}
          onChange={changeHandler}
          type="text"
          name="available_colours"
          placeholder="Type here..."
          className="bg-primary outline-none max-w-80 w-full py-3 px-4"
        />
      </div>
      <button
        onClick={add_smartwatch}
        className="btn_dark_rounded mt-4 flexCenter gap-x-1"
      >
        Add Smartwatch
      </button>
    </div>
  );
};

export default AddSmartwatch;
