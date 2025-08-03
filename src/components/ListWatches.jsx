import React, { useEffect, useState } from 'react'
import { TbTrash } from 'react-icons/tb'

const ListSmartwatches = () => {

  const [allSmartwatches, setAllSmartwatches] = useState([]);

  const fetchinfo = async () => {
    await fetch('http://localhost:5000/get/smartwatches')
      .then((res) => res.json())
      .then((data) => { setAllSmartwatches(data) });
  }

  useEffect(() => {
    fetchinfo();
  }, [])

  const remove_smartwatch = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/get/removesmartwatch`, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }), // Pass the id of the smartwatch to delete
      });

      const result = await response.json();

      if (result.success) {
        // Update the state by filtering out the deleted smartwatch
        setAllSmartwatches((prevSmartwatches) => prevSmartwatches.filter((smartwatch) => smartwatch.id !== id));
        alert('Smartwatch removed successfully!');
      } else {
        alert('Failed to delete the smartwatch.');
      }
    } catch (error) {
      console.error('Error deleting smartwatch:', error);
      alert('An error occurred while deleting the smartwatch.');
    }
  };

  return (
    <div className='p-2 box-border bg-white mb-0 rounded-sm w-full mt-4 sm:p-4 sm:m-7'>
      <h4 className='bold-22 p-5 uppercase'> SMARTWATCHES LIST </h4>
      <div className='max-h-[77vh] overflow-auto px-4 text-center'>
        <table className='w-full mx-auto'>
          <thead>
            <tr className='bg-primary bold-18 sm:regular-25 text-start py-12'>
              <th className='p-2'>SMARTWATCHES</th>
              <th className='p-2'>ID</th>
              <th className='p-2'>BRAND</th>
              <th className='p-2'>MODEL</th>
              <th className='p-1'>REMOVE</th>
            </tr>
          </thead>
          <tbody>
            {allSmartwatches.map((smartwatch, i) => (
              <tr key={i} className='border-b border-slate-900/20 text-gray-20 p-6 medium-22'>
                <td className='flexStart sm:flexCenter'>
                  <img src={smartwatch.image_url} alt='' height={75} width={75} className='rounded-lg ring-1 ring-slate-900/5 my-1' />
                </td>
                <td>
                  {smartwatch.id}
                </td>
                <td>
                  <div className='line-clamp-3'>
                    {smartwatch.brand_name}
                  </div>
                </td>
                <td>
                  {smartwatch.model_name}
                </td>
                <td>
                  <div className='bold-22 pl-6 sm:pl-16'>
                    <TbTrash onClick={() => remove_smartwatch(smartwatch.id)} />
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

export default ListSmartwatches;
