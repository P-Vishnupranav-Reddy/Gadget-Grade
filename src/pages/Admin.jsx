import React from 'react'
import Sidebar from '../components/Sidebar'
import { Routes, Route } from 'react-router-dom'
import Addphone from '../components/Addphone'
import AddLaptop from '../components/AddLaptop'
import AddSmartwatch from '../components/AddSmartwatch'
import AddAudio from '../components/AddAudio'
import Listphone from '../components/Listphone'
import ListLaptops from '../components/ListLaptop'
import ListSmartwatches from '../components/ListWatches'
import ListAudio from '../components/ListAudio'


import './App.css'
const Admin = () => {
  return (
    <div className='lg:flex'>
      <Sidebar />
      <Routes>
        <Route path='/add/smartphones' element={<Addphone />}/>
        <Route path='/add/laptops' element={<AddLaptop />}/>
        <Route path='/add/smartwatches' element={<AddSmartwatch />}/>
        <Route path='/add/audio' element={<AddAudio />}/>
        <Route path='/get/smartphones' element={<Listphone />}/>
        <Route path='/get/laptops' element={<ListLaptops />}/>
        <Route path='/get/smartwatches' element={<ListSmartwatches />}/>
        <Route path='/get/audio' element={<ListAudio />}/>
      </Routes>
    </div>
  )
}

export default Admin