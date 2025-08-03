import React, { useState } from 'react';

const Addphone = () => {
  const [phonedetails, setphonedetails] = useState({
    id: '',
    brand_name: '',
    model_name: '',
    image_url: '',
    os: '',
    ram: '',
    cpu_model: '',
    memory_storage: '',
    camera: '',
    display: '',
    battery: '',
    connectivity: '',
    audio: '',
    additional_info: '',
    available_colours: '',
    category: '', // Added to track the category
  });

  const changeHandler = (e) => {
    setphonedetails({ ...phonedetails, [e.target.name]: e.target.value });
  };

  const add_phone = async () => {
    if (!phonedetails.brand_name || !phonedetails.model_name || !phonedetails.image_url) {
      alert('Please fill out all required fields!');
      return;
    }
  
    try {
      const response = await fetch('http://localhost:5000/add/smartphones', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(phonedetails),
      });
  
      const data = await response.json();
  
      if (data.success) {
        setphonedetails({
          id: '',
          brand_name: '',
          model_name: '',
          image_url: '',
          os: '',
          ram: '',
          cpu_model: '',
          memory_storage: '',
          camera: '',
          display: '',
          battery: '',
          connectivity: '',
          audio: '',
          additional_info: '',
          available_colours: '',
          category: '',
        }); // Reset the form
      } else {
        alert('Phone added successfully!');
      }
    } catch (error) {
      console.error('Error adding phone:', error);
      alert('An error occurred while adding the phone. Please try again later.');
    }
  };
  

  return (
    <div className="p-8 box-border bg-white w-full rounded-sm mt-4 lg:m-7">
      <div className="mb-3">
        <h4 className="bold-18 pb-2"> Smartphone ID: </h4>
        <input
          value={phonedetails.id}
          onChange={changeHandler}
          type="text"
          name="id"
          placeholder="Type here..."
          className="bg-primary outline-none max-w-80 w-full py-3 px-4"
        />
      </div>
      <div className="mb-3">
        <h4 className="bold-18 pb-2"> Smartphone Brand: </h4>
        <input
          value={phonedetails.brand_name}
          onChange={changeHandler}
          type="text"
          name="brand_name"
          placeholder="Type here..."
          className="bg-primary outline-none max-w-80 w-full py-3 px-4"
        />
      </div>
      <div className="mb-3">
        <h4 className="bold-18 pb-2"> Smartphone Model: </h4>
        <input
          value={phonedetails.model_name}
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
          setphonedetails((prev) => ({ ...prev, image_url: data.image_url }));
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
          value={phonedetails.os}
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
          value={phonedetails.ram}
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
          value={phonedetails.cpu_model}
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
          value={phonedetails.memory_storage}
          onChange={changeHandler}
          type="text"
          name="memory_storage"
          placeholder="Type here..."
          className="bg-primary outline-none max-w-80 w-full py-3 px-4"
        />
      </div>
      <div className="mb-3">
        <h4 className="bold-18 pb-2"> Camera: </h4>
        <input
          value={phonedetails.camera}
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
          value={phonedetails.display}
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
          value={phonedetails.battery}
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
          value={phonedetails.connectivity}
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
          value={phonedetails.audio}
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
          value={phonedetails.additional_info}
          onChange={changeHandler}
          type="text"
          name="additional_info"
          placeholder="Type here..."
          className="bg-primary outline-none max-w-80 w-full py-3 px-4"
        />
      </div>
      <div className="mb-3">
        <h4 className="bold-18 pb-2"> Available Colours: </h4>
        <input
          value={phonedetails.available_colours}
          onChange={changeHandler}
          type="text"
          name="available_colours"
          placeholder="Type here..."
          className="bg-primary outline-none max-w-80 w-full py-3 px-4"
        />
      </div>
      <button
        onClick={add_phone}
        className="btn_dark_rounded mt-4 flexCenter gap-x-1"
      >
        Add Smartphone
      </button>
    </div>
  );
};

export default Addphone;
