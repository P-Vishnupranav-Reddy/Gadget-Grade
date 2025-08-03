import React, { useEffect, useState } from 'react'
import { TbTrash } from 'react-icons/tb'

const ListLaptops = () => {

  const [allLaptops, setAllLaptops] = useState([]);

  const fetchinfo = async () => {
    await fetch('http://localhost:5000/get/laptops')
      .then((res) => res.json())
      .then((data) => { setAllLaptops(data) });
  }

  useEffect(() => {
    fetchinfo();
  }, [])

  const remove_laptop = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/get/removelaptops`, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }), // Pass the id of the laptop to delete
      });

      const result = await response.json();

      if (result.success) {
        // Update the state by filtering out the deleted laptop
        setAllLaptops((prevLaptops) => prevLaptops.filter((laptop) => laptop.id !== id));
        alert('Laptop removed successfully!');
      } else {
        alert('Failed to delete the laptop.');
      }
    } catch (error) {
      console.error('Error deleting laptop:', error);
      alert('An error occurred while deleting the laptop.');
    }
  };

  return (
    <div className='p-2 box-border bg-white mb-0 rounded-sm w-full mt-4 sm:p-4 sm:m-7'>
      <h4 className='bold-22 p-5 uppercase'> LAPTOPS LIST </h4>
      <div className='max-h-[77vh] overflow-auto px-4 text-center'>
        <table className='w-full mx-auto'>
          <thead>
            <tr className='bg-primary bold-18 sm:regular-25 text-start py-12'>
              <th className='p-2'>LAPTOPS</th>
              <th className='p-2'>ID</th>
              <th className='p-2'>BRAND</th>
              <th className='p-2'>MODEL</th>
              <th className='p-1'>REMOVE</th>
            </tr>
          </thead>
          <tbody>
            {allLaptops.map((laptop, i) => (
              <tr key={i} className='border-b border-slate-900/20 text-gray-20 p-6 medium-22'>
                <td className='flexStart sm:flexCenter'>
                  <img src={laptop.image_url} alt='' height={75} width={75} className='rounded-lg ring-1 ring-slate-900/5 my-1' />
                </td>
                <td>
                  {laptop.id}
                </td>
                <td>
                  <div className='line-clamp-3'>
                    {laptop.brand_name}
                  </div>
                </td>
                <td>
                  {laptop.model_name}
                </td>
                <td>
                  <div className='bold-22 pl-6 sm:pl-16'>
                    <TbTrash onClick={() => remove_laptop(laptop.id)} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ListLaptops;
