import React, { useState } from 'react';

const AddAudio = () => {
  const [audioDetails, setAudioDetails] = useState({
    id: '',
    brand_name: '',
    model_name: '',
    image_url: '',
    connectivity: '',
    battery: '',
    features: '',
    quick_access_controls: '',
    additional_info: '',
  });

  const changeHandler = (e) => {
    setAudioDetails({ ...audioDetails, [e.target.name]: e.target.value });
  };

  const add_audio = async () => {
    if (!audioDetails.brand_name || !audioDetails.model_name || !audioDetails.image_url) {
      alert('Please fill out all required fields!');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/add/audio', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(audioDetails),
      });

      const data = await response.json();

      if (data.success) {
        setAudioDetails({
          id: '',
          brand_name: '',
          model_name: '',
          image_url: '',
          connectivity: '',
          battery: '',
          features: '',
          quick_access_controls: '',
          additional_info: '',
        }); // Reset the form
      } else {
        alert('Audio device added successfully!');
      }
    } catch (error) {
      console.error('Error adding audio device:', error);
      alert('An error occurred while adding the audio device. Please try again later.');
    }
  };

  return (
    <div className="p-8 box-border bg-white w-full rounded-sm mt-4 lg:m-7">
      <div className="mb-3">
        <h4 className="bold-18 pb-2"> Audio Device ID: </h4>
        <input
          value={audioDetails.id}
          onChange={changeHandler}
          type="text"
          name="id"
          placeholder="Type here..."
          className="bg-primary outline-none max-w-80 w-full py-3 px-4"
        />
      </div>
      <div className="mb-3">
        <h4 className="bold-18 pb-2"> Audio Device Brand: </h4>
        <input
          value={audioDetails.brand_name}
          onChange={changeHandler}
          type="text"
          name="brand_name"
          placeholder="Type here..."
          className="bg-primary outline-none max-w-80 w-full py-3 px-4"
        />
      </div>
      <div className="mb-3">
        <h4 className="bold-18 pb-2"> Audio Device Model: </h4>
        <input
          value={audioDetails.model_name}
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
                setAudioDetails((prev) => ({ ...prev, image_url: data.image_url }));
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
        <h4 className="bold-18 pb-2"> Connectivity: </h4>
        <input
          value={audioDetails.connectivity}
          onChange={changeHandler}
          type="text"
          name="connectivity"
          placeholder="Type here..."
          className="bg-primary outline-none max-w-80 w-full py-3 px-4"
        />
      </div>
      <div className="mb-3">
        <h4 className="bold-18 pb-2"> Battery: </h4>
        <input
          value={audioDetails.battery}
          onChange={changeHandler}
          type="text"
          name="battery"
          placeholder="Type here..."
          className="bg-primary outline-none max-w-80 w-full py-3 px-4"
        />
      </div>
      <div className="mb-3">
        <h4 className="bold-18 pb-2"> Features: </h4>
        <input
          value={audioDetails.features}
          onChange={changeHandler}
          type="text"
          name="features"
          placeholder="Type here..."
          className="bg-primary outline-none max-w-80 w-full py-3 px-4"
        />
      </div>
      <div className="mb-3">
        <h4 className="bold-18 pb-2"> Quick Access Controls: </h4>
        <input
          value={audioDetails.quick_access_controls}
          onChange={changeHandler}
          type="text"
          name="quick_access_controls"
          placeholder="Type here..."
          className="bg-primary outline-none max-w-80 w-full py-3 px-4"
        />
      </div>
      <div className="mb-3">
        <h4 className="bold-18 pb-2"> Additional Info: </h4>
        <input
          value={audioDetails.additional_info}
          onChange={changeHandler}
          type="text"
          name="additional_info"
          placeholder="Type here..."
          className="bg-primary outline-none max-w-80 w-full py-3 px-4"
        />
      </div>
      <button
        onClick={add_audio}
        className="btn_dark_rounded mt-4 flexCenter gap-x-1"
      >
        Add Audio Device
      </button>
    </div>
  );
};

export default AddAudio;
