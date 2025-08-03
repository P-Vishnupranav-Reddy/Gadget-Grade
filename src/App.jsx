import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"; 
import Login from "./pages/Login";
import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';

import Product1 from "./pages/PhoneProduct";
import Product from "./pages/LaptopProduct";
import SmartwatchDisplay from "./pages/WatchProduct";
import AudioDeviceDisplay from "./pages/AudioProduct";


import ProductReviews from "./pages/PhoneReviews";
import WatchReviews from "./pages/WatchReviews";
import AudioReviews from "./pages/AudioReviews";

import LaptopReviews from './pages/LaptopReviews';

//Compare Routers
import ComparePage from "./pages/ComparePhone";
import CompareLaptopsPage from "./pages/CompareLaptop";
import CompareSmartwatchesPage from "./pages/CompareWatch";
import CompareAudioDevicesPage from "./pages/CompareAudio";


import UserReviewHistory from "./pages/Review";

export default function App() {
  return (
    <main className="bg-primary text-tertiary">
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          
          {/* ViewReviews Route for different categories */}
          <Route path="/see/smartphones" element={<ProductReviews />} />

          {/* Compare Page */}
          <Route path="/compare/smartphones" element={<ComparePage />} />
          
          {/* Specific Gadget Review Routes */}
          <Route path="/see/smartphones" element={<ProductReviews />} />
          <Route path="/see/laptops" element={<LaptopReviews />} />
          <Route path="/see/smartwatches" element={<WatchReviews />} />
          <Route path="/see/audio" element={<AudioReviews />} />

          {/* Specific Gadget View Routes */}
          <Route path="/smartphones" element={<Product1 />} /> 
          <Route path="/laptops" element={<Product />} />
          <Route path="/smartwatches" element={<SmartwatchDisplay />} />
          <Route path="/audio" element={<AudioDeviceDisplay />} />

          {/* Specific Gadget Compare Routes */}
          <Route path="/compare/smartphones" element={<ComparePage />} />
          <Route path="/compare/laptops" element={<CompareLaptopsPage />} />
          <Route path="/compare/smart-watches" element={<CompareSmartwatchesPage />} />
          <Route path="/compare/audio" element={<CompareAudioDevicesPage />} />
          
          <Route path="/login" element={<Login />} />
          <Route path="/rewards" element={<UserReviewHistory />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </main>
  );
}
