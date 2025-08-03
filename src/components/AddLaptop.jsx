import React, { useState } from 'react';

const AddLaptop = () => {
  const [laptopDetails, setLaptopDetails] = useState({
    id: '',
    brand_name: '',
    model_name: '',
    image_url: '',
    processor: '',
    os: '',
    ram: '',
    memory_storage: '',
    pre_installed_software: '',
    graphics: '',
    camera: '',
    display: '',
    battery: '',
    connectivity: '',
    audio: '',
    additional_info: '',
  });

  const changeHandler = (e) => {
    setLaptopDetails({ ...laptopDetails, [e.target.name]: e.target.value });
  };

  const add_laptop = async () => {
    if (!laptopDetails.brand_name || !laptopDetails.model_name || !laptopDetails.image_url) {
      alert('Please fill out all required fields!');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/add/laptops', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(laptopDetails),
      });

      const data = await response.json();

      if (data.success) {
        setLaptopDetails({
          id: '',
          brand_name: '',
          model_name: '',
          image_url: '',
          processor: '',
          os: '',
          ram: '',
          memory_storage: '',
          pre_installed_software: '',
          graphics: '',
          camera: '',
          display: '',
          battery: '',
          connectivity: '',
          audio: '',
          additional_info: '',
        }); // Reset the form
      } else {
        alert('Laptop added successfully!');
      }
    } catch (error) {
      console.error('Error adding laptop:', error);
      alert('An error occurred while adding the laptop. Please try again later.');
    }
  };

  return (
    <div className="p-8 box-border bg-white w-full rounded-sm mt-4 lg:m-7">
      <div className="mb-3">
        <h4 className="bold-18 pb-2"> Laptop ID: </h4>
        <input
          value={laptopDetails.id}
          onChange={changeHandler}
          type="text"
          name="id"
          placeholder="Type here..."
          className="bg-primary outline-none max-w-80 w-full py-3 px-4"
        />
      </div>
      <div className="mb-3">
        <h4 className="bold-18 pb-2"> Laptop Brand: </h4>
        <input
          value={laptopDetails.brand_name}
          onChange={changeHandler}
          type="text"
          name="brand_name"
          placeholder="Type here..."
          className="bg-primary outline-none max-w-80 w-full py-3 px-4"
        />
      </div>
      <div className="mb-3">
        <h4 className="bold-18 pb-2"> Laptop Model: </h4>
        <input
          value={laptopDetails.model_name}
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
                setLaptopDetails((prev) => ({ ...prev, image_url: data.image_url }));
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
        <h4 className="bold-18 pb-2"> Processor: </h4>
        <input
          value={laptopDetails.processor}
          onChange={changeHandler}
          type="text"
          name="processor"
          placeholder="Type here..."
          className="bg-primary outline-none max-w-80 w-full py-3 px-4"
        />
      </div>
      <div className="mb-3">
        <h4 className="bold-18 pb-2"> Operating System: </h4>
        <input
          value={laptopDetails.os}
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
          value={laptopDetails.ram}
          onChange={changeHandler}
          type="text"
          name="ram"
          placeholder="Type here..."
          className="bg-primary outline-none max-w-80 w-full py-3 px-4"
        />
      </div>
      <div className="mb-3">
        <h4 className="bold-18 pb-2"> Memory Storage: </h4>
        <input
          value={laptopDetails.memory_storage}
          onChange={changeHandler}
          type="text"
          name="memory_storage"
          placeholder="Type here..."
          className="bg-primary outline-none max-w-80 w-full py-3 px-4"
        />
      </div>
      <div className="mb-3">
        <h4 className="bold-18 pb-2"> Pre-Installed Software: </h4>
        <input
          value={laptopDetails.pre_installed_software}
          onChange={changeHandler}
          type="text"
          name="pre_installed_software"
          placeholder="Type here..."
          className="bg-primary outline-none max-w-80 w-full py-3 px-4"
        />
      </div>
      <div className="mb-3">
        <h4 className="bold-18 pb-2"> Graphics: </h4>
        <input
          value={laptopDetails.graphics}
          onChange={changeHandler}
          type="text"
          name="graphics"
          placeholder="Type here..."
          className="bg-primary outline-none max-w-80 w-full py-3 px-4"
        />
      </div>
      <div className="mb-3">
        <h4 className="bold-18 pb-2"> Camera: </h4>
        <input
          value={laptopDetails.camera}
          onChange={changeHandler}
          type="text"
          name="camera"
          placeholder="Type here..."
          className="bg-primary outline-none max-w-80 w-full py-3 px-4"
        />
      </div>
      <div className="mb-3">
        <h4 className="bold-18 pb-2"> Display: </h4>
        <input
          value={laptopDetails.display}
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
          value={laptopDetails.battery}
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
          value={laptopDetails.connectivity}
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
          value={laptopDetails.audio}
          onChange={changeHandler}
          type="text"
          name="audio"
          placeholder="Type here..."
          className="bg-primary outline-none max-w-80 w-full py-3 px-4"
        />
      </div>
      <div className="mb-3">
        <h4 className="bold-18 pb-2"> Additional Features: </h4>
        <input
          value={laptopDetails.additional_info}
          onChange={changeHandler}
          type="text"
          name="additional_info"
          placeholder="Type here..."
          className="bg-primary outline-none max-w-80 w-full py-3 px-4"
        />
      </div>
      <button
        onClick={add_laptop}
        className="btn_dark_rounded mt-4 flexCenter gap-x-1"
      >
        Add Laptop
      </button>
    </div>
  );
};

export default AddLaptop;
